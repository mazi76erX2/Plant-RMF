'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollToTopButton from '../components/ScrollToTopButton';

const TreesCarbon = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardHover = {
    hover: { 
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative py-32 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/community-tree-planting-hero.jpg"
            alt="Trees and Carbon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 to-green-900/80"></div>
        </div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Trees & Carbon</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Our tree planting initiatives aim to create greener, healthier communities while 
            offsetting carbon emissions and fighting climate change.
          </p>
          <div className="flex items-center justify-center text-sm space-x-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>»</span>
            <span>Trees & Carbon</span>
          </div>
        </motion.div>
      </section>

      {/* Tree Planting Initiatives */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-6 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Tree Planting Initiatives
          </motion.h2>
          <motion.p 
            className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Discover our signature tree planting programs that are transforming communities and environments across South Africa.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300"
              variants={fadeInUp}
              whileHover="hover"
            >
              <div className="relative h-60">
                <Image 
                  src="/community-tree-planting-hero.jpg" 
                  alt="Community Tree Planting" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Community Tree Planting</h3>
                <p className="text-gray-700 mb-4">
                  Our flagship initiative includes Trees for All and Trees for Homes programs, creating greener communities in shared spaces and private homes.
                </p>
                <Link href="/trees-carbon/community-tree-planting" className="text-green-700 font-semibold hover:text-green-900 inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300"
              variants={fadeInUp}
              whileHover="hover"
            >
              <div className="relative h-60">
                <Image 
                  src="/trees-for-all.jpg" 
                  alt="Trees for Bees" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Trees for Bees</h3>
                <p className="text-gray-700 mb-4">
                  Supporting pollinators and biodiversity, this program plants bee-friendly trees to support ecosystem health and sustainable agriculture.
                </p>
                <Link href="/trees-carbon/trees-for-bees" className="text-green-700 font-semibold hover:text-green-900 inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300"
              variants={fadeInUp}
              whileHover="hover"
            >
              <div className="relative h-60">
                <Image 
                  src="/trees-for-homes.jpg" 
                  alt="Carbon Tax Offset" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Carbon Tax Offset</h3>
                <p className="text-gray-700 mb-4">
                  Help your organization meet carbon reduction goals through our verified carbon offset tree planting initiatives.
                </p>
                <Link href="/trees-carbon/carbon-tax-offset" className="text-green-700 font-semibold hover:text-green-900 inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Carbon Offsetting */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Carbon Offsetting</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our carbon offset programs are designed to help businesses and individuals reduce their carbon footprint while contributing to the growth of green spaces and sustainable communities.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                All of our tree planting initiatives are eligible for carbon offsetting, with proper monitoring and verification systems in place. Our Trees for Homes program is registered with the Verified Carbon Standard (VCS).
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Offset your company's carbon emissions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Meet your corporate sustainability goals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Support local communities and create green jobs</span>
                </li>
              </ul>
              
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md transition-colors"
              >
                Contact us to learn more
              </Link>
            </motion.div>
            
            <motion.div 
              className="relative h-[400px] md:h-[500px]"
              variants={fadeInUp}
            >
              <Image 
                src="/quote-background.jpg" 
                alt="Carbon Offsetting" 
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Volunteering */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="relative h-[400px] md:h-[500px] order-2 md:order-1"
              variants={fadeInUp}
            >
              <Image 
                src="/community-tree-planting-hero.jpg" 
                alt="Corporate Volunteering" 
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            
            <motion.div className="order-1 md:order-2" variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Corporate Volunteering</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Engage your employees in meaningful sustainability activities through our corporate volunteer days. Teams can participate in tree planting events, learn about environmental conservation, and make a tangible difference to communities.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Benefits of corporate volunteering with us:
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Build team morale and employee engagement</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Demonstrate corporate social responsibility</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Create lasting environmental impact</span>
                </li>
              </ul>
              
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md transition-colors"
              >
                Plan your volunteer day
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="w-full py-16 bg-green-800 text-white">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-6">Support our mission today</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your contribution can help us plant more trees, create greener communities, and combat climate change. Every tree makes a difference.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/donate" 
              className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-md text-lg transition-colors"
            >
              Donate Now
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  );
};

export default TreesCarbon; 