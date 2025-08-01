"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Home() {
  // Animation variants
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
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/trees-hero.jpg"
            alt="Hero Background"
            width={1920}
            height={1080}
            sizes="100vw"
            className="object-cover w-full h-full"
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            PLANT
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Robert Mazibuko Foundation (RMF)
          </h2>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-green-700 font-bold rounded-md text-lg transition-colors border-2 border-white shadow-lg"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Our Goal at PLANT
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We aim to improve the world we live in by enabling <em>people</em> to
              easily PLANT trees, absorb their carbon footprint and have a more
              sustainable lifestyle, and by helping organisations spread the
              word about their sustainable products and services.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              PLANT is ready to fight for our planet and <em>people</em>. PLANT would
              love it if you were to join us.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <div className="text-green-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                What is PLANT?
              </h3>
              <p className="text-gray-600 mb-4">
                PLANT as a noun, it refers to a living thing that grows in soil
                or water. As a verb, it means to put seeds or plants into the
                ground so that they will grow. PLANT is a project under the
                Robert Mazibuko Foundation (RMF) a South African-based
                environmental Non-Profit Organisation, enabling both businesses
                &amp; individuals to make a difference.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <div className="text-green-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                How Does PLANT Operate?
              </h3>
              <p className="text-gray-600 mb-4">
                PLANT&apos;s operation is driven by businesses and executed by
                society (stakeholders, customers, employees, communities).
                BUSINESSES purchase trees, plants, seeds, etc. to be planted by
                society, while INDIVIDUALS identify planting spaces, plant
                trees, vegetables, seeds, etc., monitor and periodically report
                on the plants.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At the Robert Mazibuko Foundation (RMF), we&apos;re guided by core
              values that shape everything we do.
            </p>
          </motion.div>s

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800"><em>Plant</em></h3>
                <p className="text-gray-600 mb-4">
                  We want to PLANT millions of trees a year. This is a mammoth
                  task. Urgent and significant change is required to solve the
                  problem of deforestation, carbon footprint and reverse climate
                  change. We need everyone to PLANT. Taking the first step is
                  the biggest challenge.
                </p>s
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Word of Mouth
                </h3>
                <p className="text-gray-600 mb-4">
                  Information is everything. Our collective impact on our
                  environment has never been more apparent, but it is important
                  now more than ever to keep spreading the word and fighting for
                  genuine change. Did you know, according to the WWF, the rapid
                  loss of species we are seeing today is estimated by experts to
                  be between 1,000 and 10,000 times higher than the natural
                  extinction rate?
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Transparency
                </h3>
                <p className="text-gray-600 mb-4">
                  We want to be completely transparent with you in everything we
                  do from how we plant trees to our everyday operations. So, if
                  you have any questions (or just want to say &apos;hey!&apos;)
                  please feel free to drop us a message at
                  admin@plant-rmf.org.za
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Inclusivity
                </h3>
                <p className="text-gray-600 mb-4">
                  We want to emphasise the practice and policy of being
                  inclusive, actively creating a welcoming and equitable
                  environment that focuses on the process of inclusion, not just
                  the outcome. We are committed to ensuring everyone feels
                  included, supported, and empowered to participate.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how PLANT creates value for businesses and society
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/plant-trees.jpg"
                  alt="Business Benefits"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                For Businesses
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Fulfilment of CSR program
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Annual triple-bottom line reporting (planet, <em>people</em>, profit)
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Tax deductible Section 18A receipt
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Corporate citizenship
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Web link to our website showcasing your business involvement
                  and impact
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Certificate of participation
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
            >
              <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/tree-planting-man.jpeg"
                  alt="Society Benefits"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                For Society
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Job creation/poverty alleviation for unemployed SA citizens
                  aged 25-59 years of age through an incentive for involvement
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Better and healthier environment
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-green-700 text-white">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Get in touch with us at admin@plant-rmf.org.za if you would like to
            discuss how planting can be integrated into your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://donate.plant-rmf.org.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-green-700 font-bold rounded-md text-lg transition-colors shadow-lg border-2 border-white"
              >
                JOIN
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://apply.plant-rmf.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/20 font-bold rounded-md text-lg transition-colors shadow-lg"
              >
                Apply Now
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  );
}
