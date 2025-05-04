'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-green-700">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Terms and Conditions of Use
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Thank you for visiting this website. Please read these Terms and Conditions of Use carefully before using this site.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p>
              These Terms and Conditions of Use ("Terms of Use") apply to the entire contents of the <strong>Food & Trees for Africa ('FTFA")</strong> website located at www.trees.org.za and all associated sites linked to www.trees.org.za by FTFA, its affiliates and/or other websites owned by FTFA and any/all downloaded or streamed content or email correspondence between us and you (collectively referred to as the "Site").
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. User agreement</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>BY USING THE SITE, YOU AGREE TO THESE TERMS OF USE; IF YOU DO NOT AGREE, DO NOT USE THE SITE</li>
              <li>If you use the website (including downloading and/or streaming content from the website) you will be deemed to have read and be bound by these Terms of Use of Use whether or not, you have registered with us.</li>
              <li>We therefore strongly recommend you read, agree with and accept all of the Terms of Use of Use contained in this document which includes those expressly set out below and those incorporated by reference, before you may make use of the website and related services.</li>
              <li>FTFA reserves the right, at its sole discretion, to change, modify, add or remove portions of these Terms of Use of Use, at any time. It is your responsibility to check these Terms of Use of Use periodically for changes. Your continued use of the Site following the posting of changes will mean that you accept and agree to the changes. As long as you comply with these Terms of Use of Use, FTFA grants you a personal, non-exclusive, non-transferable, limited privilege to enter and use the Site.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reference in these Terms of Use to "we", "our" or "us" means FTFA, and "you" or "your" means any person or entity using the website and related services.</li>
              <li>The terms "Site" and "Website" are used interchangeably throughout this policy document and FTFA's Privacy Policy Document.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Accessing and Using the website</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may not use the Site or any Content for any purpose that is unlawful or prohibited by these Terms of Use or to solicit the performance of any illegal activity or other activity which infringes the rights of FTFA or others.</li>
              <li>You may not use any "deep-link", "page-scrape", "robot", "spider" or any other automatic device, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Site or any Content, or in any way reproduce or circumvent the navigational structure or presentation of the Site or any Content, to obtain or attempt to obtain any materials, documents or information through any means not purposely made available through the Site. FTFA reserves the right to bar any such activity.</li>
              <li>You may not attempt to gain unauthorized access to any portion or feature of the Site, or any other systems or networks connected to the Site or to any web hosting server, or to any of the services offered on or through the Site, by hacking, password "mining" or any other illegitimate means.</li>
              <li>You may not probe, scan or test the vulnerability of the Site or any network connected to the Site, nor breach the security or authentication measures on the Site or any network connected to the Site. You may not reverse look-up, trace or seek to trace any information on any other user of or visitor to the Site, or any other donor/partner of FTFA to its source, or exploit the Site or any service or information made available or offered by or through the Site, in any way where the purpose is to reveal any information, including but not limited to personal identification or information, other than your own information, as provided for by the Site.</li>
              <li>You agree that you will not take any action that imposes an unreasonable or disproportionately large load on the Site's infrastructure or networks, or any systems or networks connected to the Site or to FTFA.</li>
              <li>You agree not to use any device, software or routine to interfere or attempt to interfere with the proper working of the Site or any transaction being conducted on the Site, or with any other person's use of the Site.</li>
              <li>You may not forge headers or otherwise manipulate identifiers in order to disguise the origin of any message or transmittal you send to FTFA on or through the Site or any service offered on or through the Site. You may not pretend that you are, or that you represent, someone else, or impersonate any other individual or entity.</li>
              <li>Again, we reserve the right in our sole discretion to deny any user access to the website or any part of it without prior notice.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Trademarks, Intellectual Property Rights and Copyright</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The FTFA Logo, all individual programme and logos are protected by copyright. To strengthen their protection, they have also been registered as trademarks. The programme/initiative names: "Trees for All"; "Trees for Homes"; "Food Gardens for Africa"; "FEED Africa"; "EduPlant"; "Bamboo for Africa"; and "African Climate Reality Project" are internationally registered as trademarks of FTFA. The words and phrases: "Farmer Eco-Enterprise Development"; "Leaders in Development Impact" and "The stories we start never end" are copyrighted and the intellectual property of FTFA.</li>
              <li>You may not use any of FTFA's trademarks in any way without our express prior written permission, and then only in ways contractually agreed to.</li>
              <li>Our trademarks and any other programme, initiative or product name that we may present on the website from time to time may not be used in connection with any product or service that is not FTFA's, nor in any manner that is likely to cause confusion, or in any way that may disparage or discredit FTFA.</li>
              <li>Other logos and names used on the website may also be the trademarks of FTFA or their respective owners. No permission is given by us in respect of the use of any such trademarks, names or logos and such use may constitute an infringement of the holder's rights.</li>
              <li>You acknowledge that all copyright, trademarks and other intellectual property rights in the website and all photographs, designs, images, text, software, data, audio, video, files, computer code and other material in the website or material generated by or transmitted from the website ("FTFA Content") including but not limited to the design, structure, selection, coordination, expression, "look and feel" and arrangement of such Content, contained on the Site is owned, controlled by or to FTFA.</li>
              <li>Provided you use the website and FTFA content in accordance with these Terms of Use, and with specific reference to the "Resources" Portion of the Site you are permitted to copy content, print, download and receive extracts of FTFA content ("Extracts") ONLY for your personal non-commercial use and for private study or teaching purposes, provided in each case that:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>copyright and source indications are also printed and copied and/or stored in association with the Extracts;</li>
                  <li>no modifications are made to the Extracts and Extracts are not used as part of any other publication or derivative work; and</li>
                  <li>any Extract is used in accordance with use in accordance with any usage terms posted on the website in relation to the particular item or the website in general.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">If you have any questions about our Terms and Conditions, please contact us:</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors">
                Contact Us
              </Link>
              <a 
                href="https://donate.trees.org.za/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-green-700 border border-green-700 rounded-md hover:bg-green-50 transition-colors"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 