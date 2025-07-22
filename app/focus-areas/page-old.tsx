"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FocusAreas() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/trees-wide.jpeg"
            alt="Our Focus Areas"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <motion.div
          className="container mx-auto px-4 relative z-10 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Five Focus Areas
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Strategic initiatives to drive environmental and social change
          </p>
        </motion.div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div className="mb-16" variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Our Strategic Focus
              </h2>
              <p className="text-lg text-gray-700">
                The Robert Mazibuko Foundation operates across five key focus
                areas, each designed to create meaningful impact for our planet
                and people. These focus areas guide our programs and initiatives
                as we work towards a more sustainable and equitable future.
              </p>
            </motion.div>

            {/* Focus Area 1 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 mb-12"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 2L2 12l10 10 10-10L12 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    01. Afforestation and Forest Restoration
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      Establish a forest on land that previously did not have a forest.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      Restoring and protecting forest ecosystems across SADC using an integrated ecosystem restoration and sustainable development approach.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Focus Area 2 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 mb-12"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    02. Urban Greening and Food Gardening
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      Increasing urban green space and nature appreciation in cities in SADC through indigenous gardening and environmental education.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      Green urban spaces are an essential part of ecological and social well-being.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      Increasing access to fresh produce for urban and rural communities in SADC through community and backyard gardens.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      Urban food gardens connect communities to its food and to each other.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Focus Area 3 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 mb-12"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    03. Environmental Awareness
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      Increasing environmental awareness, stewardship, and collective action amongst individuals, communities, organisations, businesses, and government bodies in South Africa and beyond.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      Communities cannot protect what they do not understand.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Focus Area 4 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 mb-12"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    04. Community Health and Wellbeing
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      Integrated care for the elderly, people living with disabilities.
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      Health education and support for disadvantaged schools.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Focus Area 5 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 mb-12"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    05. Promote "Unity in Fighting Climate Change" in SADC
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">•</span>
                      Organising, managing and promoting environmentally-related activities and/or events.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    1. Afforestation and Forest Restoration
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Establish a forest on land that previously did not have a
                      forest.
                    </li>
                    <li>
                      Restoring and protecting forest ecosystems across SADC
                      using an integrated ecosystem restoration and sustainable
                      development approach.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Focus Area 2 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 mb-12"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    2. Urban Greening and Food Gardening
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Increasing urban green space and nature appreciation in
                      cities in SADC through indigenous gardening and
                      environmental education.
                    </li>
                    <li>
                      Green urban spaces are an essential part of ecological and
                      social well-being.
                    </li>
                    <li>
                      Increasing access to fresh produce for urban and rural
                      communities in SADC through community and backyard
                      gardens.
                    </li>
                    <li>
                      Urban food gardens connect communities to its food and to
                      each other.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Focus Area 3 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 mb-12"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    3. Environmental Awareness
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Increasing environmental awareness, stewardship, and
                      collective action amongst individuals, communities,
                      organisations, businesses, and government bodies in South
                      Africa and beyond.
                    </li>
                    <li>
                      Communities cannot protect what they do not understand.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Focus Area 4 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 mb-12"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    4. Community Health and Wellbeing
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Integrated care for the elderly, people living with
                      disabilities.
                    </li>
                    <li>
                      Health education and support for disadvantaged schools.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Focus Area 5 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 mb-12"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    5. Promote &quot;Unity in Fighting Climate Change&quot; in
                    SADC
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Organising, managing and promoting environmentally-related
                      activities and/or events.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Join Us in Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Together, we can create meaningful change for our planet and
              communities. Get involved with our focus areas today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://donate.plant-rmf.org.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-green-700 rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                Donate Now
              </a>
              <a
                href="https://apply.plant-rmf.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors font-medium"
              >
                Apply For Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
