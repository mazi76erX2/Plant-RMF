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
  const [agreeToTerms, setAgreeToTerms] = useState(false);

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
      setAgreeToTerms(false);

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
            Partner with the Robert Mazibuko Foundation (RMF) to bring environmental
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
                        Which business package are you applying for? *
                      </label>
                      <select
                        id="programType"
                        name="programType"
                        value={formData.programType}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      >
                        <option value="">Select a package</option>
                        <option value="carbonOffset">
                          Enviro-Start Package
                        </option>
                        <option value="treePlanting">
                          Enviro-Econo Package
                        </option>
                        <option value="environmentalEducation">
                          Enviro-Premium Package
                        </option>
                        <option value="communityGarden">
                          All Three Packages
                        </option>
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

                  {/* Terms and Conditions Checkbox */}
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        checked={agreeToTerms}
                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                        required
                        className="mt-1 mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">
                        I agree that my submitted data is being collected and stored as described in the <Link href="/privacy-policy" className="text-green-600 hover:text-green-700">Privacy Policy</Link>.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !agreeToTerms}
                    className="w-full py-3 px-4 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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
    </main>
  );
}
