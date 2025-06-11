'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { logOut } from '../../lib/auth';
import { 
  createUserProfile, 
  getUserProfile, 
  submitChallenge, 
  getUserRank 
} from '../../lib/userService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [userRank, setUserRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submissionModal, setSubmissionModal] = useState(null);
  const [submissionLink, setSubmissionLink] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        try {
          const profile = await createUserProfile(user);
          setUserProfile(profile);
          
          const rank = await getUserRank(user.uid);
          setUserRank(rank);
        } catch (error) {
          console.error('Error loading user data:', error);
        }
      } else {
        router.push('/');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    try {
      await logOut();
      router.push('/');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  const handleSubmitChallenge = async () => {
    if (!user || !userProfile || !submissionModal || !submissionLink.trim()) return;
    
    setSubmitting(true);
    try {
      const result = await submitChallenge(user.uid, submissionModal.id, submissionLink);
      if (result) {
        setUserProfile(prev => ({
          ...prev,
          submissions: result.submissions
        }));
        
       
        setSubmissionModal(null);
        setSubmissionLink('');
        
        alert('Challenge submitted successfully! It will be reviewed shortly.');
      }
    } catch (error) {
      console.error('Error submitting challenge:', error);
      alert('Error submitting challenge. Please try again.');
    }
    setSubmitting(false);
  };

  const openSubmissionModal = (challenge) => {
    setSubmissionModal(challenge);
    setSubmissionLink('');
  };

  const closeSubmissionModal = () => {
    setSubmissionModal(null);
    setSubmissionLink('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user || !userProfile) {
    return null;
  }

  const challenges = [
    {
      id: 'portfolio-landing',
      title: "Personal Portfolio Landing Page",
      description: "Create a responsive landing page showcasing your skills and projects",
      level: 1,
      points: 100,
      technologies: ["HTML", "CSS", "JavaScript"],
      difficulty: "Beginner",
      estimatedTime: "2-3 hours",
      requirements: [
        "Responsive design that works on mobile and desktop",
        "Clean, professional styling",
        "About section with your skills",
        "Contact information or form",
        "At least 3 sections (header, about, contact)"
      ]
    },
    {
      id: 'todo-app',
      title: "Interactive To-Do App",
      description: "Build a dynamic to-do application with local storage functionality",
      level: 1,
      points: 150,
      technologies: ["React", "JavaScript", "CSS"],
      difficulty: "Beginner",
      estimatedTime: "3-4 hours",
      status:'locked',
      requirements: [
        "Add, edit, and delete tasks",
        "Mark tasks as complete/incomplete",
        "Local storage persistence",
        "Filter tasks (all, active, completed)",
        "Clean user interface"
      ]
    }
    ];
  //   {
  //     id: 'weather-dashboard',
  //     title: "Weather Dashboard",
  //     description: "Create a weather app using external APIs and geolocation",
  //     level: 2,
  //     points: 200,
  //     technologies: ["React", "APIs", "CSS"],
  //     difficulty: "Intermediate",
  //     estimatedTime: "4-5 hours",
  //     requirements: [
  //       "Current weather display",
  //       "5-day forecast",
  //       "Search by city name",
  //       "Geolocation support",
  //       "Weather icons and animations"
  //     ]
  //   },
  //   {
  //     id: 'ecommerce-page',
  //     title: "E-commerce Product Page",
  //     description: "Build a complete product page with cart functionality",
  //     level: 2,
  //     points: 250,
  //     technologies: ["React", "State Management", "CSS"],
  //     difficulty: "Intermediate",
  //     estimatedTime: "5-6 hours",
  //     requirements: [
  //       "Product gallery with image zoom",
  //       "Add to cart functionality",
  //       "Shopping cart sidebar",
  //       "Product variants (size, color)",
  //       "Responsive design"
  //     ]
  //   },
  //   {
  //     id: 'blog-platform',
  //     title: "Full-Stack Blog Platform",
  //     description: "Create a complete blog with authentication and database",
  //     level: 3,
  //     points: 400,
  //     technologies: ["Next.js", "Database", "Auth"],
  //     difficulty: "Advanced",
  //     estimatedTime: "8-10 hours",
  //     requirements: [
  //       "User authentication",
  //       "Create, edit, delete posts",
  //       "Comment system",
  //       "Search functionality",
  //       "Admin panel"
  //     ]
  //   }
  // ];

  const getChallengeStatus = (challengeId) => {
  
  const challenge = challenges.find(c => c.id === challengeId);
  if (challenge?.status) {
    return challenge.status; 
  }
  
  const submission = userProfile.submissions?.find(sub => sub.challengeId === challengeId);
  
  if (submission) {
    return submission.status; 
  }
  
  if (userProfile.completedChallenges?.includes(challengeId)) {
    return 'completed';
  }
  
  if (!challenge) return 'locked';
  
  if (challenge.level <= userProfile.level) {
    return 'available';
  }
  
  return 'locked';
};

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'accepted': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'submitted': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'in-review': return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
      case 'rejected': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'available': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'locked': return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
      default: return 'text-gray-400';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return '✓ Completed';
      case 'accepted': return '✓ Accepted';
      case 'submitted': return '📝 Submitted';
      case 'in-review': return '👀 In Review';
      case 'rejected': return '❌ Rejected';
      case 'available': return 'Available';
      case 'locked': return '🔒 Locked';
      default: return status;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const completedCount = userProfile.completedChallenges?.length || 0;
  const totalChallenges = challenges.length;
  const progressPercentage = (completedCount / totalChallenges) * 100;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                LevelUp-Buildathon
              </Link>
              <span className="text-gray-400">/ Dashboard</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/leaderboard" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md transition-colors">
                🏆 Leaderboard
              </Link>
              <div className="flex items-center space-x-2">
                {userProfile.photoURL && (
                  <img src={userProfile.photoURL} alt="Profile" className="w-8 h-8 rounded-full border-2 border-purple-400" />
                )}
                <span className="text-gray-200">{userProfile.displayName || userProfile.email?.split('@')[0]}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {userProfile.displayName?.split(' ')[0] || 'Developer'}! 👋
          </h1>
          <p className="text-gray-400">
            Member since {new Date(userProfile.createdAt?.seconds * 1000 || Date.now()).toLocaleDateString()}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Current Level</p>
                <p className="text-3xl font-bold text-purple-400">{userProfile.level}</p>
              </div>
              <div className="text-4xl">🎯</div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Challenges Completed</p>
                <p className="text-3xl font-bold text-green-400">{completedCount}<span className="text-lg text-gray-400">/{totalChallenges}</span></p>
              </div>
              <div className="text-4xl">✅</div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Points</p>
                <p className="text-3xl font-bold text-yellow-400">{userProfile.points || 0}</p>
              </div>
              <div className="text-4xl">⭐</div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-pink-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Global Rank</p>
                <p className="text-3xl font-bold text-pink-400">#{userRank || '---'}</p>
              </div>
              <div className="text-4xl">🏆</div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Overall Progress</h3>
            <span className="text-sm text-gray-400">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-700 flex items-center justify-end pr-2"
              style={{ width: `${progressPercentage}%` }}
            >
              {progressPercentage > 10 && (
                <span className="text-white text-xs font-medium">
                  {Math.round(progressPercentage)}%
                </span>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            You&apos;ve earned {userProfile.points || 0} points out of {challenges.reduce((sum, c) => sum + c.points, 0)} total points available!
          </p>
        </div>

        {/* Challenges Section */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-6">Available Challenges</h3>
          <div className="space-y-4">
            {challenges.map((challenge) => {
              const status = getChallengeStatus(challenge.id);
              const submission = userProfile.submissions?.find(sub => sub.challengeId === challenge.id);
              const isCompleted = status === 'completed' || status === 'accepted';
              const isAvailable = status === 'available';
              const isLocked = status === 'locked';
              const isSubmitted = ['submitted', 'in-review', 'rejected'].includes(status);
              
              return (
                <div key={challenge.id} className={`rounded-xl p-6 border transition-all ${
                  isCompleted ? 'bg-green-400/5 border-green-400/20' :
                  isSubmitted ? 'bg-yellow-400/5 border-yellow-400/20' :
                  isAvailable ? 'bg-blue-400/5 border-blue-400/20 hover:border-blue-400/40' :
                  'bg-gray-700/50 border-gray-600'
                }`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h4 className="text-lg font-semibold text-white">{challenge.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs border font-medium ${getStatusColor(status)}`}>
                          {getStatusText(status)}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(challenge.difficulty)}`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{challenge.description}</p>
                      
                      {/* Submission Link Display */}
                      {submission && (
                        <div className="bg-gray-700/50 rounded-lg p-3 mb-4">
                          <p className="text-sm text-gray-400 mb-1">Your submission:</p>
                          <a 
                            href={submission.submissionLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-sm break-all"
                          >
                            {submission.submissionLink}
                          </a>
                          <p className="text-xs text-gray-500 mt-1">
                            Submitted on {new Date(submission.submittedAt?.seconds * 1000 || submission.submittedAt).toLocaleDateString()}
                          </p>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400">Level:</span>
                          <span className="text-white font-medium">{challenge.level}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400">Points:</span>
                          <span className="text-yellow-400 font-medium">{challenge.points}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400">Time:</span>
                          <span className="text-white font-medium">{challenge.estimatedTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {challenge.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Requirements */}
                      <details className="text-sm">
                        <summary className="text-gray-400 cursor-pointer hover:text-white">Requirements</summary>
                        <ul className="mt-2 space-y-1 text-gray-300 ml-4">
                          {challenge.requirements.map((req, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-purple-400 mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>
                    
                    <div className="ml-6">
                      {isCompleted && (
                        <div className="text-center">
                          <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm mb-2">
                            ✓ Completed
                          </div>
                          <div className="text-green-400 text-xs">+{challenge.points} points</div>
                        </div>
                      )}
                      {status === 'submitted' && (
                        <div className="text-center">
                          <div className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm mb-2">
                            📝 Submitted
                          </div>
                          <div className="text-yellow-400 text-xs">Under review</div>
                        </div>
                      )}
                      {status === 'in-review' && (
                        <div className="text-center">
                          <div className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm mb-2">
                            👀 In Review
                          </div>
                          <div className="text-orange-400 text-xs">Being evaluated</div>
                        </div>
                      )}
                      {status === 'rejected' && (
                        <div className="text-center">
                          <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm mb-2">
                            ❌ Rejected
                          </div>
                          <button 
                            onClick={() => openSubmissionModal(challenge)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs transition-colors"
                          >
                            Resubmit
                          </button>
                        </div>
                      )}
                      {isAvailable && (
                        <button 
                          onClick={() => openSubmissionModal(challenge)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm transition-colors font-medium"
                        >
                          Submit Challenge
                        </button>
                      )}
                      {isLocked && (
                        <div className="text-center">
                          <div className="bg-gray-600 text-gray-400 px-4 py-2 rounded-lg text-sm mb-2">
                            🔒 Locked
                          </div>
                          <div className="text-gray-500 text-xs">Complete level {challenge.level - 1}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* submit option */}
      {submissionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">
              Submit: {submissionModal.title}
            </h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Link (GitHub, Netlify, Vercel, etc.)
              </label>
              <input
                type="url"
                value={submissionLink}
                onChange={(e) => setSubmissionLink(e.target.value)}
                placeholder="https://github.com/yourusername/project or https://yourproject.netlify.app"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div className="bg-gray-700/50 rounded-lg p-3 mb-4">
              <p className="text-xs text-gray-400 mb-2">Requirements:</p>
              <ul className="text-xs text-gray-300 space-y-1">
                {submissionModal.requirements.map((req, i) => (
                  <li key={i} className="flex items-start space-x-1">
                    <span className="text-purple-400">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={closeSubmissionModal}
                className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitChallenge}
                disabled={!submissionLink.trim() || submitting}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
