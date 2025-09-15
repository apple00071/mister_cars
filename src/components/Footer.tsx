"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Truck, Calendar, CheckCircle } from 'lucide-react'

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (footerRef.current) {
      observer.observe(footerRef.current)
    }
    
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])
  
  const deliveryAreas = [
    "Madhapur", 
    "Hitech City", 
    "Gachibowli", 
    "Kondapur", 
    "Jubilee Hills", 
    "Banjara Hills"
  ]
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Delivery Banner */}
      <div className="bg-mistercars-red py-4">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-3 md:mb-0">
            <Truck className="h-6 w-6 mr-2" />
            <h3 className="text-lg font-bold">Home Delivery Service</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {deliveryAreas.map((area, index) => (
              <span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div 
        ref={footerRef}
        className="container-custom py-12 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <Image
              src="/Logo.png"
              alt="Mister Car Logo"
              width={180}
              height={180}
              className="mb-4"
            />
            <p className="text-sm text-gray-400 max-w-md">
              Your trusted car service partner in Hyderabad. We provide comprehensive car care solutions with expert mechanics, genuine parts, and convenient home delivery services.
            </p>
            <div className="mt-4 flex items-center">
              <span className="inline-flex items-center bg-mistercars-blue bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium text-white">
                <Truck className="h-3 w-3 mr-1" />
                <span>Home Delivery Available</span>
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-mistercars-blue" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-white mr-0 group-hover:mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-white mr-0 group-hover:mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-white mr-0 group-hover:mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-white mr-0 group-hover:mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-mistercars-blue" />
              <span>Service Areas</span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {deliveryAreas.map((area, index) => (
                <div key={index} className="flex items-center text-gray-400">
                  <CheckCircle className="h-3 w-3 mr-1 text-mistercars-red" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Phone className="h-5 w-5 mr-2 text-mistercars-blue" />
              <span>Contact Info</span>
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-mistercars-red shrink-0 mt-0.5" />
                <span>123 Auto Care Street, Madhapur, Hyderabad, Telangana 500081</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-mistercars-red shrink-0" />
                <a href="tel:+918790437427" className="hover:text-white transition-colors">+91 8790437427</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-mistercars-red shrink-0" />
                <a href="mailto:info@mistercars.com" className="hover:text-white transition-colors">info@mistercars.com</a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-mistercars-red shrink-0" />
                <span>Mon-Sat: 9AM - 7PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mister Cars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}