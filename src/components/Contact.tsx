"use client"

import { useState, useRef, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Truck, Home, Calendar, CheckCircle } from 'lucide-react'

const services = [
  "Oil Change",
  "General Service",
  "Engine Checkup",
  "Wheel Alignment",
  "Battery Service",
  "AC Service",
  "Cooling System",
  "Brake Service"
]

const deliveryAreas = [
  "Madhapur",
  "Hitech City",
  "Jubilee Hills",
  "Gachibowli",
  "Kondapur",
  "KPHB"
]

export default function Contact() {
  const [serviceType, setServiceType] = useState('center')
  const [selectedArea, setSelectedArea] = useState('')
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
          if (entry.target === formRef.current) {
            entry.target.classList.add('animate-slide-in-left')
          }
          if (entry.target === infoRef.current) {
            entry.target.classList.add('animate-slide-in-right')
          }
        }
      })
    }, observerOptions)
    
    if (formRef.current) observer.observe(formRef.current)
    if (infoRef.current) observer.observe(infoRef.current)
    
    return () => {
      if (formRef.current) observer.unobserve(formRef.current)
      if (infoRef.current) observer.unobserve(infoRef.current)
    }
  }, [])
  
  return (
    <section id="contact" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-mistercars-red mb-2 mx-auto">
            <Truck className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Home Delivery Available</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-mistercars-blue mb-4">Contact Us</h2>
          <p className="text-lg text-mistercars-gray">
            Have questions or want to book a service? Choose between our service center or convenient home delivery in Madhapur and Hitech City.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div 
            ref={formRef} 
            className="bg-white p-6 rounded-lg shadow-md opacity-0 transform translate-x-[-50px] transition-all duration-1000"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-mistercars-blue">Book a Service</h3>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  onClick={() => setServiceType('center')}
                  className={`px-3 py-1.5 text-xs font-medium border border-mistercars-blue rounded-l-lg ${serviceType === 'center' ? 'bg-mistercars-blue text-white' : 'bg-white text-mistercars-blue hover:bg-blue-50'} transition-all duration-300 flex items-center`}
                >
                  <Home className="h-3 w-3 mr-1" />
                  At Center
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('delivery')}
                  className={`px-3 py-1.5 text-xs font-medium border border-mistercars-blue rounded-r-lg ${serviceType === 'delivery' ? 'bg-mistercars-blue text-white' : 'bg-white text-mistercars-blue hover:bg-blue-50'} transition-all duration-300 flex items-center`}
                >
                  <Truck className="h-3 w-3 mr-1" />
                  Home Delivery
                </button>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="car" className="block text-sm font-medium text-gray-700 mb-1">Car Model</label>
                  <input
                    type="text"
                    id="car"
                    placeholder="E.g., Honda City, Hyundai i20"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                <select
                  id="service"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              {serviceType === 'delivery' && (
                <div className="space-y-4 p-4 border border-blue-100 rounded-md bg-blue-50 animate-fade-in">
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-mistercars-blue mr-2" />
                    <h4 className="font-medium text-mistercars-blue">Home Delivery Details</h4>
                  </div>
                  
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">Service Area</label>
                    <select
                      id="area"
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300"
                    >
                      <option value="">Select your area</option>
                      {deliveryAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Your complete address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="landmark" className="block text-sm font-medium text-gray-700 mb-1">Landmark</label>
                      <input
                        type="text"
                        id="landmark"
                        placeholder="Nearby landmark"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date & Time</label>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="date"
                        id="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300"
                      />
                      <select
                        id="time"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300"
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 3PM)</option>
                        <option value="evening">Evening (3PM - 6PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Any specific issues or requirements?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-mistercars-blue text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                {serviceType === 'delivery' ? 'Book Home Service' : 'Book Service'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div 
            ref={infoRef} 
            className="space-y-8 opacity-0 transform translate-x-[50px] transition-all duration-1000"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-mistercars-blue mb-6 flex items-center">
                <Phone className="h-6 w-6 text-mistercars-red mr-2" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 hover:bg-blue-50 p-2 rounded-md transition-all duration-300">
                  <MapPin className="h-6 w-6 text-mistercars-blue shrink-0 mt-1" />
                  <p className="text-mistercars-gray">
                    Mistercar Car Mechanic, Plot No 1-98/3/22/B, Beside Andhra Bank ATM, Madhapur, Hyderabad, Telangana 500081
                  </p>
                </div>
                <div className="flex flex-col gap-2 hover:bg-blue-50 p-2 rounded-md transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-mistercars-blue" />
                    <p className="text-mistercars-gray">+91 9963120180</p>
                  </div>
                  <div className="flex items-center gap-3 pl-9">
                    <p className="text-mistercars-gray">+91 8790437427</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 hover:bg-blue-50 p-2 rounded-md transition-all duration-300">
                  <Mail className="h-6 w-6 text-mistercars-blue" />
                  <p className="text-mistercars-gray">info@mistercars.com</p>
                </div>
                <div className="flex items-start gap-3 hover:bg-blue-50 p-2 rounded-md transition-all duration-300">
                  <Clock className="h-6 w-6 text-mistercars-blue shrink-0 mt-1" />
                  <div>
                    <p className="text-mistercars-gray">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-mistercars-gray">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Delivery Areas */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-mistercars-red">
              <h3 className="text-xl font-bold text-mistercars-blue mb-4 flex items-center">
                <Truck className="h-5 w-5 mr-2 text-mistercars-red" />
                Home Delivery Service Areas
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {deliveryAreas.map((area) => (
                  <div 
                    key={area} 
                    className="flex items-center p-2 hover:bg-blue-50 rounded-md transition-all duration-300 transform hover:translate-x-1"
                  >
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-mistercars-gray flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-mistercars-red" />
                  Home delivery available from 9:00 AM to 6:00 PM
                </p>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white p-2 rounded-lg shadow-md h-[300px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.64773341415407!2d78.39386069871091!3d17.445992299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91caf095a90b%3A0xb49c3336c7904193!2sMistercar%20car%20mechanic%20in%20madhapur!5e0!3m2!1sen!2sin!4v1709726831133!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}