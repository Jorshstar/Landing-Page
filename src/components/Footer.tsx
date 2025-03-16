import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  companyName?: string;
  companyLogo?: string;
  navigationLinks?: Array<{ label: string; href: string }>;
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  socialLinks?: Array<{ platform: string; href: string }>;
  copyrightYear?: number;
}

const Footer = ({
  companyName = "Real Estate Platform",
  companyLogo = "",
  navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Listings", href: "/listings" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  contactInfo = {
    email: "info@realestate.com",
    phone: "+1 (555) 123-4567",
    address: "123 Property Lane, Real Estate City, RE 12345",
  },
  socialLinks = [
    { platform: "Facebook", href: "https://facebook.com" },
    { platform: "Instagram", href: "https://instagram.com" },
    { platform: "Twitter", href: "https://twitter.com" },
  ],
  copyrightYear = new Date().getFullYear(),
}: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{companyName}</h3>
            {companyLogo && (
              <img
                src={companyLogo}
                alt={`${companyName} logo`}
                className="h-12 mb-4"
              />
            )}
            <p className="text-slate-300 mb-4">
              Your trusted partner in finding the perfect property. We connect
              buyers with their dream homes and help sellers get the best value.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.email && (
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-slate-400" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              )}
              {contactInfo.phone && (
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-slate-400" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              )}
              {contactInfo.address && (
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-slate-400 mt-1" />
                  <span className="text-slate-300">{contactInfo.address}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for the latest property listings and
              market updates.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
                aria-label={link.platform}
              >
                {link.platform === "Facebook" && <Facebook size={24} />}
                {link.platform === "Instagram" && <Instagram size={24} />}
                {link.platform === "Twitter" && <Twitter size={24} />}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-slate-400 text-sm">
            <p>
              &copy; {copyrightYear} {companyName}. All rights reserved.
            </p>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-4 text-center md:text-right">
          <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-slate-400">
            {navigationLinks.slice(4).map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
