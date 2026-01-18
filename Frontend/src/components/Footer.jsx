import React from "react";
import { Facebook, Instagram, Youtube, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-3">About</h3>
          <p className="text-sm text-green-200 leading-6">
            A smart agriculture platform that helps farmers with 
            weather, market rates, news, crop guides and Krishi Kendra tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-green-200 text-sm">
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-3">Farmer Support</h3>
          <div className="flex items-center gap-2 text-green-100">
            <Phone size={18} />
            <p className="font-semibold text-white">📞 +91 98765 43210</p>
          </div>
          <p className="text-green-300 text-sm mt-1">
            (Available 9AM – 6PM, Mon–Sat)
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Facebook className="hover:text-green-300 cursor-pointer" />
            <Instagram className="hover:text-green-300 cursor-pointer" />
            <Youtube className="hover:text-green-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-green-700 pt-4 text-center text-green-300 text-sm">
        © {new Date().getFullYear()} Krishi Smart Portal • All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
