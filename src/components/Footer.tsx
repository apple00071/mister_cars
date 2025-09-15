"use client"

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Car, Bike, Calendar, CheckCircle } from 'lucide-react'

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
  
  const serviceAreas = [
    "Madhapur", 
    "Hitech City", 
    "Gachibowli", 
    "Kondapur", 
    "Jubilee Hills", 
    "Banjara Hills"
  ]
  
  const [mapExpanded, setMapExpanded] = useState(false)
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Service Banner */}
      <div className="bg-mistercars-red py-4">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-3 md:mb-0">
            <div className="flex items-center">
              <Car className="h-6 w-6 mr-2" />
              <Bike className="h-6 w-6 mr-2" />
            </div>
            <h3 className="text-lg font-bold">Free Pickup & Dropoff Service</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area, index) => (
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
              Your trusted car and bike service partner in Hyderabad. We provide comprehensive vehicle care solutions with expert mechanics, genuine parts, and convenient pickup & dropoff services.
            </p>
            <div className="mt-4 flex items-center">
              <span className="inline-flex items-center bg-mistercars-blue bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium text-white">
                <Car className="h-3 w-3 mr-1" />
                <Bike className="h-3 w-3 mx-1" />
                <span>Free Pickup & Dropoff Service</span>
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
                  Car Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-white mr-0 group-hover:mr-2"></span>
                  Bike Services
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
              {serviceAreas.map((area, index) => (
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
                <span>Road No. 57, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-mistercars-red shrink-0" />
                <a href="tel:+918790437427" className="hover:text-white transition-colors">+91 8790437427</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-mistercars-red shrink-0" />
                <a href="mailto:mistercar73@gmail.com" className="hover:text-white transition-colors">mistercar73@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-mistercars-red shrink-0" />
                <span>Mon-Sat: 9AM - 7PM</span>
              </li>
            </ul>
            
            {/* Interactive Map Button */}
            <button 
              onClick={() => setMapExpanded(!mapExpanded)}
              className="mt-4 w-full py-2 px-4 bg-mistercars-blue bg-opacity-20 hover:bg-opacity-30 text-white rounded-md transition-all duration-300 flex items-center justify-center"
            >
              <MapPin className="h-4 w-4 mr-2" />
              {mapExpanded ? 'Hide Map' : 'Show Map'}
            </button>
            
            {/* Interactive Map */}
            {mapExpanded && (
              <div className="mt-4 h-[200px] w-full rounded-md overflow-hidden transition-all duration-500 ease-in-out">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2728499862513!2d78.38387937465573!3d17.44599228804693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91caf095a90b%3A0xb49c3336c7904193!2sMistercar%20car%20mechanic%20in%20madhapur!5e0!3m2!1sen!2sin!4v1709726831133!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mister Car. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}