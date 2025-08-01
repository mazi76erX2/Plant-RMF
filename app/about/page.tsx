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
            <p className="text-xl mb-6">
              Learn about us.
            </p>
            <p className="text-lg mb-4">
              <strong>Our Vision:</strong> Sustainable prosperity driven by caring for the planet and its people.
            </p>
            <p className="text-lg">
              <strong>Our Mission:</strong> We seek to actively pursue initiatives that promote a circular economy, reduce carbon footprint, and contribute to a healthier planet for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">What We Do</h2>
              <p className="text-gray-700 mb-4">
                The Robert Mazibuko Foundation (RMF) is dedicated to creating
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

    </div>
  );
}
