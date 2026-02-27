import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../components/Shared';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 tracking-tight mb-8">Let's Talk <span className="text-zinc-400">Technology.</span></h1>
            <p className="text-xl text-zinc-500 leading-relaxed">
              Whether you have a specific project in mind or just want to explore how we can improve your IT, our team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-8">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-zinc-900" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900">Registered Office</div>
                      <p className="text-zinc-500 text-sm mt-1">{COMPANY_DETAILS.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-zinc-900" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900">Phone</div>
                      <p className="text-zinc-500 text-sm mt-1">{COMPANY_DETAILS.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-zinc-900" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900">Email</div>
                      <p className="text-zinc-500 text-sm mt-1">{COMPANY_DETAILS.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-zinc-900" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900">Business Hours</div>
                      <p className="text-zinc-500 text-sm mt-1">{COMPANY_DETAILS.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">Our Location</h2>
                <div className="aspect-video rounded-3xl bg-zinc-100 border border-zinc-200 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm font-medium">
                    Map Placeholder: Bishop's Stortford, UK
                  </div>
                  <img 
                    src="https://picsum.photos/seed/map/800/450" 
                    alt="Map" 
                    className="w-full h-full object-cover opacity-50 grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 shadow-2xl shadow-zinc-100">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">Message Sent!</h3>
                    <p className="text-zinc-500 mb-8">Thank you for reaching out. One of our IT consultants will be in touch within 24 hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-zinc-900 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-6 py-4 rounded-xl bg-zinc-50 border-transparent focus:bg-white focus:border-zinc-900 focus:ring-0 transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Work Email</label>
                        <input
                          required
                          type="email"
                          placeholder="john@company.co.uk"
                          className="w-full px-6 py-4 rounded-xl bg-zinc-50 border-transparent focus:bg-white focus:border-zinc-900 focus:ring-0 transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Company Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Your Business Ltd"
                        className="w-full px-6 py-4 rounded-xl bg-zinc-50 border-transparent focus:bg-white focus:border-zinc-900 focus:ring-0 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">How can we help?</label>
                      <select className="w-full px-6 py-4 rounded-xl bg-zinc-50 border-transparent focus:bg-white focus:border-zinc-900 focus:ring-0 transition-all outline-none appearance-none">
                        <option>Managed IT Support</option>
                        <option>Cyber Security Audit</option>
                        <option>Cloud Migration</option>
                        <option>IT Consultancy</option>
                        <option>Other Enquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Message</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-6 py-4 rounded-xl bg-zinc-50 border-transparent focus:bg-white focus:border-zinc-900 focus:ring-0 transition-all outline-none"
                      ></textarea>
                    </div>
                    <div className="flex items-start space-x-3">
                      <input
                        required
                        type="checkbox"
                        className="mt-1 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                      />
                      <span className="text-xs text-zinc-500 leading-relaxed">
                        I consent to Wickham Hall processing my data in accordance with their Privacy Policy for the purpose of responding to this enquiry.
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-5 rounded-xl bg-zinc-900 text-white font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200 flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
