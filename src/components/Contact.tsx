"use client"

import { MapPin, Phone, Mail, Clock } from 'lucide-react'

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

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-mistercars-blue mb-4">Contact Us</h2>
          <p className="text-lg text-mistercars-gray">
            Have questions or want to book a service? Reach out to us or visit our service center in Hyderabad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-mistercars-blue mb-6">Book a Service</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue"
                  />
                </div>
                <div>
                  <label htmlFor="car" className="block text-sm font-medium text-gray-700 mb-1">Car Model</label>
                  <input
                    type="text"
                    id="car"
                    placeholder="E.g., Honda City, Hyundai i20"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                <select
                  id="service"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Any specific issues or requirements?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-mistercars-blue text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-mistercars-blue mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-mistercars-blue shrink-0 mt-1" />
                  <p className="text-mistercars-gray">
                    Mistercar Car Mechanic, Plot No 1-98/3/22/B, Beside Andhra Bank ATM, Madhapur, Hyderabad, Telangana 500081
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-mistercars-blue" />
                    <p className="text-mistercars-gray">+91 9963120180</p>
                  </div>
                  <div className="flex items-center gap-3 pl-9">
                    <p className="text-mistercars-gray">+91 8790437427</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-mistercars-blue" />
                  <p className="text-mistercars-gray">info@mistercars.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-mistercars-blue shrink-0 mt-1" />
                  <div>
                    <p className="text-mistercars-gray">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-mistercars-gray">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
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