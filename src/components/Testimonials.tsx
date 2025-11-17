import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Dhota Construction built our dream home with exceptional quality. Their attention to detail and commitment to timelines was impressive. Highly recommend for residential projects!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Our commercial complex was completed ahead of schedule with outstanding quality. The team was professional, responsive, and delivered exactly what we envisioned.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Property Developer',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
      content: 'Working with Dhota Construction on our residential complex was seamless. Their project management and quality control set them apart from other contractors.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-green-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by hundreds of satisfied clients across the country
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all"
            >
              <Quote className="w-10 h-10 text-green-500 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
