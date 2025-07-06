
import { SkillsData } from '../data/skills';
const skills = SkillsData;

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md transform transition duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 hover:rotate-180">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm transition-transform duration-200 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
