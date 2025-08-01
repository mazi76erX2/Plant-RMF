"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Robert Mazibuko Foundation (RMF) (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website or use our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Personal Information</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>Apply for our programs or services</li>
                <li>Contact us through our website or email</li>
                <li>Subscribe to our newsletters or communications</li>
                <li>Make donations or contributions</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>

              <p className="text-gray-700 mb-4 leading-relaxed">
                This information may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Organization or company information</li>
                <li>Project descriptions and details</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>To process and respond to your applications and inquiries</li>
                <li>To provide information about our programs and services</li>
                <li>To communicate with you about your applications or projects</li>
                <li>To send newsletters, updates, and promotional materials (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To process donations and maintain financial records</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Contact Information</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our 
                data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Robert Mazibuko Foundation (RMF)</strong></p>
                <p className="text-gray-700 mb-2">Email: admin@plant-rmf.co.za</p>
                <p className="text-gray-700 mb-2">Phone: +27 82 597 0232</p>
                <p className="text-gray-700 mb-2">Address: Cnr. Thaba Busiu & Lebombo Street</p>
                <p className="text-gray-700">Kwa-Guqa Ext. 2, Mpumalanga, South Africa, 1073</p>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Thank you for trusting the Robert Mazibuko Foundation with your information.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 