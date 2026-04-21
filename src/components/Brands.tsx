"use client"

import React from 'react'

const carBrands = [
  'Tata Motors', 'Mahindra', 'Maruti Suzuki', 'Hyundai', 'Toyota', 
  'Kia', 'Honda', 'Skoda', 'Volkswagen', 'Renault', 'MG Motors'
]

const bikeBrands = [
  'Hero MotoCorp', 'Bajaj Auto', 'TVS Motor', 'Royal Enfield', 'Honda', 
  'Yamaha', 'Suzuki', 'KTM', 'Jawa', 'Yezdi'
]

export default function Brands() {
  return (
    <section className="py-12 bg-white overflow-hidden border-b border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-mistercars-blue mb-2">Supported Brands</h2>
          <p className="text-mistercars-gray">Expert servicing for all major Indian car and bike brands</p>
        </div>
      </div>

      <div className="marquee-container space-y-8 mt-4">
        {/* Car Brands Marquee */}
        <div className="relative flex">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...carBrands, ...carBrands].map((brand, index) => (
              <div 
                key={`${brand}-${index}`} 
                className="mx-8 text-xl md:text-2xl font-bold text-gray-300 hover:text-mistercars-blue transition-colors duration-300 cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Bike Brands Marquee - Reverse */}
        <div className="relative flex">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...bikeBrands, ...bikeBrands].map((brand, index) => (
              <div 
                key={`${brand}-${index}`} 
                className="mx-8 text-xl md:text-2xl font-bold text-gray-300 hover:text-mistercars-red transition-colors duration-300 cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
