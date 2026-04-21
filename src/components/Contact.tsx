"use client"

import { useState, useRef, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Car, Home, Calendar, CheckCircle, Bike, MessageCircle, RefreshCw } from 'lucide-react'

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
  const [showSuccess, setShowSuccess] = useState(false)
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

  const generateWhatsAppUrl = () => {
    const baseUrl = "https://wa.me/919963120180"
    const text = `*New Service Booking - Mistercar*
--------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Vehicle:* ${vehicleType} - ${formData.vehicleModel}
*Service:* ${formData.service}
*Booking Type:* ${serviceType === 'center' ? 'At Center' : 'Pickup & Dropoff'}
${serviceType === 'delivery' ? `*Area:* ${selectedArea}\n*Address:* ${formData.address}` : ''}
${formData.date ? `*Date:* ${formData.date}` : ''}
${formData.time ? `*Time:* ${formData.time}` : ''}
--------------------------
Looking forward to the service!`
    
    return `${baseUrl}?text=${encodeURIComponent(text)}`
  }
  
  if (showSuccess) {
    return (
      <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden min-h-[600px] flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto card p-8 md:p-12 text-center animate-scale-in">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-mistercars-blue dark:text-blue-400 mb-4">Booking Received!</h2>
            <p className="text-lg text-mistercars-gray dark:text-slate-400 mb-8">
              Thank you, <span className="font-bold text-mistercars-blue dark:text-blue-300">{formData.name}</span>! Your request has been sent to our team.
            </p>
            
            <div className="space-y-4">
              <a 
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-4 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle className="h-5 w-5 mr-3" />
                <span>Confirm via WhatsApp (Instant)</span>
              </a>
              
              <button 
                onClick={() => {
                  setShowSuccess(false);
                  setFormData({
                    name: '', email: '', phone: '', vehicleModel: '',
                    service: '', address: '', landmark: '', date: '', time: '', message: ''
                  });
                  setSelectedArea('');
                }}
                className="flex items-center justify-center w-full py-3 text-mistercars-gray hover:text-mistercars-blue transition-colors text-sm font-medium"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Book another service
              </button>
            </div>
            
            <p className="mt-8 text-sm text-gray-500">
              A copy of your request has also been sent to your email.
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mistercars-blue dark:text-blue-400 mb-3">Contact Us</h2>
          <div className="w-20 h-1 bg-mistercars-blue mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-mistercars-gray dark:text-slate-400 max-w-2xl mx-auto">
            Have questions or want to book a service? Choose between visiting our service center or our convenient 24/7 pickup and dropoff service in Madhapur and Hitech City.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <div 
            ref={formRef} 
            className="card p-6 md:p-8 animate-slide-up bg-white dark:bg-slate-900"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-mistercars-blue dark:text-blue-400">Book a Service</h3>
                <p className="text-sm text-gray-500 dark:text-slate-500 mt-1">We'll get back to you within 24 hours</p>
              </div>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  onClick={() => setServiceType('center')}
                  className={`px-4 py-2 text-sm font-medium border ${serviceType === 'center' 
                    ? 'bg-mistercars-blue text-white border-mistercars-blue' 
                    : 'bg-white text-mistercars-blue border-gray-300 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700'
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
                    : 'bg-white text-mistercars-blue border-gray-300 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700'
                  } rounded-r-lg border-l-0 transition-all duration-300 flex items-center`}
                >
                  <Car className="h-4 w-4 mr-2" />
                  Pickup & Dropoff
                </button>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-mistercars-gray dark:text-slate-400 mb-3">Select Vehicle Type:</p>
              <div className="inline-flex rounded-md shadow-sm" role="group">
                {vehicleTypes.map((type, index) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setVehicleType(type)}
                    className={`px-4 py-2 text-sm font-medium flex items-center ${index === 0 ? 'rounded-l-lg' : 'border-l-0'} ${index === vehicleTypes.length - 1 ? 'rounded-r-lg' : ''} ${
                      vehicleType === type
                        ? 'bg-mistercars-blue text-white border-mistercars-blue'
                        : 'bg-white text-mistercars-gray border border-gray-300 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700'
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
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
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
                  try {
                    const response = await fetch('/api/contact', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        ...formData,
                        serviceType,
                        vehicleType,
                        selectedArea: serviceType === 'delivery' ? selectedArea : null,
                      }),
                    });

                    const result = await response.json();
                    
                    if (result.success) {
                      setShowSuccess(true);
                      // Auto redirect to WhatsApp
                      const whatsappUrl = generateWhatsAppUrl();
                      setTimeout(() => {
                        window.open(whatsappUrl, '_blank');
                      }, 1000);
                    } else {
                      throw new Error(result.message || 'Failed to submit form');
                    }
                  } catch (error) {
                    console.error('Error submitting form:', error);
                    alert('Failed to submit form. Please try again later.');
                  }
                }
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="input-group">
                  <label htmlFor="name" className="form-label dark:text-slate-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className={`form-input dark:bg-slate-800 dark:border-slate-700 dark:text-white ${formErrors.name ? 'border-red-500' : ''}`}
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
                  <label htmlFor="email" className="form-label dark:text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className={`form-input dark:bg-slate-800 dark:border-slate-700 dark:text-white ${formErrors.email ? 'border-red-500' : ''}`}
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
                  <label htmlFor="phone" className="form-label dark:text-slate-300">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your phone number"
                    className={`form-input dark:bg-slate-800 dark:border-slate-700 dark:text-white ${formErrors.phone ? 'border-red-500' : ''}`}
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
                  <label htmlFor="vehicleModel" className="form-label dark:text-slate-300">{vehicleType} Model</label>
                  <input
                    type="text"
                    id="vehicleModel"
                    placeholder={vehicleType === 'Car' ? "E.g., Honda City, Hyundai i20" : "E.g., Hero Splendor, Royal Enfield"}
                    className={`form-input dark:bg-slate-800 dark:border-slate-700 dark:text-white ${formErrors.vehicleModel ? 'border-red-500' : ''}`}
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
                <label htmlFor="service" className="form-label dark:text-slate-300">Service Required</label>
                <select
                  id="service"
                  className={`form-input dark:bg-slate-800 dark:border-slate-700 dark:text-white ${formErrors.service ? 'border-red-500' : ''} cursor-pointer`}
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
                <div className="card p-6 md:p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700">
                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-mistercars-blue dark:text-blue-400 mr-2" />
                    <h4 className="font-medium text-mistercars-blue dark:text-blue-400">Pickup & Dropoff Details</h4>
                  </div>
                  <div className="input-group">
                    <label htmlFor="area" className="form-label dark:text-slate-300">Service Area</label>
                    <select
                      id="area"
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className={`form-input dark:bg-slate-800 dark:border-slate-700 dark:text-white ${formErrors.area ? 'border-red-500' : ''} cursor-pointer`}
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
                      <label htmlFor="address" className="form-label dark:text-slate-300">Full Address</label>
                      <input
                        type="text"
                        id="address"
                        placeholder="Your complete address"
                        className={`form-input dark:bg-slate-800 dark:border-slate-700 dark:text-white ${formErrors.address ? 'border-red-500' : ''}`}
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        required={serviceType === 'delivery'}
                      />
                      {formErrors.address && <p className="error-message">{formErrors.address}</p>}
                    </div>
                    <div className="input-group">
                      <label htmlFor="landmark" className="form-label dark:text-slate-300">Landmark <span className="text-gray-400">(Optional)</span></label>
                      <input
                        type="text"
                        id="landmark"
                        placeholder="Nearby landmark"
                        className="form-input dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                        value={formData.landmark}
                        onChange={(e) => setFormData({...formData, landmark: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="form-label dark:text-slate-300">Preferred Date & Time</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="date"
                          id="date"
                          className={`form-input dark:bg-slate-800 dark:border-slate-700 dark:text-white ${formErrors.date ? 'border-red-500' : ''}`}
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
                          className={`form-input dark:bg-slate-800 dark:border-slate-700 dark:text-white ${formErrors.time ? 'border-red-500' : ''} cursor-pointer`}
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
                <label htmlFor="message" className="form-label dark:text-slate-300">Additional Information <span className="text-gray-400">(Optional)</span></label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Any specific issues or requirements?"
                  className="form-input dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full py-4 mt-2 flex items-center justify-center shadow-lg hover:scale-[1.02] transition-transform"
              >
                <CheckCircle className="h-5 w-5 mr-3" />
                <span>Confirm {vehicleType} Service</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}