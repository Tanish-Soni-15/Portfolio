import React from "react";
import { X, Github, ExternalLink, Calendar, Users, Code } from "lucide-react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Header Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                {project.category === "Full-Stack" && (
                  <Code className="w-4 h-4" />
                )}
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title and Links */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-600">{project.description}</p>
              </div>
              <div className="flex gap-3 ml-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Technical Stack
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      Development Time: {project.duration || "2-3 months"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">
                      Team Size: {project.teamSize || "Solo Project"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Code className="w-4 h-4" />
                    <span className="text-sm">
                      Lines of Code: {project.linesOfCode || "2000+"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                Project Overview
              </h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.detailedDescription || project.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This project demonstrates proficiency in modern web
                  development practices, including responsive design, API
                  integration, state management, and user experience
                  optimization. The implementation follows industry best
                  practices and includes comprehensive testing and
                  documentation.
                </p>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                Challenges & Solutions
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Challenges
                    </h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Complex state management</li>
                      <li>• Performance optimization</li>
                      <li>• Cross-browser compatibility</li>
                      <li>• Responsive design implementation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Solutions
                    </h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Implemented Redux for state management</li>
                      <li>• Used React.memo and useMemo for optimization</li>
                      <li>• Extensive testing across browsers</li>
                      <li>• Mobile-first design approach</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </a>
              ) : (
                <div
                  className="flex-1 bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-medium text-center flex items-center justify-center gap-2 cursor-not-allowed"
                  title="Live demo not available"
                >
                  <ExternalLink className="w-5 h-5" />
                  Demo Unavailable
                </div>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium text-center hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
