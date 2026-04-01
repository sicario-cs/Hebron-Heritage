import { motion } from "motion/react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone 
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    explore: [
      "Interactive Map",
      "AR Experience",
      "VR Tour",
      "Smart Market",
    ],
    about: [
      "Our Mission",
      "Heritage Protection",
      "Technology",
      "Partners",
    ],
    support: [
      "Contact Us",
      "FAQs",
      "Support Center",
      "Feedback",
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
  ];

  return (
    <footer className="bg-stone-950 border-t border-amber-900/20 py-16 px-4">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="size-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SH</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-xl">Smart Heritage</h3>
                <p className="text-amber-500 text-sm">Hebron Old City</p>
              </div>
            </motion.div>
            <p className="text-stone-400 mb-6 max-w-md">
              Transforming the ancient Old City of Hebron into a cutting-edge smart
              heritage destination, where history, culture, and technology converge
              to create unforgettable experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-stone-400 text-sm">
                <MapPin size={16} className="text-amber-500" />
                <span>Old City, Hebron, Palestine</span>
              </div>
              <div className="flex items-center gap-3 text-stone-400 text-sm">
                <Phone size={16} className="text-amber-500" />
                <span>+970 2 xxx xxxx</span>
              </div>
              <div className="flex items-center gap-3 text-stone-400 text-sm">
                <Mail size={16} className="text-amber-500" />
                <span>info@smartheritagehebron.ps</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-stone-400 hover:text-amber-500 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-stone-500 text-sm text-center md:text-left"
          >
            © 2026 Smart Heritage Hebron. All rights reserved. Preserving the past,
            building the future.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`text-stone-500 ${social.color} transition-colors`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 text-amber-500/50 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500/50" />
            <span>✦</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
