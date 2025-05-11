import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-10 text-white bg-gradient-to-r from-black/90 to-black/70 shadow-xl">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* About Section */}
          <motion.div className="md:w-4/12 backdrop-blur-sm rounded-lg p-6" variants={sectionVariants}>
            <h3 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0D7292] to-[#0A5C75] bg-clip-text text-transparent">
              ACP-YAP
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200">
              As a Youth Ambassador, you will get special access to events, our modern library, and chances to improve your skills. Meet new people, work on projects together, and enjoy discounts at our cafe. This program helps you grow and get involved in the arts. Don't miss this chance to learn and make a difference.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div className="md:w-3/12 backdrop-blur-sm rounded-lg p-6 md:ml-6" variants={sectionVariants}>
            <h3 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0D7292] to-[#0A5C75] bg-clip-text text-transparent md:ml-4">
              Quick Links
            </h3>
            <motion.div className="flex flex-col space-y-2" variants={containerVariants}>
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#service', label: 'Service' },
                { href: '#blog', label: 'Blog' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-white text-sm sm:text-base lg:text-lg hover:bg-gradient-to-r hover:from-[#0D7292] hover:to-[#0A5C75] hover:bg-clip-text hover:text-transparent transition-all duration-300"
                  variants={itemVariants}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Section */}
          <motion.div className="md:w-4/12 backdrop-blur-sm rounded-lg p-6" variants={sectionVariants}>
            <h3 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0D7292] to-[#0A5C75] bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <p className="text-sm sm:text-base lg:text-lg flex items-center mb-3 text-gray-200">
              <FaMapMarkerAlt className="mr-2 text-lg hover:text-[#0D7292] transition-colors" aria-hidden="true" />
              7400. M.R Kiyani Road, Saddar Town Karachi, Pakistan
            </p>
            <p className="text-sm sm:text-base lg:text-lg flex items-center mb-3 text-gray-200">
              <FaPhone className="mr-2 text-lg hover:text-[#0D7292] transition-colors" aria-hidden="true" />
              +92 300-0802391
            </p>
            <p className="text-sm sm:text-base lg:text-lg flex items-center text-gray-200">
              <FaEnvelope className="mr-2 text-lg hover:text-[#0D7292] transition-colors" aria-hidden="true" />
              info@acpkhi.com
            </p>
            <motion.div className="mt-4 flex gap-3 sm:gap-4" variants={containerVariants}>
              {[
                { href: 'https://facebook.com', icon: FaFacebook, label: 'Facebook' },
                { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
                { href: 'https://linkedin.com', icon: FaLinkedin, label: 'LinkedIn' },
                { href: 'https://youtube.com', icon: FaYoutube, label: 'YouTube' },
              ].map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl sm:text-2xl hover:text-[#0D7292] hover:scale-110 transition-all duration-300"
                  variants={itemVariants}
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Row */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-200 relative inline-block group"
            variants={sectionVariants}
          >
            © 2024 Youth Ambassador Program. All rights reserved.
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#0D7292] to-[#0A5C75] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;