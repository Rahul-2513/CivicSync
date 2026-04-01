import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pink-100/10 border-t border-slate-300 text-gray-600">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-black">
            Civic<span className="text-blue-800">Sync</span>
          </h1>

          <p className="mt-4 text-sm leading-relaxed">
            AI-powered civic issue reporting and resolution platform 
            helping citizens and authorities build smarter cities 
            through transparency and accountability.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-blue-900 font-semibold mb-4">
            Resources
          </h2>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-700 cursor-pointer">Report Map</li>
            <li className="hover:text-blue-700 cursor-pointer">City Dashboard</li>
            <li className="hover:text-blue-700 cursor-pointer">Issue Tracker</li>
            <li className="hover:text-blue-700 cursor-pointer">Support Center</li>
          </ul>
        </div>

        {/* Government */}
        <div>
          <h2 className="text-blue-900 font-semibold mb-4">
            Government
          </h2>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-700 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-700 cursor-pointer">Terms of Service</li>
            <li className="hover:text-blue-700 cursor-pointer">Data Policy</li>
            <li className="hover:text-blue-700 cursor-pointer">Accessibility</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-blue-900 font-semibold mb-4">
            Contact
          </h2>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} />
              support@civicsync.gov
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} />
              +91 XXXXX XXXXX
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} />
              Smart Governance Center
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} CivicSync Platform. All rights reserved.
          </p>

          <p className="text-gray-500">
            Built for Smart Governance
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;