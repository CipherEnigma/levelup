'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/*Naviagtion*/}
      <nav className="bg-gray-800/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LevelUp-Buildathon
            </Link>
            <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LevelUp-Buildathon
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering the next generation of developers through progressive learning and community support
          </p>
        </div>

        {/* About ACM-W Section */}
        <section className="mb-20">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">👩‍💻</span>
              </div>
              <h2 className="text-3xl font-bold text-white">About ACM-W SNIOE</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  ACM-W Shiv Nadar Institute Of Eminence is the chapter of ACM-W (Association for Computing Machinery - Women) , a global organization dedicated to supporting, 
                  celebrating, and advocating for the full engagement of women in all aspects of the computing field and we are so thrilled to welcome you on this journey!
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Our mission is to promote the advancement of women in computing through education, networking, 
                  mentorship, and professional development opportunities. We believe in creating an inclusive 
                  environment where everyone can thrive and contribute to the tech community.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">✓</span>
                    <span className="text-gray-300">Supporting women in technology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">✓</span>
                    <span className="text-gray-300">Promoting diversity and inclusion</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">✓</span>
                    <span className="text-gray-300">Building strong tech communities</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Our Impact</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">50K+</div>
                    <div className="text-sm text-gray-400">Members Worldwide</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">200+</div>
                    <div className="text-sm text-gray-400">Student Chapters</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100+</div>
                    <div className="text-sm text-gray-400">Professional Chapters</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">25+</div>
                    <div className="text-sm text-gray-400">Years of Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Program */}
        <section className="mb-20">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-3xl font-bold text-white">About the Buildathon Program</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                The LevelUp-Buildathon is an innovative learning program designed to take developers from beginner 
                to advanced through hands-on project building. Unlike traditional coding bootcamps, our approach 
                focuses on progressive skill development through real-world projects.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-3">🌱 Level 1: Foundations</h3>
                  <p className="text-gray-300 text-sm">
                    Start with beautiful landing pages using HTML, CSS, and basic JavaScript. 
                    Learn responsive design and modern CSS frameworks.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">⚡ Level 2: Interactive</h3>
                  <p className="text-gray-300 text-sm">
                    Build dynamic web applications with React and Next.js. Master state management, 
                    API integration, and component architecture.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-purple-400 mb-3">🚀 Level 3: Full-Stack</h3>
                  <p className="text-gray-300 text-sm">
                    Create complete applications with databases, authentication, and cloud deployment. 
                    Build production-ready solutions.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Program Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400">🎯</span>
                      <span className="text-gray-300">Progressive difficulty levels</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400">🏆</span>
                      <span className="text-gray-300">Points and leaderboard system</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400">👥</span>
                      <span className="text-gray-300">Community support and mentorship</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400">📱</span>
                      <span className="text-gray-300">Real-world project portfolio</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400">🔔</span>
                      <span className="text-gray-300">Personalized learning path</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400">🌟</span>
                      <span className="text-gray-300">Industry-relevant technologies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* About the Creator */}
        <section className="mb-20">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Created By</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-6xl">👤</span>
                  </div>
                  {}
                  {
                  <Image
                    src="/manifesto_img1.jpg"
                    alt="Creator Photo"
                    fill
                    className="rounded-full object-cover"
                  />
                  }
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Pragunie Aditya</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                 Hi! I&apos;m Pragunie Aditya(Secretary ACM-W), the techie behind this website. As a passionate developer and advocate for 
                  inclusive tech education, I built this platform to bridge the gap between learning and doing 
                  in web development.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  My journey in tech has taught me that the best way to learn programming is by building real projects. 
                  This website is built to give developers a structured path 
                  from beginner to advanced through hands-on experience.
                  Would love to connect with y&apos;all!
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white">Background & Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full">Full-Stack Development</span>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full">React/Next.js</span>
                    <span className="px-3 py-1 bg-green-600/20 text-green-300 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 text-sm rounded-full">Web Design</span>
                    <span className="px-3 py-1 bg-pink-600/20 text-pink-300 text-sm rounded-full">Tech Education</span>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <a href="https://www.linkedin.com/in/pragunie-a-6b0a56298/" className="text-purple-400 hover:text-purple-300 transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://github.com/CipherEnigma" className="text-purple-400 hover:text-purple-300 transition-colors">
                    GitHub
                  </a>
                  <a href="https://x.com/13_pragunie" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              &quot;To create an inclusive, supportive environment where developers of all backgrounds can learn, grow, and build amazing things together. Through progressive challenges and community support, we&apos;re building the next generation of tech leaders.&quot;
            </p>
            <div className="mt-8">
              <Link 
                href="/"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors inline-block"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LevelUp-Buildathon
            </h3>
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