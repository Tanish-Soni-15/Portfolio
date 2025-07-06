import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom hero section-padding text-center relative z-10">
        <div className="animate-fade-in">
          {/* <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">TS</span>
              </div>
            </div>
          </div> */}
          
          {/* Modern SaaS Gradient Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">Hi, I'm </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x bg-300% font-extrabold">
                  Tanish Soni
                </span>
                {/* Animated underline */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full transform scale-x-0 animate-scale-x"></div>
              </span>
            </h1>
            
            {/* Animated subtitle with gradient */}
            <div className="relative">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6">
                <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent">
                  MERN Stack Developer
                </span>
              </h2>
              
              {/* Floating particles */}
              <div className="absolute -top-4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
              <div className="absolute -top-2 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-float-delayed"></div>
              <div className="absolute -bottom-2 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-float-slow"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating 
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> innovative web solutions </span>
            and bringing ideas to life through clean, efficient code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="#projects" 
              className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="/TANISH_SONI_MERN_DEVELOPER_RESUME.pdf" 
              download="Tanish_Soni_Resume.pdf"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Tanish-Soni-15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/soni-tanish" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:tanishsoin0415@gmail.com"
              className="group p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;