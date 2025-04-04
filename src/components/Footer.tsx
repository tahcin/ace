'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../utils/animations';

const Footer = () => {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-dark dark:bg-gray-900 text-white"
    >
      <div className="container-custom py-8 sm:py-10 lg:py-12">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <motion.div variants={slideUp} className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-3 sm:mb-4">AceLMS</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-0">
              Empowering education through technology. Join our platform and elevate your learning journey.
            </p>
          </motion.div>
          <motion.div variants={slideUp}>
            <h4 className="text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors inline-block py-1.5">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors inline-block py-1.5">
                  Courses
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors inline-block py-1.5">
                  About Us
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={slideUp}>
            <h4 className="text-lg font-semibold mb-3 sm:mb-4">Support</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors inline-block py-1.5">
                  FAQ
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors inline-block py-1.5">
                  Contact Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors inline-block py-1.5">
                  Privacy Policy
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={slideUp} className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-3 sm:mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                href="#" 
                className="text-gray-300 hover:text-white p-2.5 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center" 
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                href="#" 
                className="text-gray-300 hover:text-white p-2.5 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                href="#" 
                className="text-gray-300 hover:text-white p-2.5 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm text-center sm:text-left mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} AceLMS. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 