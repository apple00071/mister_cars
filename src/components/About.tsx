"use client"

import { CheckCircle, Clock, Users, Award } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-mistercars-blue mb-6">
            About MisterCars
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-mistercars-gray">
              At MisterCars, we've been providing high-quality car maintenance and repair services to the people of Hyderabad for over 15 years. Our mission is to deliver exceptional service that ensures your vehicle's performance, safety, and longevity.
            </p>
            <p className="text-lg text-mistercars-gray">
              Our team of certified mechanics are experts in handling all makes and models, using the latest diagnostic equipment and genuine parts to ensure the best results for your vehicle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-full">
                  <CheckCircle className="h-6 w-6 text-mistercars-blue" />
                </div>
                <span className="font-medium">Certified Mechanics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-full">
                  <Award className="h-6 w-6 text-mistercars-blue" />
                </div>
                <span className="font-medium">Quality Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-full">
                  <Clock className="h-6 w-6 text-mistercars-blue" />
                </div>
                <span className="font-medium">Timely Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-full">
                  <Users className="h-6 w-6 text-mistercars-blue" />
                </div>
                <span className="font-medium">Trusted by 10,000+ Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 