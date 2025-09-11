import { ShoppingCart, Users, Settings, BarChart3, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online marketplace platform with advanced features for merchants.',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Mobile Responsive']
    },
    {
      icon: Users,
      title: 'Member Management',
      description: 'Comprehensive member registration and management system with advanced analytics.',
      features: ['User Profiles', 'Membership Tiers', 'Activity Tracking', 'Reward Systems']
    },
    {
      icon: Settings,
      title: 'Business Automation',
      description: 'Streamline your business processes with our intelligent automation solutions.',
      features: ['Workflow Automation', 'Task Management', 'Process Optimization', 'Integration APIs']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to help you make informed business decisions.',
      features: ['Real-time Dashboard', 'Custom Reports', 'Performance Metrics', 'Predictive Analytics']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures to protect your business and customer data.',
      features: ['Data Encryption', 'Compliance Monitoring', 'Access Control', '24/7 Security']
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to ensure smooth operations at all times.',
      features: ['Live Chat Support', 'Phone Support', 'Email Support', 'Technical Assistance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white px-6 md:px-16 lg:px-32 animate-fade-in-up">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to elevate your business and create exceptional 
            experiences for your members and merchants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <img
                src={`/service-${index + 1}.jpg`}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-300"
              />
              <div className="relative p-8 bg-white rounded-xl border border-gray-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-emerald-500 font-semibold hover:text-emerald-700 transition-colors duration-200 flex items-center gap-2">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;