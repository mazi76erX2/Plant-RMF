"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    programType: "",
    organizationType: "",
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    location: "",
    projectDescription: "",
    impacts: "",
    heardFrom: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        programType: "",
        organizationType: "",
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        location: "",
        projectDescription: "",
        impacts: "",
        heardFrom: "",
      });

      // Reset submission status after 8 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 8000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/tree-planting-man.jpeg"
            alt="Apply for Support"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Apply for Support
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Partner with the Robert Mazibuko Foundation to bring environmental
            initiatives and tree planting programs to your community.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Program Application
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-6 rounded mb-6 text-center"
                >
                  <svg
                    className="w-12 h-12 mx-auto text-green-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">
                    Application Submitted!
                  </h3>
                  <p>
                    Thank you for your application. Our team will review your
                    submission and contact you within 5-7 business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4 text-gray-800 border-b pb-2">
                      Program Information
                    </h3>

                    <div className="mb-6">
                      <label
                        htmlFor="programType"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        Which program are you applying for? *
                      </label>
                      <select
                        id="programType"
                        name="programType"
                        value={formData.programType}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      >
                        <option value="">Select a program</option>
                        <option value="treePlanting">
                          Tree Planting Initiative
                        </option>
                        <option value="environmentalEducation">
                          Environmental Education
                        </option>
                        <option value="communityGarden">
                          Community Garden Project
                        </option>
                        <option value="carbonOffset">
                          Carbon Offset Partnership
                        </option>
                        <option value="research">Research & Development</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="organizationType"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        Type of Organization *
                      </label>
                      <select
                        id="organizationType"
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      >
                        <option value="">Select organization type</option>
                        <option value="school">
                          School/Educational Institution
                        </option>
                        <option value="community">
                          Community Organization
                        </option>
                        <option value="ngo">NGO/Non-profit</option>
                        <option value="business">Business/Corporation</option>
                        <option value="government">Government Entity</option>
                        <option value="individual">Individual</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4 text-gray-800 border-b pb-2">
                      Contact Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium mb-2 text-gray-700"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2 text-gray-700"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2 text-gray-700"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="organization"
                          className="block text-sm font-medium mb-2 text-gray-700"
                        >
                          Organization Name (if applicable)
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        Location/Area *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="City, Province"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4 text-gray-800 border-b pb-2">
                      Project Details
                    </h3>

                    <div className="mb-6">
                      <label
                        htmlFor="projectDescription"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        Project Description *
                      </label>
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Please describe your project idea or how you'd like to implement our program in your area."
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      ></textarea>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="impacts"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        Expected Impacts *
                      </label>
                      <textarea
                        id="impacts"
                        name="impacts"
                        value={formData.impacts}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="What environmental and community benefits do you expect from this project?"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      ></textarea>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="heardFrom"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        How did you hear about us?
                      </label>
                      <select
                        id="heardFrom"
                        name="heardFrom"
                        value={formData.heardFrom}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      >
                        <option value="">Select an option</option>
                        <option value="website">Website</option>
                        <option value="socialMedia">Social Media</option>
                        <option value="wordOfMouth">Word of Mouth</option>
                        <option value="event">Event</option>
                        <option value="newspaper">Newspaper/Magazine</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="consent"
                          className="mt-1 mr-2"
                          required
                        />
                        <label
                          htmlFor="consent"
                          className="text-sm text-gray-700"
                        >
                          I agree that my submitted data is being collected and
                          stored as described in the{" "}
                          <Link
                            href="/terms-and-conditions"
                            className="text-green-700 hover:underline"
                          >
                            Privacy Policy
                          </Link>
                          . *
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="/tree-plant1.jpg"
                  alt="Tree Planting Initiative"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Tree Planting Initiative
                </h3>
                <p className="text-gray-600 mb-4">
                  Our core program provides trees and planting support to
                  communities, schools, and public spaces across South Africa.
                </p>
                <div className="flex items-center text-green-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  Funding & Technical Support
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="/tree-seedlings.jpg"
                  alt="Environmental Education"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Environmental Education
                </h3>
                <p className="text-gray-600 mb-4">
                  Educational workshops and resources for schools and
                  communities to promote environmental sustainability.
                </p>
                <div className="flex items-center text-green-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Educational Materials & Workshops
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src="/tree-planting-hands.jpeg"
                  alt="Community Garden Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Community Garden Project
                </h3>
                <p className="text-gray-600 mb-4">
                  Support for establishing sustainable community gardens that
                  promote food security and environmental stewardship.
                </p>
                <div className="flex items-center text-green-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  Seeds, Tools & Training
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Application Criteria
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Who Can Apply?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Schools and educational institutions in South Africa
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Community-based organizations and NGOs</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Local municipalities and government entities</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Small-scale farmers and agricultural cooperatives</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Businesses seeking to implement environmental projects
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Selection Process
              </h3>
              <ol className="space-y-4 text-gray-700">
                <li className="flex">
                  <span className="bg-green-100 text-green-700 w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    1
                  </span>
                  <div>
                    <p className="font-medium">Application Review</p>
                    <p className="text-sm text-gray-600">
                      Our team reviews all applications for eligibility and
                      alignment with our mission.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-green-100 text-green-700 w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    2
                  </span>
                  <div>
                    <p className="font-medium">Initial Assessment</p>
                    <p className="text-sm text-gray-600">
                      Shortlisted applicants may be contacted for additional
                      information or a preliminary discussion.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-green-100 text-green-700 w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <p className="font-medium">Site Visit (if applicable)</p>
                    <p className="text-sm text-gray-600">
                      For tree planting and community garden projects, a site
                      assessment may be conducted.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-green-100 text-green-700 w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    4
                  </span>
                  <div>
                    <p className="font-medium">Final Decision</p>
                    <p className="text-sm text-gray-600">
                      Approved applicants will be notified and the
                      implementation process will begin.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
