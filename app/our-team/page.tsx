"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

// Team member type
interface TeamMember {
  id: string;
  name: string;
  credentials: string;
  role: string;
  image: string;
  bio?: string;
}

// API function to fetch team members
const fetchTeamMembers = async (): Promise<{ success: boolean; data: TeamMember[] }> => {
  const response = await fetch('/api/team');
  if (!response.ok) {
    throw new Error('Failed to fetch team members');
  }
  return response.json();
};

export default function OurTeam() {
  // Use React Query to fetch team members
  const { data, isLoading, error } = useQuery({
    queryKey: ['team-members'],
    queryFn: fetchTeamMembers,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const teamMembers = data?.data || [];

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
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <motion.div
          className="container mx-auto px-4 relative z-10 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Meet the dedicated professionals leading the Robert Mazibuko
            Foundation
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-700">
              Our team brings together passionate individuals committed to
              environmental conservation, community development, and sustainable
              practices. With diverse expertise and a shared vision, we work
              together to create positive change for our planet and communities.
            </p>
          </motion.div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
              <span className="ml-3 text-gray-600">Loading team members...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
                Failed to load team members. Please try again later.
              </div>
            </div>
          )}

          {/* Team Members */}
          {!isLoading && !error && teamMembers.length > 0 && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-duration-300"
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src =
                          "https://via.placeholder.com/300x400?text=Team+Member";
                      }}
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1 text-gray-800">
                      {member.name}
                      {member.credentials && (
                        <span className="ml-2 text-green-700">
                          {member.credentials}
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                    {member.bio && (
                      <p className="text-gray-500 mt-2 text-sm">{member.bio}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Organization Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Legalities and Compliance
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <strong>Organization:</strong> Robert Mazibuko Foundation (RMF)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <strong>Registration Number:</strong> 314-347 NPO
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <strong>Registration Date:</strong> 05 November 2024
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <strong>PBO Number:</strong> Application Pending
                  </span>
                </li>
              </ul>
            </div>
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
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              We&apos;re always looking for passionate individuals who share our
              vision of creating a more sustainable future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:admin@plant-rmf.org.za"
                className="px-6 py-3 bg-white text-green-700 rounded-md hover:bg-gray-100 transition-colors font-medium"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
