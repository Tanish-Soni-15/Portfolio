export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="/tanish.jpg"
              alt="Tanish Soni"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I'm Tanish Soni, a dedicated Full Stack Developer skilled in the MERN stack (MongoDB, Express.js, React.js, Node.js). I enjoy building responsive, real-world web applications that are both functional and user-friendly. Currently pursuing my BCA, I continuously explore new tools and frameworks to stay ahead in tech.
            </p>

            <p className="text-lg text-gray-600">
              I've developed projects like an AI-powered code reviewer and a complete eCommerce platform. I'm passionate about clean code, intuitive UI/UX, and solving meaningful problems through technology. My goal is to create impactful digital experiences that users love.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">2+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
