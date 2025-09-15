"use client"

import { CheckCircle, ArrowRight, Car, Bike, MapPin, Clock } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [activeVehicle, setActiveVehicle] = useState('car');
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }
    
    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="container-custom">
        <div ref={heroRef} className="grid md:grid-cols-2 gap-8 items-center opacity-0 transition-all duration-1000 ease-out transform translate-y-8">
          <div className="space-y-6 md:pr-8">
            <div className="flex gap-4 mb-2">
              <button
                onClick={() => setActiveVehicle('car')}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${activeVehicle === 'car' ? 'bg-blue-100 text-mistercars-blue' : 'bg-gray-100 text-gray-600'}`}
              >
                <Car className="h-4 w-4 mr-2" />
                <span>Car Services</span>
              </button>
              <button
                onClick={() => setActiveVehicle('bike')}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${activeVehicle === 'bike' ? 'bg-blue-100 text-mistercars-blue' : 'bg-gray-100 text-gray-600'}`}
              >
                <Bike className="h-4 w-4 mr-2" />
                <span>Bike Services</span>
              </button>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-mistercars-blue mb-2 animate-pulse">
              {activeVehicle === 'car' ? <Car className="h-4 w-4 mr-2" /> : <Bike className="h-4 w-4 mr-2" />}
              <span className="text-sm font-medium">Free Pickup & Dropoff!</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-mistercars-blue">
              Professional {activeVehicle === 'car' ? 'Car' : 'Bike'} Services with <span className="text-mistercars-red">Free Pickup & Dropoff</span>
            </h1>
            <p className="text-lg text-mistercars-gray">
              MisterCars brings exceptional {activeVehicle === 'car' ? 'car' : 'bike'} maintenance and repair services with free pickup and dropoff in Madhapur and Hitech City. We'll pick up your {activeVehicle === 'car' ? 'car' : 'bike'}, service it at our workshop, and deliver it back to you!
            </p>
            <div className="space-y-3">
              <div className="flex items-center transition-transform hover:translate-x-2 duration-300">
                <CheckCircle className="h-5 w-5 mr-2 text-mistercars-blue" />
                <span>Certified mobile mechanics</span>
              </div>
              <div className="flex items-center transition-transform hover:translate-x-2 duration-300">
                <CheckCircle className="h-5 w-5 mr-2 text-mistercars-blue" />
                <span>Genuine spare parts</span>
              </div>
              <div className="flex items-center transition-transform hover:translate-x-2 duration-300">
                <CheckCircle className="h-5 w-5 mr-2 text-mistercars-blue" />
                <span>Service warranty</span>
              </div>
              <div className="flex items-center transition-transform hover:translate-x-2 duration-300">
                <MapPin className="h-5 w-5 mr-2 text-mistercars-red" />
                <span>Serving Madhapur & Hitech City</span>
              </div>
              <div className="flex items-center transition-transform hover:translate-x-2 duration-300">
                <Clock className="h-5 w-5 mr-2 text-mistercars-red" />
                <span>Same-day service available</span>
              </div>
            </div>
            <div className="pt-4 flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 px-6 py-2 bg-mistercars-red hover:bg-red-700 text-white hover:scale-105">
                Book Service Now
                <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-12 px-6 py-2 border-mistercars-blue text-mistercars-blue hover:bg-mistercars-blue hover:text-white hover:scale-105">
                View Services
              </button>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Professional car service at home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden sm:block transform transition-transform duration-500 hover:scale-110">
              <div className="text-center">
                <p className="font-bold text-2xl text-mistercars-red">15+</p>
                <p className="text-sm text-mistercars-gray">Years Experience</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-mistercars-red text-white p-3 rounded-full shadow-lg hidden sm:flex items-center justify-center w-24 h-24 animate-pulse">
                <div className="text-center">
                  <p className="font-bold text-xl">FREE</p>
                  <p className="text-xs">Pickup & Dropoff</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}