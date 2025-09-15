"use client"

import { CheckCircle, Clock, Users, Award } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-mistercars-blue dark:text-blue-300 mb-6">
            About Mister Car
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-mistercars-gray dark:text-gray-300">
              At Mister Car, we've been providing high-quality car and bike maintenance and repair services to the people of Hyderabad for over 15 years. Our mission is to deliver exceptional service that ensures your vehicle's performance, safety, and longevity.
            </p>
            <p className="text-lg text-mistercars-gray dark:text-gray-300">
              Our team of certified mechanics are experts in handling all makes and models of cars and bikes, using the latest diagnostic equipment and genuine parts to ensure the best results for your vehicle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900 rounded-full">
                  <CheckCircle className="h-6 w-6 text-mistercars-blue dark:text-blue-300" />
                </div>
                <span className="font-medium dark:text-gray-200">Certified Mechanics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900 rounded-full">
                  <Award className="h-6 w-6 text-mistercars-blue dark:text-blue-300" />
                </div>
                <span className="font-medium dark:text-gray-200">Quality Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900 rounded-full">
                  <Clock className="h-6 w-6 text-mistercars-blue dark:text-blue-300" />
                </div>
                <span className="font-medium dark:text-gray-200">Timely Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900 rounded-full">
                  <Users className="h-6 w-6 text-mistercars-blue dark:text-blue-300" />
                </div>
                <span className="font-medium dark:text-gray-200">Trusted by 10,000+ Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}