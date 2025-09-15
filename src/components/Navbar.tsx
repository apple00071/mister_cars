"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Truck, Phone } from 'lucide-react'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      {/* Delivery Banner */}
      <div className="bg-mistercars-red text-white text-center py-1 text-sm font-medium">
        <div className="container-custom flex items-center justify-center">
          <Truck className="h-3 w-3 mr-1" />
          <span>Now offering home delivery services in Madhapur & Hitech City!</span>
        </div>
      </div>
      
      <nav className="container-custom py-2">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Mister Car</span>
              <Image
                className={`w-auto transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'}`}
                src="/Logo.png"
                alt="Mister Car Logo"
                width={200}
                height={200}
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8 mr-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-mistercars-gray hover:text-mistercars-blue font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mistercars-blue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <div className="hidden lg:block text-right mr-2">
              <p className="text-xs text-mistercars-gray">Home Delivery Available</p>
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
            
            {/* Delivery Info Banner in Mobile Menu */}
            <div className="mt-4 mb-2 bg-white bg-opacity-10 rounded-lg p-3">
              <div className="flex items-center mb-1">
                <Truck className="h-4 w-4 text-white mr-2" />
                <p className="text-white font-medium">Home Delivery Available</p>
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800 transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
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
                    Book Home Delivery
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