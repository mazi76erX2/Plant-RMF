'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Learn about our mission, history, and the people making it happen.</p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Do</h2>
              <p className="text-gray-700 mb-4">
                Food & Trees for Africa (FTFA) is South Africa&apos;s pioneering social and environmental enterprise. 
                Since 1990, we have been addressing food security, environmental sustainability, and greening 
                through extensive and diverse programmes across South Africa.
              </p>
              <p className="text-gray-700 mb-4">
                Our work supports community-led food security initiatives, climate resilience, regenerative 
                landscapes, and forests. We know that trees provide hundreds of benefits for everyone and our 
                focus on food security ensures that communities have access to healthy, nutritious food in the 
                face of increasing challenges of climate change and poverty.
              </p>
              <p className="text-gray-700 mb-4">
                Through our programmes we plant trees, develop green spaces, establish organic food gardens, 
                build vibrant communities, green schools, develop environmental education, and create climate 
                awareness through the African Climate Reality Project.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md h-80 relative rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/hero-bg.jpg" 
                  alt="Trees and community gardens" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Vision</h2>
            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <p className="text-xl text-center italic text-gray-700">
                &quot;A healthier, more food secure, environmentally sound and greener South Africa where people live in 
                harmony with each other and with the natural environment.&quot;
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>To contribute to healthier communities through sustainable greening programmes and regenerative nature-based adaptation solutions.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>To address food insecurity through sustainable food systems development and training.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>To mitigate climate change and fulfill SDGs through tree planting, carbon capture, and climate activism.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>To make a real and measurable difference in the socioeconomic and environmental status of communities.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our History</h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <TimelineItem 
                year="1990" 
                title="Founding of FTFA"
                description="Food & Trees for Africa was established as South Africa's first social enterprise in the field of food security and environmental conservation."
                isLeft={true}
              />
              
              <TimelineItem 
                year="1994" 
                title="EduPlant Programme Launch"
                description="The EduPlant programme was established, providing schools with resources and training for sustainable food gardening."
                isLeft={false}
              />
              
              <TimelineItem 
                year="2000" 
                title="1 Million Trees"
                description="Reached the milestone of planting over 1 million trees across South Africa."
                isLeft={true}
              />
              
              <TimelineItem 
                year="2010" 
                title="Climate Reality Project"
                description="Established the African Climate Reality Project to address climate change issues specific to the African continent."
                isLeft={false}
              />
              
              <TimelineItem 
                year="2022" 
                title="Food Forests Initiative"
                description="Launched the Food Forests Initiative to create sustainable, self-maintaining ecosystems that provide food for communities."
                isLeft={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Timeline Item Component
function TimelineItem({ year, title, description, isLeft }: { year: string, title: string, description: string, isLeft: boolean }) {
  return (
    <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-primary mb-1">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
      
      <div className="w-2/12 flex justify-center">
        <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold relative z-10">
          {year}
        </div>
      </div>
      
      <div className="w-5/12"></div>
    </div>
  );
} 