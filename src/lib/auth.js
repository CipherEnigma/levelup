import { 
  signInWithPopup, 
  signOut 
} from 'firebase/auth';
import { auth, googleProvider, githubProvider } from './firebase';

export const signInWithGoogle = async () => {
  try {
    if (!auth) {
      throw new Error('Firebase auth not initialized');
    }
    const result = await signInWithPopup(auth, googleProvider);
    console.log('Google sign in successful:', result.user);
    return result.user;
  } catch (error) {
    console.error('Google sign in error:', error);
    if (error.code === 'auth/popup-blocked') {
      throw new Error('Popup was blocked. Please allow popups for this site.');
    }
    throw error;
  }
};

export const signInWithGithub = async () => {
  try {
    if (!auth) {
      throw new Error('Firebase auth not initialized');
    }
    const result = await signInWithPopup(auth, githubProvider);
    console.log('GitHub sign in successful:', result.user);
    return result.user;
  } catch (error) {
    console.error('GitHub sign in error:', error);
    if (error.code === 'auth/popup-blocked') {
      throw new Error('Popup was blocked. Please allow popups for this site.');
    }
    throw error;
  }
};

export const logOut = async () => {
  try {
    if (!auth) {
      throw new Error('Firebase auth not initialized');
    }
    await signOut(auth);
    console.log('Sign out successful');
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
};