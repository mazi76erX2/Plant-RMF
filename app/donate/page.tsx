"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DonatePage() {
  const [step, setStep] = useState(1);
  const [currency, setCurrency] = useState("ZAR");
  const [donationAmount, setDonationAmount] = useState(200);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    if (e.target.value) {
      setDonationAmount(Number(e.target.value));
    }
  };

  const nextStep = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(step + 1);
    }, 500);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/tree-planting-hands.jpeg"
            alt="Donation"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Support Our Mission
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Your donation helps us plant more trees, promote sustainable
            development, and create greener communities across South Africa.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Progress Steps */}
            <div className="bg-green-700 p-4 text-white">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 1 ? "bg-yellow-500 text-gray-900" : "bg-white/30"
                    } mr-2`}
                  >
                    1
                  </div>
                  <span className="hidden sm:inline">Select Amount</span>
                </div>
                <div className="w-8 h-0.5 bg-white/50"></div>
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 2 ? "bg-yellow-500 text-gray-900" : "bg-white/30"
                    } mr-2`}
                  >
                    2
                  </div>
                  <span className="hidden sm:inline">Your Information</span>
                </div>
                <div className="w-8 h-0.5 bg-white/50"></div>
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 3 ? "bg-yellow-500 text-gray-900" : "bg-white/30"
                    } mr-2`}
                  >
                    3
                  </div>
                  <span className="hidden sm:inline">Payment</span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Select your donation details
                  </h2>

                  {/* Currency Select */}
                  <div className="mb-6">
                    <label
                      htmlFor="currency"
                      className="block text-lg font-medium mb-2 text-gray-700"
                    >
                      Select your currency
                    </label>
                    <select
                      id="currency"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    >
                      <option value="ZAR">South African rand</option>
                      <option value="USD">United States (US) dollar</option>
                      <option value="GBP">Pound sterling</option>
                      <option value="EUR">Euro</option>
                      <option value="CAD">Canadian dollar</option>
                    </select>
                  </div>

                  {/* Amount Options */}
                  <div className="mb-6">
                    <label className="block text-lg font-medium mb-2 text-gray-700">
                      Select your donation amount
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      {[100, 200, 500, 1000, 2000].map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountSelect(amount)}
                          className={`p-3 rounded-md font-medium transition ${
                            donationAmount === amount && !customAmount
                              ? "bg-green-700 text-white"
                              : "bg-green-100 text-green-800 hover:bg-green-200"
                          }`}
                        >
                          {currency === "ZAR"
                            ? "R"
                            : currency === "USD"
                            ? "$"
                            : currency === "GBP"
                            ? "£"
                            : currency === "EUR"
                            ? "€"
                            : "$"}
                          {amount}
                        </button>
                      ))}
                      <div className="col-span-2 sm:col-span-4">
                        <label
                          htmlFor="customAmount"
                          className="block text-sm font-medium mb-1 text-gray-700"
                        >
                          Own amount
                        </label>
                        <input
                          type="number"
                          id="customAmount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Donation Type */}
                  <div className="mb-8">
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setDonationType("one-time")}
                        className={`flex-1 py-3 px-4 rounded-md font-medium transition ${
                          donationType === "one-time"
                            ? "bg-green-700 text-white"
                            : "bg-green-100 text-green-800 hover:bg-green-200"
                        }`}
                      >
                        One-time
                      </button>
                      <button
                        type="button"
                        onClick={() => setDonationType("monthly")}
                        className={`flex-1 py-3 px-4 rounded-md font-medium transition ${
                          donationType === "monthly"
                            ? "bg-green-700 text-white"
                            : "bg-green-100 text-green-800 hover:bg-green-200"
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  <div className="text-gray-600 mb-8">
                    <p className="mb-4">
                      Thank you for supporting the Robert Mazibuko Foundation.
                    </p>
                    <p className="mb-4">
                      You have the option to support any of our programmes. If
                      you would specifically like to donate trees, please donate
                      any amount in multiples of R200 for trees.
                    </p>
                    <p>
                      Together, we can help make South Africa greener and more
                      environmentally sustainable.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition flex items-center justify-center"
                  >
                    {isLoading ? (
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
                    ) : null}
                    Go to step 2
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Your Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-1 text-gray-700"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium mb-1 text-gray-700"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1 text-gray-700"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      placeholder="Any specific instructions or message regarding your donation"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="py-3 px-6 border border-green-700 text-green-700 rounded-md font-medium hover:bg-green-50 transition"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={isLoading}
                      className="py-3 px-6 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition flex items-center justify-center"
                    >
                      {isLoading ? (
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
                      ) : null}
                      Proceed to Payment
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Payment Method
                  </h2>

                  <div className="mb-8 border rounded-md p-4">
                    <h3 className="text-lg font-medium mb-4 text-gray-800">
                      Donation Summary
                    </h3>
                    <div className="flex justify-between mb-2">
                      <span>Amount:</span>
                      <span className="font-medium">
                        {currency === "ZAR"
                          ? "R"
                          : currency === "USD"
                          ? "$"
                          : currency === "GBP"
                          ? "£"
                          : currency === "EUR"
                          ? "€"
                          : "$"}
                        {donationAmount}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Frequency:</span>
                      <span className="font-medium capitalize">
                        {donationType}
                      </span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-md p-4 hover:border-green-500 cursor-pointer">
                        <div className="flex justify-center mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                          </svg>
                        </div>
                        <p className="text-center font-medium">Credit Card</p>
                      </div>
                      <div className="border rounded-md p-4 hover:border-green-500 cursor-pointer">
                        <div className="flex justify-center mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-center font-medium">Bank Transfer</p>
                      </div>
                      <div className="border rounded-md p-4 hover:border-green-500 cursor-pointer">
                        <div className="flex justify-center mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-center font-medium">
                          Mobile Payment
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 bg-gray-100 p-4 rounded-md">
                    <h3 className="text-lg font-medium mb-4 text-gray-800">
                      Bank Details for Direct Transfer
                    </h3>
                    <p className="mb-2">
                      <span className="font-medium">Bank:</span> First National
                      Bank (FNB)
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">Branch:</span> Kwa-Guqa
                      (250655)
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">Account No:</span>{" "}
                      62866857455
                    </p>
                    <p className="mb-2">
                      <span className="font-medium">Account Type:</span>{" "}
                      Business Account
                    </p>
                    <p className="mb-4">
                      <span className="font-medium">Reference:</span> Your Name
                    </p>
                    <div className="flex items-center justify-center space-x-6">
                      <div className="text-center">
                        <p className="font-medium mb-2">Zapper</p>
                        <div className="w-24 h-24 bg-gray-300 rounded-md flex items-center justify-center">
                          <span className="text-xs text-gray-600">QR Code</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-medium mb-2">SnapScan</p>
                        <div className="w-24 h-24 bg-gray-300 rounded-md flex items-center justify-center">
                          <span className="text-xs text-gray-600">QR Code</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="py-3 px-6 border border-green-700 text-green-700 rounded-md font-medium hover:bg-green-50 transition"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="py-3 px-6 bg-green-700 text-white rounded-md font-medium hover:bg-green-800 transition"
                    >
                      Complete Donation
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Your Donation Makes a Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Community Development
              </h3>
              <p className="text-gray-600">
                Your donation helps fund community development initiatives that
                promote sustainability and environmental education.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-700"
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
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Tree Planting
              </h3>
              <p className="text-gray-600">
                Every R200 donated plants a tree, contributing to reforestation
                efforts and combating climate change across South Africa.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-700"
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
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Education Programs
              </h3>
              <p className="text-gray-600">
                Support our educational initiatives that teach sustainable
                environmental practices and conservation to communities and
                schools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
