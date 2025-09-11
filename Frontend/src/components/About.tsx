import React from 'react';
import { Users, Award, Target, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with years of industry experience'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Commitment to excellence in every project we undertake'
    },
    {
      icon: Target,
      title: 'Client Focused',
      description: 'Tailored solutions that meet your specific business needs'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Efficient processes that deliver results quickly and reliably'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 px-6 md:px-16 lg:px-32 animate-fade-in-up">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About SAGOSERVE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to delivering exceptional service solutions that drive business growth 
            and foster meaningful connections between members and merchants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/1.png"
              alt="About SAGOSERVE"
              className="rounded-2xl shadow-lg w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6 hover:text-blue-600 transition-colors duration-300">
              Excellence Through Innovation
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed hover:text-gray-800 transition-colors duration-300">
              SAGOSERVE has been at the forefront of providing innovative business solutions 
              that empower organizations to achieve their goals. Our comprehensive approach 
              combines cutting-edge technology with personalized service delivery.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed hover:text-gray-800 transition-colors duration-300">
              We specialize in creating seamless experiences for both members and merchants, 
              ensuring that every interaction is meaningful and productive.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500 hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 hover:scale-110 transition-transform duration-300">99%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-800 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;