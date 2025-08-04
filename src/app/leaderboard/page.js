'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Leaderboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mock data - replace with real data later
  const leaderboardData = [
    { 
      rank: 1, 
      name: "HACKON", 
      points: 350, 
      level: "Frontend", 
      projects: 4,
      avatar: "HO",
      streak: 4,
      category: "frontend",
      institution: "SNU",
    },
    { 
      rank: 2, 
      name: "Shree Gattani", 
      points: 310, 
      level: "Frontend", 
      projects: 4,
      avatar: "SG",
      streak: 4,
      category: "frontend",
      institution: "SNU",
    },
    { 
      rank: 3, 
      name: "404 ERROR", 
      points: 310, 
      level: "Frontend", 
      projects: 5,
      avatar: "4E",
      streak: 5,
      category: "frontend",
      institution: "SNU",
    },
    { 
      rank: 4, 
      name: "Manya Goel", 
      points: 262, 
      level: "Frontend", 
      projects: 3,
      avatar: "MG",
      streak: 3,
      category: "frontend",
      institution: "SNU",
    },
    { 
      rank: 5, 
      name: "Tanvi Pokale", 
      points: 260, 
      level: "Frontend", 
      projects: 3,
      avatar: "TP",
      streak: 3,
      category: "frontend",
      institution: "SNU",
    },
    { 
      rank: 6, 
      name: "BYTEFORCE", 
      points: 180, 
      level: "Frontend", 
      projects: 3,
      avatar: "BF",
      streak: 3,
      category: "frontend",
      institution: "SNU",
    },
    { 
      rank: 7, 
      name: "Viraja", 
      points: 165, 
      level: "Frontend", 
      projects: 2,
      avatar: "V",
      streak: 2,
      category: "frontend",
      institution: "SNU",
    },
    { 
      rank: 8, 
      name: "Avanni Thakur", 
      points: 140, 
      level: "Frontend", 
      projects: 3,
      avatar: "AT",
      streak: 3,
      category: "frontend",
      institution: "SNU",
    },
    { 
      rank: 9, 
      name: "Raja Samvirtha", 
      points: 130, 
      level: "Frontend", 
      projects: 2,
      avatar: "RS",
      streak: 2,
      category: "frontend",
      institution: "SNU",
    },
    { 
      rank: 10, 
      name: "Gauri Sunil", 
      points: 100, 
      level: "Frontend", 
      projects: 1,
      avatar: "GS",
      streak: 1,
      category: "frontend",
      institution: "SNU",
    },
    {
      rank: 11, 
      name: "Diya Budlakoti", 
      points: 92, 
      level: "Frontend", 
      projects: 1,
      avatar: "DB",
      streak: 1,
      category: "frontend",
      institution: "SNU",
    },
    {
      rank: 12, 
      name: "Kashvi Tak", 
      points: 90, 
      level: "Frontend", 
      projects: 1,
      avatar: "KT",
      streak: 1,
      category: "frontend",
      institution: "SNU",
    },
    {
      rank: 13, 
      name: "Kommireddy Jayanthi ", 
      points: 90, 
      level: "Frontend", 
      projects: 1,
      avatar: "KJ",
      streak: 1,
      category: "frontend",
      institution: "SNU",
    },
    {
      rank: 14, 
      name: "Suhani Agrawat ", 
      points: 80, 
      level: "Frontend", 
      projects: 1,
      avatar: "SA",
      streak: 1,
      category: "frontend",
      institution: "SNU",
    },
    {
      rank: 15, 
      name: "Avani Agarwal", 
      points: 70, 
      level: "Frontend", 
      projects: 1,
      avatar: "AA",
      streak: 1,
      category: "frontend",
      institution: "SNU",
    },
    {
      rank: 16, 
      name: "Kavya Khandelwal", 
      points: 40, 
      level: "Frontend", 
      projects: 1,
      avatar: "KK",
      streak: 1,
      category: "frontend",
      institution: "SNU",
    },
    {
      rank: 17, 
      name: "Sowmya", 
      points: 0, 
      level: "Frontend", 
      projects: 1,
      avatar: "S",
      streak: 1,
      category: "frontend",
      institution: "SNU",
    },
  ];

  const filteredData = selectedFilter === 'all' 
    ? leaderboardData 
    : leaderboardData.filter(user => user.category === selectedFilter);

  const getRankStyle = (rank) => {
    switch(rank) {
      case 1: return 'bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900';
      case 2: return 'bg-gradient-to-r from-slate-300 to-gray-400 text-slate-800';
      case 3: return 'bg-gradient-to-r from-orange-400 to-amber-500 text-orange-900';
      default: return 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white';
    }
  };

  const getAvatarColor = (index) => {
    const colors = [
      'bg-gradient-to-r from-blue-500 to-cyan-500',
      'bg-gradient-to-r from-purple-500 to-pink-500',
      'bg-gradient-to-r from-green-500 to-emerald-500',
      'bg-gradient-to-r from-orange-500 to-red-500',
      'bg-gradient-to-r from-indigo-500 to-purple-500',
      'bg-gradient-to-r from-pink-500 to-rose-500',
      'bg-gradient-to-r from-teal-500 to-cyan-500',
      'bg-gradient-to-r from-amber-500 to-orange-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute top-60 right-16 w-48 h-48 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-16 w-40 h-40 bg-pink-500/5 rounded-full blur-xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
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
            Developer Leaderboard
          </h1>
          <p className={`text-lg text-gray-400 transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Rankings based on project completion, code quality, and community contribution
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-700 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {[
            { key: 'all', label: 'All Tracks' },
            { key: 'fullstack', label: 'Full-Stack' },
            { key: 'frontend', label: 'Frontend' },
            { key: 'backend', label: 'Backend' },
            { key: 'design', label: 'UI/UX' },
            { key: 'beginner', label: 'Beginner' }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedFilter === filter.key
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Top 3 Podium */}
        <div className={`grid lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-900 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* 2nd Place */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 order-2 lg:order-1">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-slate-300 to-gray-400 flex items-center justify-center text-slate-800 font-bold text-2xl">
                {filteredData[1]?.avatar}
              </div>
              <div className="text-sm text-gray-400 mb-1">2nd Place</div>
              <h3 className="text-xl font-semibold text-white mb-2">{filteredData[1]?.name}</h3>
              <p className="text-gray-400 text-sm mb-1">{filteredData[1]?.level}</p>
              <p className="text-gray-500 text-xs mb-4">{filteredData[1]?.institution}</p>
              <div className="bg-gradient-to-r from-slate-300 to-gray-400 text-slate-800 font-bold py-2 px-4 rounded-lg">
                {filteredData[1]?.points.toLocaleString()} points
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="bg-gray-800 rounded-2xl p-8 border-2 border-amber-400 hover:border-amber-300 transition-all duration-300 relative order-1 lg:order-2 transform lg:scale-110">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-semibold">
              Champion
            </div>
            <div className="text-center pt-2">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center text-amber-900 font-bold text-3xl">
                {filteredData[0]?.avatar}
              </div>
              <div className="text-sm text-amber-400 mb-1">1st Place</div>
              <h3 className="text-2xl font-bold text-white mb-2">{filteredData[0]?.name}</h3>
              <p className="text-gray-400 text-sm mb-1">{filteredData[0]?.level}</p>
              <p className="text-gray-500 text-xs mb-4">{filteredData[0]?.institution}</p>
              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-900 font-bold py-3 px-6 rounded-lg text-lg">
                {filteredData[0]?.points.toLocaleString()} points
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 order-3">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 flex items-center justify-center text-orange-900 font-bold text-2xl">
                {filteredData[2]?.avatar}
              </div>
              <div className="text-sm text-gray-400 mb-1">3rd Place</div>
              <h3 className="text-xl font-semibold text-white mb-2">{filteredData[2]?.name}</h3>
              <p className="text-gray-400 text-sm mb-1">{filteredData[2]?.level}</p>
              <p className="text-gray-500 text-xs mb-4">{filteredData[2]?.institution}</p>
              <div className="bg-gradient-to-r from-orange-400 to-amber-500 text-orange-900 font-bold py-2 px-4 rounded-lg">
                {filteredData[2]?.points.toLocaleString()} points
              </div>
            </div>
          </div>
        </div>

        {/* Full Rankings Table */}
        <div className={`bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 delay-1100 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="px-8 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Complete Rankings
            </h2>
          </div>
          
          <div className="divide-y divide-gray-700">
            {filteredData.map((user, index) => (
              <div 
                key={user.rank} 
                className={`px-8 py-6 hover:bg-gray-700/50 transition-all duration-300 ${
                  isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${1300 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    {/* Rank Badge */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-transform hover:scale-110 ${getRankStyle(user.rank)}`}>
                      {user.rank}
                    </div>
                    
                    {/* Avatar */}
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-lg ${getAvatarColor(index)}`}>
                      {user.avatar}
                    </div>
                    
                    {/* User Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                          @{user.github}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mb-1">{user.level}</p>
                      <p className="text-xs text-gray-500">{user.institution}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-xs text-emerald-400 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                          </svg>
                          {user.streak} day streak
                        </span>
                        <span className="text-xs text-blue-400 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          {user.projects} projects
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Points and Progress */}
                  <div className="text-right">
                    <div className="text-xl font-bold text-purple-400 mb-1">{user.points.toLocaleString()}</div>
                    <div className="text-sm text-gray-400 mb-2">points</div>
                    <div className="text-xs text-gray-500">
                      {user.rank <= 3 ? 'Podium Finish' : `Rank #${user.rank}`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <section className={`mt-16 transition-all duration-1000 delay-1300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-center text-white mb-8">Community Statistics</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: filteredData.length, label: 'Active Developers', subtext: 'currently participating' },
                { number: filteredData.reduce((sum, user) => sum + user.projects, 0), label: 'Total Projects', subtext: 'completed successfully' },
                { number: Math.max(...filteredData.map(user => user.streak)), label: 'Longest Streak', subtext: 'consecutive days' },
                { number: Math.round(filteredData.reduce((sum, user) => sum + user.points, 0) / filteredData.length), label: 'Average Score', subtext: 'across all participants' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-1000 hover:transform hover:-translate-y-2 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1500 + index * 150}ms` }}
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
        <div className={`mt-16 text-center transition-all duration-1000 delay-1500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Join the Competition</h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Ready to showcase your skills? Start building projects and compete with developers worldwide.
              </p>
              <Link 
                href="/"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-lg"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
