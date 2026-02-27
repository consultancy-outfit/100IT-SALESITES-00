import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Users, Globe, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Trusted UK IT Partner</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-6">
                Strategic IT Solutions for <span className="text-zinc-400">British Enterprise.</span>
              </h1>
              <p className="text-xl text-zinc-500 leading-relaxed mb-10 max-w-lg">
                Wickham Hall delivers enterprise-grade managed IT, cyber security, and cloud infrastructure tailored for the UK's most ambitious businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 group"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zinc-200 text-zinc-600 font-medium hover:bg-zinc-50 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 relative">
                <img
                  src="https://picsum.photos/seed/it-office/1200/1200"
                  alt="Modern IT Office"
                  className="object-cover w-full h-full opacity-90 mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/20 to-transparent"></div>
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 max-w-[200px]">
                <div className="text-3xl font-bold text-zinc-900 mb-1">99.9%</div>
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Uptime Guarantee for Managed Clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-zinc-100 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-8">Supporting Industries Across the UK</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {['Finance', 'Healthcare', 'Legal', 'Manufacturing', 'Retail'].map((industry) => (
              <span key={industry} className="text-xl font-bold text-zinc-900">{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-6">Why British Businesses Choose Wickham Hall</h2>
            <p className="text-zinc-500 text-lg">We combine local expertise with global technology standards to provide a seamless IT experience.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "GDPR Compliant",
                desc: "Full data sovereignty and compliance with UK data protection regulations."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Rapid Response",
                desc: "Average 15-minute response time for critical infrastructure issues."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Dedicated Support",
                desc: "Your own named account manager and lead engineer for consistent service."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-zinc-100 hover:border-zinc-200 transition-all hover:shadow-lg hover:shadow-zinc-100 group">
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{benefit.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">Case Study</div>
              <h2 className="text-4xl font-bold tracking-tight mb-8">Optimising Infrastructure for London's Leading Law Firm</h2>
              <div className="space-y-8 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">£120,000 Annual Savings</h4>
                    <p className="text-zinc-400">Reduced operational costs by migrating legacy systems to a hybrid cloud environment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Zero Security Breaches</h4>
                    <p className="text-zinc-400">Implemented 24/7 SOC monitoring and advanced endpoint protection.</p>
                  </div>
                </div>
              </div>
              <Link to="/services" className="inline-flex items-center text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
                View our methodology <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://picsum.photos/seed/server-room/800/600"
                  alt="Server Room"
                  className="object-cover w-full h-full opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-16">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Wickham Hall transformed our IT from a bottleneck into a competitive advantage. Their UK-based support team is exceptional.",
                author: "James Harrington",
                role: "CTO, Sterling Logistics Ltd"
              },
              {
                quote: "The level of security and peace of mind we've had since switching to their managed services is worth every penny.",
                author: "Sarah Jenkins",
                role: "Operations Director, Thames Valley Legal"
              }
            ].map((t, i) => (
              <div key={i} className="p-10 rounded-3xl bg-zinc-50 border border-zinc-100">
                <p className="text-xl text-zinc-700 italic mb-8">"{t.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-200"></div>
                  <div>
                    <div className="font-bold text-zinc-900">{t.author}</div>
                    <div className="text-sm text-zinc-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">Ready to Secure Your Digital Future?</h2>
          <p className="text-xl text-zinc-500 mb-10">Join hundreds of UK businesses that trust Wickham Hall for their technology needs.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-zinc-900 text-white font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
          >
            Get a Free IT Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
