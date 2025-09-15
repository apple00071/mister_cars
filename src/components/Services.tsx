"use client"

import { useState, useRef, useEffect } from 'react'
import { Droplets, Settings, BarChart3, Gauge, Battery, Car, Thermometer, Wrench, Truck, Clock, MapPin, CheckCircle } from 'lucide-react'

const services = [
  {
    name: 'Oil Change',
    description: 'Regular oil changes to keep your engine running smoothly and efficiently.',
    icon: Droplets,
    deliveryAvailable: true,
    deliveryTime: '1-2 hours'
  },
  {
    name: 'General Service',
    description: 'Comprehensive checkup and maintenance to ensure your vehicle is in top condition.',
    icon: Settings,
    deliveryAvailable: true,
    deliveryTime: '3-4 hours'
  },
  {
    name: 'Engine Checkup',
    description: 'Thorough engine diagnostics and performance optimization.',
    icon: BarChart3,
    deliveryAvailable: true,
    deliveryTime: '1-2 hours'
  },
  {
    name: 'Wheel Alignment',
    description: 'Precise wheel alignment for better handling and reduced tire wear.',
    icon: Gauge,
    deliveryAvailable: false,
    deliveryTime: ''
  },
  {
    name: 'Battery Service',
    description: 'Battery testing, charging, and replacement services.',
    icon: Battery,
    deliveryAvailable: true,
    deliveryTime: '30-60 mins'
  },
  {
    name: 'AC Service',
    description: 'Complete air conditioning checks, repairs and gas refills.',
    icon: Car,
    deliveryAvailable: true,
    deliveryTime: '2-3 hours'
  },
  {
    name: 'Cooling System',
    description: 'Radiator flush and cooling system maintenance for optimal engine temperature.',
    icon: Thermometer,
    deliveryAvailable: true,
    deliveryTime: '2-3 hours'
  },
  {
    name: 'Brake Service',
    description: 'Inspection and replacement of brake pads, rotors and other brake components.',
    icon: Wrench,
    deliveryAvailable: true,
    deliveryTime: '2-3 hours'
  }
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    const servicesElement = servicesRef.current;
    if (servicesElement) {
      observer.observe(servicesElement);
    }
    
    return () => {
      if (servicesElement) {
        observer.unobserve(servicesElement);
      }
    };
  }, []);

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.deliveryAvailable);

  return (
    <section id="services" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div ref={servicesRef} className="opacity-0 transition-all duration-1000 ease-out transform translate-y-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-mistercars-red mb-2 mx-auto">
              <Truck className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Home Delivery Available</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-mistercars-blue mb-4">Our Services</h2>
            <p className="text-lg text-mistercars-gray max-w-3xl mx-auto">
              We provide a comprehensive range of car services to keep your vehicle in optimal condition. 
              Most services are available with our convenient home delivery option in Madhapur and Hitech City.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-6 py-2 text-sm font-medium border border-mistercars-blue rounded-l-lg ${activeTab === 'all' ? 'bg-mistercars-blue text-white' : 'bg-white text-mistercars-blue hover:bg-blue-50'} transition-all duration-300`}
                onClick={() => setActiveTab('all')}
              >
                All Services
              </button>
              <button
                type="button"
                className={`px-6 py-2 text-sm font-medium border border-mistercars-blue rounded-r-lg ${activeTab === 'delivery' ? 'bg-mistercars-blue text-white' : 'bg-white text-mistercars-blue hover:bg-blue-50'} transition-all duration-300`}
                onClick={() => setActiveTab('delivery')}
              >
                <Truck className="h-4 w-4 inline mr-1" />
                Home Delivery
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <div 
                key={service.name} 
                className="rounded-lg border text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:scale-105 transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center p-6 relative">
                  {service.deliveryAvailable && (
                    <div className="absolute top-2 right-2 bg-red-100 text-mistercars-red rounded-full p-1" title="Home delivery available">
                      <Truck className="h-4 w-4" />
                    </div>
                  )}
                  <div className="bg-blue-50 p-4 rounded-full mb-4 transform transition-transform duration-300 hover:rotate-12">
                    <service.icon className="h-8 w-8 text-mistercars-blue" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                  <p className="text-mistercars-gray mb-4">{service.description}</p>
                  
                  {service.deliveryAvailable && (
                    <div className="mt-auto pt-2 border-t w-full">
                      <div className="flex items-center justify-center text-sm text-mistercars-red">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Delivery time: {service.deliveryTime}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md border border-blue-100">
            <h3 className="text-xl font-bold text-mistercars-blue mb-4 flex items-center">
              <Truck className="h-5 w-5 mr-2 text-mistercars-red" />
              Home Delivery Service Areas
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-mistercars-red" />
                  Madhapur
                </h4>
                <ul className="space-y-1">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    Ayyappa Society
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    Jubilee Hills Road No. 36
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    Durgam Cheruvu
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-mistercars-red" />
                  Hitech City
                </h4>
                <ul className="space-y-1">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    HITEC City Main Road
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    Kondapur
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    Gachibowli
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}