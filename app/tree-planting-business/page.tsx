"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TreePlantingBusiness = () => {
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
            src="/tree-planting-men.jpeg"
            alt="Tree Planting for Business"
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
            Tree Planting for Businesses
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Learn how your company can actively contribute to environmental
            protection by planting trees
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-xl text-gray-700 leading-relaxed"
              variants={fadeInUp}
            >
              Our initiatives offer not only support for nature but also
              valuable benefits for your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Collaborate */}
      <section className="py-16 bg-green-50">
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
              Why is it worth collaborating with us?
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-green-700 mb-6">
                The Role of Trees in Combating Climate Change
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Trees play a crucial role in reducing carbon dioxide, one of the
                main greenhouse gases. Through photosynthesis, trees absorb CO2,
                contributing to the mitigation of global warming. Thus, planting
                trees is a direct and natural way to combat climate change.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-green-700 mb-6">
                Benefits for Local Communities
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Trees contribute to improving air quality, increasing
                biodiversity, and providing vital habitats for many species.
                Additionally, green areas in cities and rural locations have a
                positive impact on the well-being and health of residents.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
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
              What does the Foundation do?
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="text-center bg-green-50 rounded-lg p-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Carbon Footprint Reduction
              </h3>
              <p className="text-gray-700">
                Our mission is to significantly reduce carbon dioxide emissions
                by planting trees.
              </p>
            </motion.div>

            <motion.div
              className="text-center bg-green-50 rounded-lg p-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Biodiversity Protection
              </h3>
              <p className="text-gray-700">
                By increasing forested areas, we support biodiversity.
              </p>
            </motion.div>

            <motion.div
              className="text-center bg-green-50 rounded-lg p-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Environmental Education
              </h3>
              <p className="text-gray-700">
                We aim to raise ecological awareness among the public and
                business leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits for Your Company */}
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
              Benefits for Your Company
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-green-700 mb-6">
                Better Company's Image
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Participation in the tree planting program highlights the
                company's commitment to environmental actions, translating into
                a positive perception among customers and business partners.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-green-700 mb-6">
                Building Relationships
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ecological initiatives, such as tree planting, can enhance trust
                and loyalty among customers and employees, who increasingly
                value socially responsible companies.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-green-700 mb-6">
                Employee Engagement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                These programs can also serve as a tool for team building and
                engaging employees in important social issues.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              How to Join?
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Choose a Plan</h3>
              <p className="text-green-100">
                Decide which of our packages best suits your company.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Make a Payment</h3>
              <p className="text-green-100">
                Pay for the selected package or contact us.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Start Partnership</h3>
              <p className="text-green-100">
                After finalizing the agreement, we begin the implementation of
                joint activities.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href="/business-packages"
              className="inline-block bg-white text-green-600 hover:bg-gray-100 py-4 px-8 rounded-md font-bold text-lg transition-colors"
            >
              View Business Packages
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TreePlantingBusiness;
