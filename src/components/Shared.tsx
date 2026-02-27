import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, Shield, Cloud, BarChart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const COMPANY_DETAILS = {
  name: "Wickham Hall",
  address: "Wickham Hall, Hadham Road, Bishop's Stortford, Hertfordshire, CM23 1JG, United Kingdom",
  crn: "09876543",
  phone: "+44 (0) 1279 500000",
  email: "info@wickhamhall.co.uk",
  hours: "Mon - Fri: 08:30 - 18:00"
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900">WICKHAM HALL</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-zinc-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-zinc-100 px-4 pt-2 pb-6 space-y-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900 uppercase">Wickham Hall</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Empowering British businesses through innovative IT solutions and strategic technology management.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-sm text-zinc-500 hover:text-zinc-900">Managed IT Support</Link></li>
              <li><Link to="/services" className="text-sm text-zinc-500 hover:text-zinc-900">Cyber Security</Link></li>
              <li><Link to="/services" className="text-sm text-zinc-500 hover:text-zinc-900">Cloud Migration</Link></li>
              <li><Link to="/services" className="text-sm text-zinc-500 hover:text-zinc-900">IT Consultancy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-zinc-500 hover:text-zinc-900">About Us</Link></li>
              <li><Link to="/pricing" className="text-sm text-zinc-500 hover:text-zinc-900">Pricing</Link></li>
              <li><Link to="/terms" className="text-sm text-zinc-500 hover:text-zinc-900">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-sm text-zinc-500 hover:text-zinc-900">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-zinc-400 shrink-0" />
                <span className="text-sm text-zinc-500">{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-zinc-400 shrink-0" />
                <span className="text-sm text-zinc-500">{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-zinc-400 shrink-0" />
                <span className="text-sm text-zinc-500">{COMPANY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-zinc-400 space-y-1 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.</p>
              <p>Company Registration Number: {COMPANY_DETAILS.crn} | Registered in England & Wales</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-xs text-zinc-400 hover:text-zinc-600">Privacy</Link>
              <Link to="/terms" className="text-xs text-zinc-400 hover:text-zinc-600">Terms</Link>
              <Link to="/cookies" className="text-xs text-zinc-400 hover:text-zinc-600">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
