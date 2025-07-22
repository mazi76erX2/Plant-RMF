"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">
              Learn about our mission, history, and the people making it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Summary Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Professional Summary</h2>
            <p className="text-lg text-gray-700">
              With over 5 years of experience in full-stack and backend engineering, I bring deep technical expertise in Python, JavaScript, AWS, and frameworks like Django and FastAPI. I’ve designed and implemented scalable systems, mentored developers, and led high-impact projects. I thrive in balancing hands-on coding with architectural strategy and team leadership.
            </p>
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
                The Robert Mazibuko Foundation is dedicated to creating
                sustainable prosperity driven by caring for the planet and its
                people. We actively pursue initiatives that promote a circular
                economy, reduce carbon footprint, and contribute to a healthier
                planet for future generations.
              </p>
              <p className="text-gray-700 mb-4">
                Our comprehensive approach addresses environmental restoration,
                community development, and climate action across the SADC
                region. We believe that sustainable development can only be
                achieved through integrated care for both the environment and
                the communities that depend on it.
              </p>
              <p className="text-gray-700 mb-4">
                Through our diverse programmes, we work to restore ecosystems,
                create urban green spaces, promote environmental awareness,
                support community health and wellbeing, and foster unity in the
                fight against climate change.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md h-80 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/tree-planting-hands.jpg"
                  alt="Tree planting community work"
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
                "Sustainable prosperity driven by caring for the planet and its
                people."
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-center text-gray-700 mb-8">
                We seek to actively pursue initiatives that promote a circular
                economy, reduce carbon footprint, and contribute to a healthier
                planet for future generations.
              </p>
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
function TimelineItem({
  year,
  title,
  description,
  isLeft,
}: {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}) {
  return (
    <div
      className={`flex items-center ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className={`w-5/12 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
      >
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
