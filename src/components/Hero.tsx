import { ArrowRight, Award, Users, Building } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4">
            <span className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
              25+ Years of Excellence
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Your
            <span className="text-green-500"> Dreams</span>
            <br />
            Into Reality
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Premium construction services delivering quality, innovation, and timely project completion.
            From residential complexes to commercial hubs, we build structures that stand the test of time.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 font-semibold flex items-center gap-2 shadow-lg"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/30 font-semibold"
            >
              View Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="flex items-start gap-4">
              <div className="bg-green-600 p-3 rounded-lg">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">500+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">10K+</h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-700 p-3 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-1">50+</h3>
                <p className="text-gray-400">Industry Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
