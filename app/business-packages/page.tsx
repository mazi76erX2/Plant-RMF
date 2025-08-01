"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

// Business package type
interface BusinessPackage {
  id: string;
  name: string;
  price: number;
  treesPerMonth: number;
  treesPerYear: number;
  features: string[];
  isPopular?: boolean;
}

// API function to fetch business packages
const fetchBusinessPackages = async (): Promise<{ success: boolean; data: BusinessPackage[] }> => {
  const response = await fetch('/api/business-packages');
  if (!response.ok) {
    throw new Error('Failed to fetch business packages');
  }
  return response.json();
};

const BusinessPackages = () => {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  // Use React Query to fetch business packages
  const { data, isLoading, error } = useQuery({
    queryKey: ['business-packages'],
    queryFn: fetchBusinessPackages,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const packages = data?.data || [];

  const togglePackage = (packageName: string) => {
    setExpandedPackage(expandedPackage === packageName ? null : packageName);
  };

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
    <main className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative w-full h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/tree-planting-hands.jpeg"
            alt="Business Tree Planting"
            width={1920}
            height={1080}
            sizes="100vw"
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <motion.div
          className="container mx-auto px-4 relative z-10 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Business Packages
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Partner with us to make a lasting environmental impact
          </p>
        </motion.div>
      </section>

      {/* Packages Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-green-800 mb-6"
              variants={fadeInUp}
            >
              Choose Your Environmental Impact
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Select the package that best suits your company's commitment to environmental sustainability
            </motion.p>
          </motion.div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
              <span className="ml-3 text-gray-600">Loading packages...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
                Failed to load business packages. Please try again later.
              </div>
            </div>
          )}

          {/* Package Cards */}
          {!isLoading && !error && packages.length > 0 && (
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                    pkg.isPopular ? 'border-4 border-green-600' : ''
                  }`}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`${
                    index === 0 ? 'bg-green-600' :
                     index === 1 ? 'bg-green-700' : 'bg-green-800'
                  } text-white p-6 text-center relative`}>
                    {pkg.isPopular && (
                      <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-sm font-bold">
                        POPULAR
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-3xl font-bold mb-2">R{pkg.price.toLocaleString()}</p>
                    <p className="text-sm">per annum</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <p className="text-lg font-semibold text-green-800 mb-2">{pkg.treesPerMonth} trees per month</p>
                      <p className="text-gray-600">{pkg.treesPerYear} trees per year</p>
                    </div>
                    <button
                      onClick={() => togglePackage(pkg.id)}
                      className={`w-full ${
                        index === 0 ? 'bg-green-600 hover:bg-green-700' :
                        index === 1 ? 'bg-green-700 hover:bg-green-800' : 'bg-green-800 hover:bg-green-900'
                      } text-white py-3 px-6 rounded-md font-semibold transition-colors`}
                    >
                      {expandedPackage === pkg.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* All Packages Option */}
          <motion.div
            className="bg-gradient-to-r from-green-800 to-green-600 text-white rounded-lg p-8 text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-4">All Three Packages</h3>
            <p className="text-4xl font-bold mb-2">R2,408,400 per annum</p>
            <p className="text-xl mb-4">
              Plant 180 trees per month • 2,160 trees per year
            </p>
            <button className="bg-white text-green-800 hover:bg-gray-100 py-3 px-8 rounded-md font-bold text-lg transition-colors">
              Get Complete Package
            </button>
          </motion.div>
        </div>
      </section>

      {/* Package Details */}
      {expandedPackage && !isLoading && !error && (
        <motion.section
          className="py-16 bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            {(() => {
              const selectedPackage = packages.find(pkg => pkg.id === expandedPackage);
              if (!selectedPackage) return null;

              return (
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-3xl font-bold text-green-800 mb-8 text-center">
                    {selectedPackage.name} Package Details
                  </h3>
                  <p className="text-xl text-center mb-8 text-gray-600">
                    Let's plant {selectedPackage.treesPerMonth} trees together each month
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-2xl font-bold text-green-700 mb-4">
                        Package Features
                      </h4>
                      <ul className="space-y-3 text-gray-700">
                        {selectedPackage.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-2xl font-bold text-green-700 mb-4">
                        Impact Summary
                      </h4>
                      <div className="bg-green-50 p-6 rounded-lg">
                        <div className="text-center mb-4">
                          <p className="text-2xl font-bold text-green-800">
                            {selectedPackage.treesPerMonth} trees/month
                          </p>
                          <p className="text-lg text-gray-600">
                            {selectedPackage.treesPerYear} trees/year
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-green-600 mb-2">
                            R{selectedPackage.price.toLocaleString()}
                          </p>
                          <p className="text-gray-600">per annum</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-semibold transition-colors">
                          Get Started with {selectedPackage.name}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </motion.section>
      )}

      {/* Summary Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-4xl font-bold text-green-800 mb-8"
              variants={fadeInUp}
            >
              Summary of the Tree Planting Proposal
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 mb-8"
              variants={fadeInUp}
            >
              By working with us, your company will:
            </motion.p>

            <motion.div
              className="grid md:grid-cols-2 gap-8 text-left"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Gain valuable examples of corporate social responsibility
                    (CSI) reporting that will help you meet South Africa's and
                    United Nations Sustainability Development Goals
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Ease of triple bottom line and ESG disclosure (planet,
                    people, profit) reporting in your annual financial
                    statements and to the CIPC
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Corporate citizenship giving positive view from customers
                    and stakeholders
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    Receive a Section 18A receipt – SARS tax deductible
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div className="mt-12" variants={fadeInUp}>
              <button className="bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-md font-bold text-lg transition-colors">
                Get Started Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-4xl font-bold text-green-800 mb-12 text-center"
              variants={fadeInUp}
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.div
                className="bg-gray-50 rounded-lg p-6"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  Can I choose the location for tree planting?
                </h3>
                <p className="text-gray-700">
                  You can let us know which locations you believe would be best.
                  We determine the locations in cooperation with local
                  governments, considering areas in need of afforestation.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-lg p-6"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  How can I track the progress of the plantings?
                </h3>
                <p className="text-gray-700">
                  Information on the progress of our collaboration and materials
                  from events will be regularly sent via email. Additionally, we
                  update a section on our website with information about our
                  cooperation with your company.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-lg p-6"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  Is there a minimum cooperation period?
                </h3>
                <p className="text-gray-700">
                  We do not oblige companies to long-term cooperation. You can
                  resign at any time.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-lg p-6"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  How will I receive materials from your foundation?
                </h3>
                <p className="text-gray-700">
                  Upon starting our collaboration, we will prepare for you a
                  widget for your company's website showing the number of trees
                  planted, photos from our planting events, and annual reports
                  on the environmental impact of our cooperation.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BusinessPackages;