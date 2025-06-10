'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Challenges() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mock challenges data - replace with real data later
  const challengesData = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "Create a responsive personal portfolio showcasing your projects and skills",
      difficulty: "beginner",
      category: "frontend",
      points: 100,
      estimatedTime: "2-3 hours",
      technologies: ["HTML", "CSS", "JavaScript"],
      participants: 1234,
      completions: 987,
      status: "available",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Build a full-featured task management application with CRUD operations",
      difficulty: "intermediate",
      category: "fullstack",
      points: 250,
      estimatedTime: "8-12 hours",
      technologies: ["React", "Node.js", "MongoDB"],
      participants: 856,
      completions: 432,
      status: "available",
      featured: false
    },
    {
      id: 3,
      title: "E-commerce API",
      description: "Design and implement a RESTful API for an e-commerce platform",
      difficulty: "advanced",
      category: "backend",
      points: 400,
      estimatedTime: "15-20 hours",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      participants: 423,
      completions: 156,
      status: "available",
      featured: true
    },
    {
      id: 4,
      title: "Mobile App UI Design",
      description: "Create a complete UI design system for a mobile application",
      difficulty: "intermediate",
      category: "design",
      points: 200,
      estimatedTime: "6-8 hours",
      technologies: ["Figma", "Design Systems", "Prototyping"],
      participants: 634,
      completions: 389,
      status: "available",
      featured: false
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "Build a real-time chat application with multiple rooms and user authentication",
      difficulty: "advanced",
      category: "fullstack",
      points: 500,
      estimatedTime: "20-25 hours",
      technologies: ["React", "Socket.io", "Node.js", "Redis"],
      participants: 567,
      completions: 123,
      status: "available",
      featured: true
    },
    {
      id: 6,
      title: "Landing Page Conversion",
      description: "Create a high-converting landing page with modern design principles",
      difficulty: "beginner",
      category: "frontend",
      points: 150,
      estimatedTime: "4-6 hours",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      participants: 923,
      completions: 678,
      status: "available",
      featured: false
    },
    {
      id: 7,
      title: "Data Visualization Dashboard",
      description: "Build an interactive dashboard with charts and real-time data",
      difficulty: "intermediate",
      category: "frontend",
      points: 300,
      estimatedTime: "10-15 hours",
      technologies: ["React", "D3.js", "Chart.js", "APIs"],
      participants: 445,
      completions: 267,
      status: "available",
      featured: false
    },
    {
      id: 8,
      title: "Microservices Architecture",
      description: "Design and implement a microservices architecture for a blog platform",
      difficulty: "expert",
      category: "backend",
      points: 600,
      estimatedTime: "30+ hours",
      technologies: ["Docker", "Kubernetes", "Node.js", "gRPC"],
      participants: 234,
      completions: 45,
      status: "coming-soon",
      featured: true
    }
  ];

  // Filter challenges based on selected filters
  const filteredChallenges = challengesData.filter(challenge => {
    const difficultyMatch = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty;
    const categoryMatch = selectedCategory === 'all' || challenge.category === selectedCategory;
    return difficultyMatch && categoryMatch;
  });

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'expert': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'frontend': return '⚛️';
      case 'backend': return '⚙️';
      case 'fullstack': return '🚀';
      case 'design': return '🎨';
      default: return '💻';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-16 w-48 h-48 bg-blue-500/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-16 w-40 h-40 bg-pink-500/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Moving code symbols */}
        <div className="absolute top-1/4 left-1/4 text-purple-400/10 text-4xl font-mono animate-bounce">&lt;/&gt;</div>
        <div className="absolute top-3/4 right-1/4 text-blue-400/10 text-3xl font-mono animate-bounce delay-500">{'{}'}</div>
        <div className="absolute top-1/2 left-3/4 text-pink-400/10 text-3xl font-mono animate-bounce delay-1000">[]</div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/" 
              className={`text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              LevelUp Buildathon
            </Link>
            <Link 
              href="/" 
              className={`text-gray-300 hover:text-white transition-all duration-700 delay-200 flex items-center space-x-2 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Coding Challenges
            </span>
          </h1>
          <p className={`text-lg text-gray-400 transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Build real projects, earn points, and level up your skills
          </p>
        </div>

        {/* Filter Section */}
        <div className={`mb-12 transition-all duration-1000 delay-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Difficulty Filter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Difficulty Level</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'all', label: 'All Levels' },
                    { key: 'beginner', label: 'Beginner' },
                    { key: 'intermediate', label: 'Intermediate' },
                    { key: 'advanced', label: 'Advanced' },
                    { key: 'expert', label: 'Expert' }
                  ].map((difficulty) => (
                    <button
                      key={difficulty.key}
                      onClick={() => setSelectedDifficulty(difficulty.key)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedDifficulty === difficulty.key
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                      }`}
                    >
                      {difficulty.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'all', label: 'All Categories' },
                    { key: 'frontend', label: 'Frontend' },
                    { key: 'backend', label: 'Backend' },
                    { key: 'fullstack', label: 'Full-Stack' },
                    { key: 'design', label: 'UI/UX' }
                  ].map((category) => (
                    <button
                      key={category.key}
                      onClick={() => setSelectedCategory(category.key)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.key
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Challenges */}
        <section className={`mb-16 transition-all duration-1000 delay-900 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-2xl mr-3">⭐</span>
            Featured Challenges
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredChallenges.filter(challenge => challenge.featured).map((challenge, index) => (
              <div 
                key={challenge.id}
                className={`bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${1100 + index * 200}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{getCategoryIcon(challenge.category)}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{challenge.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(challenge.difficulty)}`}>
                          {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                        </span>
                        <span className="text-purple-400 font-bold text-sm">{challenge.points} pts</span>
                      </div>
                    </div>
                  </div>
                  {challenge.status === 'coming-soon' && (
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{challenge.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {challenge.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>⏱️ {challenge.estimatedTime}</span>
                  <span>👥 {challenge.participants} participants</span>
                  <span>✅ {challenge.completions} completed</span>
                </div>
                
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    challenge.status === 'coming-soon'
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25'
                  }`}
                  disabled={challenge.status === 'coming-soon'}
                >
                  {challenge.status === 'coming-soon' ? 'Coming Soon' : 'Start Challenge'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* All Challenges Grid */}
        <section className={`transition-all duration-1000 delay-1100 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-2xl mr-3">🏗️</span>
            All Challenges ({filteredChallenges.length})
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge, index) => (
              <div 
                key={challenge.id}
                className={`bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${1300 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{getCategoryIcon(challenge.category)}</span>
                  {challenge.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{challenge.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">{challenge.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                  </span>
                  <span className="text-purple-400 font-bold">{challenge.points} pts</span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {challenge.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {challenge.technologies.length > 3 && (
                    <span className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs">
                      +{challenge.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="text-xs text-gray-400 mb-4">
                  <div className="flex justify-between">
                    <span>⏱️ {challenge.estimatedTime}</span>
                    <span>👥 {challenge.participants}</span>
                  </div>
                </div>
                
                <button 
                  className={`w-full py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    challenge.status === 'coming-soon'
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105'
                  }`}
                  disabled={challenge.status === 'coming-soon'}
                >
                  {challenge.status === 'coming-soon' ? 'Coming Soon' : 'Start Challenge'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className={`mt-16 transition-all duration-1000 delay-1500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-center text-white mb-8">Challenge Statistics</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: challengesData.length, label: 'Total Challenges', subtext: 'available to solve' },
                { number: challengesData.reduce((sum, challenge) => sum + challenge.participants, 0), label: 'Total Participants', subtext: 'across all challenges' },
                { number: challengesData.reduce((sum, challenge) => sum + challenge.completions, 0), label: 'Total Completions', subtext: 'successful submissions' },
                { number: Math.max(...challengesData.map(challenge => challenge.points)), label: 'Max Points', subtext: 'highest reward available' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-1000 hover:transform hover:-translate-y-2 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1700 + index * 150}ms` }}
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number.toLocaleString()}</div>
                  <div className="text-lg font-medium text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Building?</h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Choose a challenge that matches your skill level and start building amazing projects today!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/leaderboard"
                  className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
                >
                  View Leaderboard
                </Link>
                <Link 
                  href="/about"
                  className="bg-purple-700 text-white hover:bg-purple-800 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-lg border border-purple-500"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}