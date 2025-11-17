import { Building2, Hammer, PenTool, Wrench, Shield, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and villa complexes built with precision and care for your dream living space.',
      features: ['Custom Design', 'Quality Materials', 'Timely Delivery'],
    },
    {
      icon: Hammer,
      title: 'Commercial Projects',
      description: 'Office buildings, retail spaces, and commercial complexes designed for optimal functionality and aesthetics.',
      features: ['Smart Buildings', 'Modern Infrastructure', 'Energy Efficient'],
    },
    {
      icon: PenTool,
      title: 'Architectural Design',
      description: 'Innovative architectural solutions combining creativity with structural integrity and sustainability.',
      features: ['3D Visualization', 'Structural Planning', 'Vastu Compliant'],
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with our expert renovation services for residential and commercial properties.',
      features: ['Interior Updates', 'Structural Changes', 'Modern Upgrades'],
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks at every stage ensuring the highest standards of construction excellence.',
      features: ['ISO Certified', 'Regular Inspections', 'Premium Materials'],
    },
    {
      icon: Clock,
      title: 'Project Management',
      description: 'End-to-end project management ensuring on-time delivery, budget adherence, and seamless execution.',
      features: ['Timeline Tracking', 'Budget Management', '24/7 Support'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
