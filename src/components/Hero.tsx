"use client"

import { CheckCircle, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-mistercars-blue">
              Professional Car Services in <span className="text-mistercars-red">Hyderabad</span>
            </h1>
            <p className="text-lg text-mistercars-gray">
              MisterCars provides exceptional car maintenance and repair services. We ensure your vehicle runs smoothly and safely on the road.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-mistercars-blue" />
                <span>Certified mechanics</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-mistercars-blue" />
                <span>Genuine spare parts</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-mistercars-blue" />
                <span>Service warranty</span>
              </div>
            </div>
            <div className="pt-4 flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-mistercars-blue hover:bg-blue-800 text-white">
                Book Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-10 px-4 py-2 border-mistercars-blue text-mistercars-blue hover:bg-mistercars-blue hover:text-white">
                View Services
              </button>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Professional car service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden sm:block">
              <div className="text-center">
                <p className="font-bold text-2xl text-mistercars-red">15+</p>
                <p className="text-sm text-mistercars-gray">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 