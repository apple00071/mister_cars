"use client"

import { Droplets, Settings, BarChart3, Gauge, Battery, Car, Thermometer, Wrench } from 'lucide-react'

const services = [
  {
    name: 'Oil Change',
    description: 'Regular oil changes to keep your engine running smoothly and efficiently.',
    icon: Droplets
  },
  {
    name: 'General Service',
    description: 'Comprehensive checkup and maintenance to ensure your vehicle is in top condition.',
    icon: Settings
  },
  {
    name: 'Engine Checkup',
    description: 'Thorough engine diagnostics and performance optimization.',
    icon: BarChart3
  },
  {
    name: 'Wheel Alignment',
    description: 'Precise wheel alignment for better handling and reduced tire wear.',
    icon: Gauge
  },
  {
    name: 'Battery Service',
    description: 'Battery testing, charging, and replacement services.',
    icon: Battery
  },
  {
    name: 'AC Service',
    description: 'Complete air conditioning checks, repairs and gas refills.',
    icon: Car
  },
  {
    name: 'Cooling System',
    description: 'Radiator flush and cooling system maintenance for optimal engine temperature.',
    icon: Thermometer
  },
  {
    name: 'Brake Service',
    description: 'Inspection and replacement of brake pads, rotors and other brake components.',
    icon: Wrench
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mistercars-blue mb-4">Our Services</h2>
          <p className="text-lg text-mistercars-gray max-w-3xl mx-auto">
            We provide a comprehensive range of car services to keep your vehicle in optimal condition. Our team of certified mechanics ensures top-quality work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.name} className="rounded-lg border text-card-foreground shadow-sm hover:shadow-lg transition-shadow bg-white">
              <div className="flex flex-col items-center text-center p-6">
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-mistercars-blue" />
                </div>
                <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                <p className="text-mistercars-gray">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 