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
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mistercars-blue mb-3">Contact Us</h2>
          <div className="w-20 h-1 bg-mistercars-blue mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-mistercars-gray max-w-2xl mx-auto">
            Have questions or want to book a service? Choose between visiting our service center or our convenient pickup and dropoff service in Madhapur and Hitech City.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <div 
            ref={formRef} 
            className="card p-6 md:p-8 animate-slide-up"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-mistercars-blue">Book a Service</h3>
                <p className="text-sm text-gray-500 mt-1">We'll get back to you within 24 hours</p>
              </div>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  onClick={() => setServiceType('center')}
                  className={`px-4 py-2 text-sm font-medium border ${serviceType === 'center' 
                    ? 'bg-mistercars-blue text-white border-mistercars-blue' 
                    : 'bg-white text-mistercars-blue border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600'
                  } rounded-l-lg transition-all duration-300 flex items-center`}
                >
                  <Home className="h-4 w-4 mr-2" />
                  At Center
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('delivery')}
                  className={`px-4 py-2 text-sm font-medium border ${serviceType === 'delivery' 
                    ? 'bg-mistercars-blue text-white border-mistercars-blue' 
                    : 'bg-white text-mistercars-blue border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600'
                  } rounded-r-lg border-l-0 transition-all duration-300 flex items-center`}
                >
                  <Car className="h-4 w-4 mr-2" />
                  Pickup & Dropoff
                </button>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-mistercars-gray mb-3">Select Vehicle Type:</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                {vehicleTypes.map((type, index) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setVehicleType(type)}
                    className={`px-4 py-2 text-sm font-medium flex items-center ${index === 0 ? 'rounded-l-lg' : 'border-l-0'} ${index === vehicleTypes.length - 1 ? 'rounded-r-lg' : ''} ${
                      vehicleType === type
                        ? 'bg-mistercars-blue text-white border-mistercars-blue'
                        : 'bg-white text-mistercars-gray border border-gray-300 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {type === 'Car' ? (
                      <Car className="h-4 w-4 mr-2" />
                    ) : (
                      <Bike className="h-4 w-4 mr-2" />
                    )}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="input-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className={`form-input ${formErrors.name ? 'border-red-500' : ''}`}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({...formData, name: e.target.value});
                      if (formErrors.name) setFormErrors({...formErrors, name: ''});
                    }}
                    required
                  />
                  {formErrors.name && <p className="error-message">{formErrors.name}</p>}
                </div>
                <div className="input-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className={`form-input ${formErrors.email ? 'border-red-500' : ''}`}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value});
                      if (formErrors.email) setFormErrors({...formErrors, email: ''});
                    }}
                    required
                  />
                  {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="input-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your phone number"
                    className={`form-input ${formErrors.phone ? 'border-red-500' : ''}`}
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({...formData, phone: e.target.value});
                      if (formErrors.phone) setFormErrors({...formErrors, phone: ''});
                    }}
                    required
                  />
                  {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
                </div>
                <div className="input-group">
                  <label htmlFor="vehicleModel" className="form-label">{vehicleType} Model</label>
                  <input
                    type="text"
                    id="vehicleModel"
                    placeholder={vehicleType === 'Car' ? "E.g., Honda City, Hyundai i20" : "E.g., Hero Splendor, Royal Enfield"}
                    className={`form-input ${formErrors.vehicleModel ? 'border-red-500' : ''}`}
                    value={formData.vehicleModel}
                    onChange={(e) => {
                      setFormData({...formData, vehicleModel: e.target.value});
                      if (formErrors.vehicleModel) setFormErrors({...formErrors, vehicleModel: ''});
                    }}
                    required
                  />
                  {formErrors.vehicleModel && <p className="error-message">{formErrors.vehicleModel}</p>}
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="service" className="form-label">Service Required</label>
                <select
                  id="service"
                  className={`form-input ${formErrors.service ? 'border-red-500' : ''} cursor-pointer`}
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
                {formErrors.service && <p className="error-message">{formErrors.service}</p>}
              </div>
              
              {serviceType === 'delivery' && (
                <div className="space-y-6 max-w-3xl mx-auto p-4 border border-blue-100 rounded-md bg-blue-50 animate-fade-in">
                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-mistercars-blue mr-2" />
                    <h4 className="font-medium text-mistercars-blue">Pickup & Dropoff Details</h4>
                  </div>
                  <div className="input-group">
                    <label htmlFor="area" className="form-label">Service Area</label>
                    <select
                      id="area"
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className={`form-input ${formErrors.area ? 'border-red-500' : ''} cursor-pointer`}
                      required={serviceType === 'delivery'}
                    >
                      <option value="">Select your area</option>
                      {serviceAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                    {formErrors.area && <p className="error-message">{formErrors.area}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="input-group">
                      <label htmlFor="address" className="form-label">Full Address</label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Your complete address"
                        className={`form-input ${formErrors.address ? 'border-red-500' : ''}`}
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        required={serviceType === 'delivery'}
                      />
                      {formErrors.address && <p className="error-message">{formErrors.address}</p>}
                    </div>
                    <div className="input-group">
                      <label htmlFor="landmark" className="form-label">Landmark <span className="text-gray-400">(Optional)</span></label>
                      <input
                        type="text"
                        id="landmark"
                        placeholder="Nearby landmark"
                        className="form-input"
                        value={formData.landmark}
                        onChange={(e) => setFormData({...formData, landmark: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="form-label">Preferred Date & Time</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="date"
                          id="date"
                          className={`form-input ${formErrors.date ? 'border-red-500' : ''}`}
                          value={formData.date}
                          onChange={(e) => {
                            setFormData({...formData, date: e.target.value});
                            if (formErrors.date) setFormErrors({...formErrors, date: ''});
                          }}
                          required={serviceType === 'delivery'}
                        />
                        {formErrors.date && <p className="error-message">{formErrors.date}</p>}
                      </div>
                      <div>
                        <select
                          id="time"
                          className={`form-input ${formErrors.time ? 'border-red-500' : ''} cursor-pointer`}
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
                        {formErrors.time && <p className="error-message">{formErrors.time}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="input-group">
                <label htmlFor="message" className="form-label">Additional Information <span className="text-gray-400">(Optional)</span></label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Any specific issues or requirements?"
                  className="form-input"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full py-3 mt-2 flex items-center justify-center"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                {serviceType === 'delivery' ? `Book ${vehicleType} Pickup & Dropoff Service` : `Book ${vehicleType} Service`}
              </button>
            </form>
          </div>

          {/* Removed map and service areas as requested */}
          </div>
        </div>
      </div>
    </section>
  )
}