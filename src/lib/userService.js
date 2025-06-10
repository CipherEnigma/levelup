import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  orderBy,
  limit,
  arrayUnion
} from 'firebase/firestore';
import { db } from './firebase';

// Create or update user profile
export const createUserProfile = async (user) => {
  try {
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) {
      // Create new user profile
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: new Date(),
        level: 1,
        points: 0,
        completedChallenges: [],
        submissions: [],
        achievements: [],
        lastLogin: new Date()
      };
      
      await setDoc(userRef, userData);
      return userData;
    } else {
      // Update last login
      await updateDoc(userRef, {
        lastLogin: new Date()
      });
      return userSnap.data();
    }
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

// Get user profile
export const getUserProfile = async (uid) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Submit a challenge
export const submitChallenge = async (uid, challengeId, submissionLink) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const userData = userSnap.data();
      const submissions = userData.submissions || [];
      
      // Check if already submitted
      const existingSubmissionIndex = submissions.findIndex(sub => sub.challengeId === challengeId);
      
      const newSubmission = {
        challengeId,
        submissionLink,
        submittedAt: new Date(),
        status: 'submitted' // 'submitted', 'in-review', 'accepted', 'rejected'
      };
      
      if (existingSubmissionIndex >= 0) {
        // Update existing submission
        submissions[existingSubmissionIndex] = newSubmission;
      } else {
        // Add new submission
        submissions.push(newSubmission);
      }
      
      await updateDoc(userRef, {
        submissions
      });
      
      return { submissions };
    }
  } catch (error) {
    console.error('Error submitting challenge:', error);
    throw error;
  }
};

// Update submission status (for admin use)
export const updateSubmissionStatus = async (uid, challengeId, status, points = 0) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const userData = userSnap.data();
      const submissions = userData.submissions || [];
      const completedChallenges = userData.completedChallenges || [];
      
      // Find and update submission
      const submissionIndex = submissions.findIndex(sub => sub.challengeId === challengeId);
      if (submissionIndex >= 0) {
        submissions[submissionIndex].status = status;
        submissions[submissionIndex].reviewedAt = new Date();
        
        const updateData = { submissions };
        
        // If accepted, add points and mark as completed
        if (status === 'accepted') {
          if (!completedChallenges.includes(challengeId)) {
            updateData.completedChallenges = [...completedChallenges, challengeId];
            updateData.points = (userData.points || 0) + points;
          }
        }
        
        await updateDoc(userRef, updateData);
        return updateData;
      }
    }
  } catch (error) {
    console.error('Error updating submission status:', error);
    throw error;
  }
};

// Get all submissions (for admin review)
export const getAllSubmissions = async (status = 'submitted') => {
  try {
    const usersRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersRef);
    
    const allSubmissions = [];
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      if (userData.submissions) {
        userData.submissions.forEach(submission => {
          if (submission.status === status) {
            allSubmissions.push({
              ...submission,
              userId: doc.id,
              userEmail: userData.email,
              userName: userData.displayName
            });
          }
        });
      }
    });
    
    return allSubmissions;
  } catch (error) {
    console.error('Error fetching submissions:', error);
    throw error;
  }
};

// Complete a challenge (legacy function - now handled by updateSubmissionStatus)
export const completeChallenge = async (uid, challengeId, pointsEarned) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const userData = userSnap.data();
      const completedChallenges = userData.completedChallenges || [];
      
      if (!completedChallenges.includes(challengeId)) {
        completedChallenges.push(challengeId);
        const newPoints = (userData.points || 0) + pointsEarned;
        
        await updateDoc(userRef, {
          completedChallenges,
          points: newPoints
        });
        
        return { completedChallenges, points: newPoints };
      }
    }
  } catch (error) {
    console.error('Error completing challenge:', error);
    throw error;
  }
};

// Get leaderboard
export const getLeaderboard = async (limitCount = 10) => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, orderBy('points', 'desc'), limit(limitCount));
    const querySnapshot = await getDocs(q);
    
    const leaderboard = [];
    querySnapshot.forEach((doc) => {
      leaderboard.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return leaderboard;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    throw error;
  }
};

// Get user rank
export const getUserRank = async (uid) => {
  try {
    const userProfile = await getUserProfile(uid);
    const userPoints = userProfile.points || 0;
    
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('points', '>', userPoints));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.size + 1; // +1 because rank starts from 1
  } catch (error) {
    console.error('Error fetching user rank:', error);
    return null;
  }
};