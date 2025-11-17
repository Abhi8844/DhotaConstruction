import { Target, Eye, Award, CheckCircle } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '25+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '10,000+' },
    { label: 'Team Members', value: '200+' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional construction services that exceed client expectations while maintaining the highest standards of quality, safety, and sustainability.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the most trusted and innovative construction company, setting industry benchmarks and creating lasting value for communities.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, excellence, innovation, and customer satisfaction drive everything we do. We build relationships, not just structures.',
    },
  ];

  const achievements = [
    'ISO 9001:2015 Certified',
    'Green Building Certified',
    '50+ Industry Awards',
    'Zero Accident Safety Record',
    'On-Time Delivery Guarantee',
    '5-Year Structural Warranty',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-green-600">Dhota Construction</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 1999, we've been transforming landscapes and building dreams with unwavering commitment to quality and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-center text-white shadow-lg"
            >
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-green-100">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction site"
              className="rounded-xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Building Excellence Since 1999</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dhota Construction has established itself as a leading name in the construction industry,
              delivering projects that combine innovative design with structural integrity. Our team of
              skilled professionals brings decades of combined experience to every project.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From residential complexes to commercial towers, we've successfully completed diverse projects
              across multiple cities. Our commitment to quality, safety, and timely delivery has earned us
              the trust of thousands of satisfied clients.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 text-center"
              >
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
