'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { signInWithGoogle, signInWithGithub, logOut } from '../lib/auth';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  
  const handleGoogleSignIn = async () => {
    console.log('Google sign in button clicked');
    try {
      if (!auth) {
        throw new Error('Firebase not initialized');
      }
      await signInWithGoogle();
      console.log('Google sign in completed');
    } catch (error) {
      console.error('Sign in failed:', error);
      alert('Sign in failed: ' + (error.message || 'Unknown error'));
    }
  };

  const handleGithubSignIn = async () => {
    console.log('GitHub sign in button clicked');
    try {
      if (!auth) {
        throw new Error('Firebase not initialized');
      }
      await signInWithGithub();
      console.log('GitHub sign in completed');
    } catch (error) {
      console.error('Sign in failed:', error);
      alert('Sign in failed: ' + (error.message || 'Unknown error'));
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Code Symbols */}
        <div className="absolute top-20 left-10 text-purple-400/20 text-6xl font-mono animate-bounce">{'<>'}</div>
        <div className="absolute top-40 right-20 text-pink-400/20 text-4xl font-mono animate-pulse">{'{}'}</div>
        <div className="absolute bottom-32 left-20 text-blue-400/20 text-5xl font-mono animate-bounce delay-1000">{'[]'}</div>
        <div className="absolute top-60 left-1/3 text-green-400/20 text-3xl font-mono animate-pulse delay-500">{'()'}</div>
        <div className="absolute bottom-20 right-1/4 text-yellow-400/20 text-4xl font-mono animate-bounce delay-700">{'</'}</div>
        
        {/* Moving Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500/30 rotate-45 animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-pink-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-blue-500/30 animate-bounce"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent animate-pulse delay-1000"></div>
      </div>

      
      <nav className="bg-gray-800/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo.jpg"
                alt="LevelUp-Buildathon Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all">
                LevelUp-Buildathon </Link>
               </div>
            
      
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md transition-colors font-medium"
              >
                About
              </Link>
              <Link 
                href="/leaderboard" 
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md transition-colors font-medium flex items-center space-x-1"
              >
                <span>🏆</span>
                <span>Leaderboard</span>
              </Link>
              <Link 
                href="/challenges" 
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md transition-colors font-medium"
              >
                Challenges
              </Link>
            </div>

           
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {user.photoURL && (
                      <img 
                        src={user.photoURL} 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full border-2 border-purple-400"
                      />
                    )}
                    <span className="text-gray-200 hidden sm:block">
                      {user.displayName || user.email?.split('@')[0]}
                    </span>
                  </div>
                  <Link
                    href="/dashboard"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleGoogleSignIn}
                    className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={handleGoogleSignIn}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4">
              ACM-W Shiv Nadar Univeristy presents Levelup Buildathon
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Build Your Way to 
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tech Mastery
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start with simple landing pages and progress to full-stack applications. Join our progressive buildathon where every level unlocks new skills and challenges.
          </p>
          
          {/* Progress Indicator */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Landing Page</span>
            </div>
            <div className="w-8 h-px bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Web App</span>
            </div>
            <div className="w-8 h-px bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Full Stack</span>
            </div>
          </div>
          
          {!user ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center bg-gray-800 border border-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Start Building Now
              </button>
              
              <button
                onClick={handleGithubSignIn}
                className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Continue with GitHub
              </button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/dashboard"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors transform hover:scale-105"
              >
                Continue Building
              </Link>
              <Link
                href="/leaderboard"
                className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                View Leaderboard
              </Link>
            </div>
          )}
        </div>

        {/* About Section */}
        <section id="about" className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Learn. Build. Launch.
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Master web development through hands-on building. Each level introduces new technologies and challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {buildingLevels.map((level, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-purple-500/20 transition-all border border-gray-700 hover:border-purple-500 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{level.icon}</span>
                </div>
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{level.title}</h3>
                  <span className="ml-2 px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                    Level {index + 1}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{level.description}</p>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {level.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-32 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-12 border border-purple-500/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Active Builders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">1.2K+</div>
              <div className="text-gray-300">Projects Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">15</div>
              <div className="text-gray-300">Challenge Levels</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Community Support</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {!user && (
          <section className="mt-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Building?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of developers building their way to success.
              </p>
              <button
                onClick={handleGoogleSignIn}
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block"
              >
                Start Your Journey
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">LevelUp-Buildathon</h3>
            <p className="text-gray-400 mb-8">Building the next generation of developers, one project at a time.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Support</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const buildingLevels = [
  {
    icon: "🌐",
    title: "Landing Pages",
    description: "Start with beautiful, responsive landing pages. Learn HTML, CSS, and basic JavaScript fundamentals.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"]
  },
  {
    icon: "⚛️",
    title: "Interactive Apps",
    description: "Build dynamic web applications with modern frameworks. Master state management and component architecture.",
    technologies: ["React", "Next.js", "TypeScript", "APIs"]
  },
  {
    icon: "🚀",
    title: "Full-Stack Projects",
    description: "Create complete applications with databases, authentication, and deployment. Build real-world solutions.",
    technologies: ["Node.js", "Database", "Auth", "Cloud Deploy"]
  }
];