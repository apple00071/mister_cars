"use client"

import { useState, useRef, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Car, Home, Calendar, CheckCircle, Bike } from 'lucide-react'

const services = [
  "Car Oil Change",
  "Car General Service",
  "Car Engine Checkup",
  "Car Wheel Alignment",
  "Car Battery Service",
  "Car AC Service",
  "Car Cooling System",
  "Car Brake Service",
  "Bike Service",
  "Bike Repair",
  "Bike Maintenance",
  "Other"
]

const serviceAreas = [
  "Madhapur",
  "Hitech City",
  "Jubilee Hills",
  "Gachibowli",
  "Kondapur",
  "KPHB"
]

const vehicleTypes = ['Car', 'Bike']

export default function Contact() {
  const [serviceType, setServiceType] = useState('center')
  const [selectedArea, setSelectedArea] = useState('')
  const [vehicleType, setVehicleType] = useState('Car')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleModel: '',
    service: '',
    address: '',
    landmark: '',
    date: '',
    time: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})
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
          <h2 className="text-3xl md:text-4xl font-bold text-mistercars-blue mb-4">Contact Us</h2>
          <p className="text-lg text-mistercars-gray">
            Have questions or want to book a service? Choose between visiting our service center or our convenient pickup and dropoff service in Madhapur and Hitech City.
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
                  <Car className="h-3 w-3 mr-1" />
                  Pickup & Dropoff
                </button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <p className="text-sm text-mistercars-gray mb-2">Select Vehicle Type:</p>
              <div className="flex gap-4">
                {vehicleTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg border ${vehicleType === type ? 'bg-mistercars-blue text-white border-mistercars-blue' : 'bg-white text-mistercars-gray border-gray-300 hover:border-mistercars-blue'}`}
                    onClick={() => setVehicleType(type)}
                  >
                    {type === 'Car' ? <Car className="h-4 w-4" /> : <Bike className="h-4 w-4" />}
                    <span>{type}</span>
                  </button>
                ))}
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              // Comprehensive validation
              const errors: {[key: string]: string} = {};
              
              // Name validation
              if (!formData.name.trim()) {
                errors.name = 'Name is required';
              } else if (formData.name.trim().length < 2) {
                errors.name = 'Name must be at least 2 characters';
              }
              
              // Email validation
              if (!formData.email.trim()) {
                errors.email = 'Email is required';
              } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                errors.email = 'Please enter a valid email address';
              }
              
              // Phone validation
              if (!formData.phone.trim()) {
                errors.phone = 'Phone number is required';
              } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
                errors.phone = 'Please enter a valid 10-digit phone number';
              }
              
              // Vehicle model validation
              if (!formData.vehicleModel.trim()) {
                errors.vehicleModel = `${vehicleType} model is required`;
              }
              
              // Service validation
              if (!formData.service) {
                errors.service = 'Please select a service';
              }
              
              // Delivery specific validations
              if (serviceType === 'delivery') {
                if (!formData.address.trim()) {
                  errors.address = 'Address is required';
                }
                
                if (!selectedArea) {
                  errors.area = 'Please select your area';
                }
                
                if (!formData.date) {
                  errors.date = 'Please select a preferred date';
                }
                
                if (!formData.time) {
                  errors.time = 'Please select a preferred time';
                }
              }
              
              setFormErrors(errors);
              
              if (Object.keys(errors).length === 0) {
                // Form submission logic would go here
                alert('Form submitted successfully!');
                
                // Reset form after successful submission
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  vehicleModel: '',
                  service: '',
                  address: '',
                  landmark: '',
                  date: '',
                  time: '',
                  message: ''
                });
                setSelectedArea('');
              }
            }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className={`w-full px-3 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300`}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({...formData, name: e.target.value});
                      if (formErrors.name) setFormErrors({...formErrors, name: ''});
                    }}
                    required
                  />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className={`w-full px-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300`}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value});
                      if (formErrors.email) setFormErrors({...formErrors, email: ''});
                    }}
                    required
                  />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your phone number"
                    className={`w-full px-3 py-2 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300`}
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({...formData, phone: e.target.value});
                      if (formErrors.phone) setFormErrors({...formErrors, phone: ''});
                    }}
                    required
                  />
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700 mb-1">{vehicleType} Model</label>
                  <input
                    type="text"
                    id="vehicleModel"
                    placeholder={vehicleType === 'Car' ? "E.g., Honda City, Hyundai i20" : "E.g., Hero Splendor, Royal Enfield"}
                    className={`w-full px-3 py-2 border ${formErrors.vehicleModel ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300`}
                    value={formData.vehicleModel}
                    onChange={(e) => {
                      setFormData({...formData, vehicleModel: e.target.value});
                      if (formErrors.vehicleModel) setFormErrors({...formErrors, vehicleModel: ''});
                    }}
                    required
                  />
                  {formErrors.vehicleModel && <p className="text-red-500 text-xs mt-1">{formErrors.vehicleModel}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                <select
                  id="service"
                  className={`w-full px-3 py-2 border ${formErrors.service ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300`}
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({...formData, service: e.target.value});
                    if (formErrors.service) setFormErrors({...formErrors, service: ''});
                  }}
                  required
                >
                  <option value="">Select a service</option>
                  {services
                    .filter(service => vehicleType === 'Car' ? service.startsWith('Car') || service === 'Other' : service.startsWith('Bike') || service === 'Other')
                    .map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                </select>
                {formErrors.service && <p className="text-red-500 text-xs mt-1">{formErrors.service}</p>}
              </div>
              
              {serviceType === 'delivery' && (
                <div className="space-y-4 p-4 border border-blue-100 rounded-md bg-blue-50 animate-fade-in">
                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-mistercars-blue mr-2" />
                    <h4 className="font-medium text-mistercars-blue">Pickup & Dropoff Details</h4>
                  </div>
                  
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">Service Area</label>
                    <select
                      id="area"
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className={`w-full px-3 py-2 border ${formErrors.area ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300`}
                      required={serviceType === 'delivery'}
                    >
                      <option value="">Select your area</option>
                      {serviceAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                    {formErrors.area && <p className="text-red-500 text-xs mt-1">{formErrors.area}</p>}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Your complete address"
                        className={`w-full px-3 py-2 border ${formErrors.address ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300`}
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        required={serviceType === 'delivery'}
                      />
                      {formErrors.address && <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>}
                    </div>
                    <div>
                      <label htmlFor="landmark" className="block text-sm font-medium text-gray-700 mb-1">Landmark</label>
                      <input
                        type="text"
                        id="landmark"
                        placeholder="Nearby landmark"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300"
                        value={formData.landmark}
                        onChange={(e) => setFormData({...formData, landmark: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date & Time</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="date"
                          id="date"
                          className={`w-full px-3 py-2 border ${formErrors.date ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300`}
                          value={formData.date}
                          onChange={(e) => {
                            setFormData({...formData, date: e.target.value});
                            if (formErrors.date) setFormErrors({...formErrors, date: ''});
                          }}
                          required={serviceType === 'delivery'}
                        />
                        {formErrors.date && <p className="text-red-500 text-xs mt-1">{formErrors.date}</p>}
                      </div>
                      <div>
                        <select
                          id="time"
                          className={`w-full px-3 py-2 border ${formErrors.time ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-mistercars-blue transition-all duration-300`}
                          value={formData.time}
                          onChange={(e) => {
                            setFormData({...formData, time: e.target.value});
                            if (formErrors.time) setFormErrors({...formErrors, time: ''});
                          }}
                          required={serviceType === 'delivery'}
                        >
                          <option value="">Select time</option>
                          <option value="morning">Morning (9AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 3PM)</option>
                          <option value="evening">Evening (3PM - 6PM)</option>
                        </select>
                        {formErrors.time && <p className="text-red-500 text-xs mt-1">{formErrors.time}</p>}
                      </div>
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
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-mistercars-blue text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                {serviceType === 'delivery' ? `Book ${vehicleType} Pickup & Dropoff Service` : `Book ${vehicleType} Service`}
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
                    Mistercar Car Mechanic, Road No. 57, Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana 500081
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
                  <a href="mailto:mistercar73@gmail.com" className="text-mistercars-gray hover:text-mistercars-blue transition-colors">mistercar73@gmail.com</a>
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
                <Car className="h-5 w-5 mr-2 text-mistercars-red" />
                Pickup & Dropoff Service Areas
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {serviceAreas.map((area) => (
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
                  Pickup & dropoff service available from 9:00 AM to 6:00 PM
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