"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const CommunityTreePlanting = () => {
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative py-20 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/community-tree-planting-hero.jpg"
            alt="Community Tree Planting"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Community Tree Planting
          </h1>
          <div className="flex items-center justify-center text-sm space-x-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>»</span>
            <Link href="/trees-carbon" className="hover:underline">
              Trees & Carbon
            </Link>
            <span>»</span>
            <span>Community Tree Planting</span>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-green-800 font-semibold">
                Community Tree Planting
              </strong>{" "}
              is made up of two of FTFA&apos;s flagship programmes –{" "}
              <strong className="text-green-800 font-semibold">
                Trees for All
              </strong>{" "}
              and{" "}
              <strong className="text-green-800 font-semibold">
                Trees for Homes
              </strong>
              . These programmes combine well to plant trees in both shared
              spaces (schools, hospitals, clinics, parks, etc.) and private
              homes, to create a healthier, more food secure environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits of Urban Greening */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Benefits of Urban Greening
          </motion.h2>

          <motion.div
            className="flex flex-col items-center max-w-3xl mx-auto space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <BenefitItem
                icon={<TreeRegenerateIcon />}
                title="Regenerate / Rehabilitate Environments"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <BenefitItem
                icon={<TreeShadeIcon />}
                title="Provide Shade, Transpiration & Cooling"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <BenefitItem
                icon={<TreeFruitIcon />}
                title="Provide us with Fruit, Nuts & Medicine"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <BenefitItem
                icon={<TreeBiodiversityIcon />}
                title="Biodiversity and Climate Resilience"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <BenefitItem
                icon={<TreeAirIcon />}
                title="Give us Clean Air & Healthy Environment"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trees for All Section */}
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
              className="relative h-[400px] md:h-[500px]"
              variants={fadeIn}
            >
              <Image
                src="/trees-for-all.jpg"
                alt="Trees for All"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Trees for All
              </h2>
              <h3 className="text-xl text-green-700 mb-6 italic">
                (Trees in Shared Spaces)
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong className="text-green-800 font-semibold">
                  Trees for All
                </strong>{" "}
                is an award-winning programme that sustainably plants trees in
                shared spaces for a healthier, greener environment. This
                successful initiative educates communities about the benefits of
                trees, while offsetting carbon emissions and transforming the
                surrounding environment.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong className="text-green-800 font-semibold">
                  Trees for All
                </strong>{" "}
                plants and monitors fruit and indigenous trees at:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                <li>schools,</li>
                <li>hospitals;</li>
                <li>parks,</li>
                <li>clinics,</li>
                <li>aged-homes and;</li>
                <li>
                  anywhere else people will benefit from, and look after, trees.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trees for Homes Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="order-2 md:order-1" variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Trees for Homes
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong className="text-green-800 font-semibold">
                  Trees for Homes
                </strong>{" "}
                is the most successful township, greening initiative in South
                Africa. Originally designed to address South Africa&apos;s
                history of inequitable settlement policies, the programme grew
                to become the country&apos;s benchmark of innovation in urban
                forestry.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                A typical project sees two trees going to each home in a
                township:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>1 x fruit tree</li>
                <li>1 x indigenous tree</li>
              </ul>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Which trees a household receives depends on a number of factors
                but FTFA will ultimately choose trees that are going to have the
                best survival. In some projects the community members ask for
                two fruit / nut trees.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Developing community foresters with training and skills is also
                an integral part of the programmes design. These environmental
                champions create threads of awareness and appreciation and also
                have an opportunity for temporary and (potentially) long-term
                employment.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                TFH is currently driving{" "}
                <strong className="text-green-800 font-semibold">
                  greenbelt initiatives
                </strong>{" "}
                in a number of townships in major city centers nationally. We
                aim to transform these townships into rich urban food forests,
                teeming with life and biodiversity.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                This programme is also registered with the VCS (Verified Carbon
                Standard) making it possible to utilise it as a carbon offset
                programme.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[400px] md:h-[500px] order-1 md:order-2"
              variants={fadeIn}
            >
              <Image
                src="/trees-for-homes.jpg"
                alt="Trees for Homes"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Basic Info Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Basic Info
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-800">
                Trees for All
              </h3>
              <ul className="space-y-3">
                <InfoBullet text="Plant trees at schools, clinics, age-homes and animal sanctuaries." />
                <InfoBullet text="Can donate any number of trees." />
                <InfoBullet text="Often coupled with events and/or volunteer days." />
                <InfoBullet text="Delivered tree + compost + M&E is R190 / tree." />
                <InfoBullet text="FTFA has 1000s of applications on file." />
                <InfoBullet text="Trees are checked at regular intervals." />
                <InfoBullet text="We plant both fruit and indigenous trees depending on need." />
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-800">
                Trees for Homes
              </h3>
              <ul className="space-y-3">
                <InfoBullet text="Plant trees at private homes in a community or township." />
                <InfoBullet text="Minimum 750 trees." />
                <InfoBullet text="Trees are checked at 1 week, 6 months and 1 year." />
                <InfoBullet text="Plant in our designated FTFA greenbelts." />
                <InfoBullet text="2 trees per home – 1 fruit & 1 indigenous depending on need." />
                <InfoBullet text="Trees + CE Training & Employment + M&E = R190/tree" />
                <InfoBullet text="Programme is Carbon Offset Registered." />
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full py-20 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/quote-background.jpg"
            alt="Forest background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <motion.div
          className="container mx-auto px-4 relative z-10 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-2xl md:text-3xl italic font-light">
              &quot;The environment and the economy are really both two sides of
              the same coin.
            </p>
            <p className="text-2xl md:text-3xl italic font-light">
              If we cannot sustain the environment, we cannot sustain
              ourselves.&quot;
            </p>
            <p className="text-lg mt-6">
              – Wangari Maathai (Founder of the Greenbelt Movement & Noble Peace
              Laureate)
            </p>
          </div>
        </motion.div>
      </section>

      {/* Plant a Tree CTA */}
      <section className="w-full py-16 bg-green-800">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            Plant a tree today.
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

// Benefit Item Component
const BenefitItem = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex-shrink-0 w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

// Info Bullet Component
const InfoBullet = ({ text }: { text: string }) => {
  return (
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
      <span className="text-gray-700">{text}</span>
    </li>
  );
};

// Tree Icon Components
const TreeRegenerateIcon = () => (
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
      strokeWidth="1.5"
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);

const TreeShadeIcon = () => (
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
      strokeWidth="1.5"
      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    />
  </svg>
);

const TreeFruitIcon = () => (
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
      strokeWidth="1.5"
      d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v3m0 0v3m0-3h3m-3 0H9"
    />
  </svg>
);

const TreeBiodiversityIcon = () => (
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
      strokeWidth="1.5"
      d="M12 15c-1.932 0-3.5-1.568-3.5-3.5S10.068 8 12 8s3.5 1.568 3.5 3.5S13.932 15 12 15zm0 0c-3.866 0-7 1.79-7 4v1h14v-1c0-2.21-3.134-4-7-4z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 3v2M3 12h2M21 12h-2M12 19v2M19 5l-2 2M7 5l2 2M5 19l2-2M19 19l-2-2"
    />
  </svg>
);

const TreeAirIcon = () => (
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
      strokeWidth="1.5"
      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
    />
  </svg>
);

export default CommunityTreePlanting;
