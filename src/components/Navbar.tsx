"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Car, Phone, Bike } from 'lucide-react'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Car Services', href: '#services', type: 'car' },
  { name: 'Bike Services', href: '#services', type: 'bike' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeVehicleType, setActiveVehicleType] = useState('car')
  
  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      lastScrollY = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = lastScrollY > 100
          const isScrollingUp = lastScrollY < 100 || (lastScrollY < window.scrollY)
          
          if (isScrolled !== scrolled || isScrollingUp !== !scrolled) {
            setScrolled(isScrolled && !isScrollingUp)
          }
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      {/* Service Banner */}
      <div className="bg-mistercars-red text-white text-center py-1 text-sm font-medium">
        <div className="container-custom flex items-center justify-center">
          <Car className="h-3 w-3 mr-1" />
          <Bike className="h-3 w-3 mx-1" />
          <span>Free pickup and dropoff services for cars & bikes in Madhapur & Hitech City!</span>
        </div>
      </div>
      
      <nav className="container-custom py-2">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <div className="relative h-16 w-48">
              <Link href="/" className="block h-full w-full">
                <span className="sr-only">Mister Car</span>
                <Image
                  className={`h-full w-auto object-contain transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}
                  src="/Logo.png"
                  alt="Mister Car Logo"
                  width={200}
                  height={80}
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 mr-4">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeVehicleType === 'car' ? 'text-mistercars-blue bg-blue-50' : 'text-gray-700 hover:text-mistercars-blue hover:bg-blue-50'}`}
                  onClick={() => item.type && setActiveVehicleType(item.type)}
                >
                  {item.name}
                </Link>
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-mistercars-blue transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <div className="hidden lg:block text-right mr-2">
              <p className="text-xs text-gray-700">Free Pickup & Dropoff</p>
              <p className="text-sm font-medium text-mistercars-blue">Madhapur & Hitech City</p>
            </div>
            <a 
              href="tel:+918790437427"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-6 py-2 bg-mistercars-blue hover:bg-blue-800 text-white hover:scale-105"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span>+91 8790437427</span>
            </a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-mistercars-blue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Mister Car</span>
                <Image
                  className="h-12 w-auto"
                  src="/Logo.png"
                  alt="Mister Car Logo"
                  width={150}
                  height={150}
                  priority
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            {/* Service Info Banner in Mobile Menu */}
            <div className="mt-4 mb-2 bg-white bg-opacity-10 rounded-lg p-3">
              <div className="flex items-center mb-1">
                <Car className="h-4 w-4 text-white mr-2" />
                <p className="text-white font-medium">Free Pickup & Dropoff</p>
              </div>
              <p className="text-sm text-gray-200">Madhapur & Hitech City</p>
            </div>
            
            <div className="mt-4 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${item.type && item.type === activeVehicleType ? 'text-mistercars-red' : 'text-white'} hover:bg-blue-800 transition-colors duration-200`}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (item.type) setActiveVehicleType(item.type);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="tel:+918790437427"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+91 8790437427</span>
                  </a>
                  <Link
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-mistercars-red hover:bg-red-700 text-center mt-2 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}