"use client"

import React from 'react'
import Image from 'next/image'

const carBrands = [
  { name: 'Tata Motors', domain: 'tata.com' },
  { name: 'Mahindra', domain: 'mahindra.com' },
  { name: 'Maruti Suzuki', domain: 'marutisuzuki.com' },
  { name: 'Hyundai', domain: 'hyundai.com' },
  { name: 'Toyota', domain: 'toyota.com' },
  { name: 'Kia', domain: 'kia.com' },
  { name: 'Honda', domain: 'honda.co.jp' },
  { name: 'Skoda', domain: 'skoda-auto.com' },
  { name: 'Volkswagen', domain: 'volkswagen.com' },
  { name: 'Renault', domain: 'renault.com' },
  { name: 'MG Motors', domain: 'mgmotor.co.in' }
]

const bikeBrands = [
  { name: 'Hero MotoCorp', domain: 'heromotocorp.com' },
  { name: 'Bajaj Auto', domain: 'bajajauto.com' },
  { name: 'TVS Motor', domain: 'tvsmotor.com' },
  { name: 'Royal Enfield', domain: 'royalenfield.com' },
  { name: 'Honda', domain: 'hondaindia.com' },
  { name: 'Yamaha', domain: 'yamaha-motor-india.com' },
  { name: 'Suzuki', domain: 'suzukimotorcycle.co.in' },
  { name: 'KTM', domain: 'ktm.com' },
  { name: 'Jawa', domain: 'jawayezdimotorcycles.com' },
  { name: 'Yezdi', domain: 'jawayezdimotorcycles.com' }
]

export default function Brands() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 overflow-hidden border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-mistercars-blue dark:text-blue-400 mb-2">Supported Brands</h2>
          <p className="text-mistercars-gray dark:text-slate-400">Expert servicing for all major Indian car and bike brands</p>
        </div>
      </div>

      <div className="marquee-container space-y-12 mt-4">
        {/* Car Brands Marquee */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center py-4">
            {[...carBrands, ...carBrands].map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`} 
                className="mx-10 md:mx-14 flex flex-col items-center group transition-all duration-300"
              >
                <div className="relative h-10 md:h-12 w-auto flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img
                    src={`https://unavatar.io/${brand.domain}`}
                    alt={`${brand.name} logo`}
                    className="h-full w-auto max-w-[120px] md:max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`;
                    }}
                  />
                </div>
                <span className="text-[10px] md:text-xs font-medium text-gray-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bike Brands Marquee - Reverse */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap items-center py-4">
            {[...bikeBrands, ...bikeBrands].map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`} 
                className="mx-10 md:mx-14 flex flex-col items-center group transition-all duration-300"
              >
                <div className="relative h-10 md:h-12 w-auto flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img
                    src={`https://unavatar.io/${brand.domain}`}
                    alt={`${brand.name} logo`}
                    className="h-full w-auto max-w-[120px] md:max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`;
                    }}
                  />
                </div>
                <span className="text-[10px] md:text-xs font-medium text-gray-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
