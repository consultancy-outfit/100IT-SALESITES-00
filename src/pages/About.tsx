import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, ShieldCheck, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 tracking-tight mb-8">Built on <span className="text-zinc-400 italic">Trust & Excellence.</span></h1>
              <p className="text-xl text-zinc-500 leading-relaxed mb-8">
                Founded in Bishop's Stortford, Wickham Hall has grown from a local support provider into a premier UK IT consultancy, serving businesses across London and the Home Counties.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold text-zinc-900">15+</div>
                  <div className="text-sm text-zinc-400 uppercase font-bold tracking-wider">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-zinc-200"></div>
                <div>
                  <div className="text-3xl font-bold text-zinc-900">250+</div>
                  <div className="text-sm text-zinc-400 uppercase font-bold tracking-wider">Active Clients</div>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-zinc-200">
                <img
                  src="https://picsum.photos/seed/team-meeting/800/1000"
                  alt="Wickham Hall Team"
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[2.5rem] bg-zinc-900 text-white">
              <Target className="w-12 h-12 text-emerald-400 mb-8" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                To provide British businesses with the technological foundation they need to thrive in a digital-first world, delivering expert IT management with a personal, local touch.
              </p>
            </div>
            <div className="p-12 rounded-[2.5rem] bg-zinc-50 border border-zinc-100">
              <Eye className="w-12 h-12 text-zinc-900 mb-8" />
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Vision</h2>
              <p className="text-zinc-500 text-lg leading-relaxed">
                To be the most trusted IT partner in the UK, recognised for our technical innovation, uncompromising security standards, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Core Values</h2>
            <p className="text-zinc-500">The principles that guide every interaction and project.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Integrity First", desc: "We provide honest, transparent advice, even when it's not the easiest path." },
              { icon: <Award className="w-8 h-8" />, title: "Technical Excellence", desc: "We stay at the forefront of technology to deliver the best solutions." },
              { icon: <Heart className="w-8 h-8" />, title: "Client Focused", desc: "Your business goals are the primary driver for all our technical decisions." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100">
                <div className="text-zinc-900 mb-6">{v.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{v.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 mb-16">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Robert Wickham", role: "Managing Director", bio: "25 years in enterprise IT architecture and strategic consulting." },
              { name: "Eleanor Hall", role: "Technical Director", bio: "Expert in cyber security and cloud infrastructure management." },
              { name: "David Miller", role: "Operations Manager", bio: "Dedicated to delivering exceptional service quality and client satisfaction." }
            ].map((leader, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-100 mb-6">
                  <img
                    src={`https://picsum.photos/seed/leader-${i}/600/800`}
                    alt={leader.name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">{leader.name}</h3>
                <p className="text-emerald-600 font-medium mb-4">{leader.role}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="w-16 h-16 text-emerald-400 mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-6">Our Commitment to GDPR</h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            As a UK-based IT provider, we take data protection seriously. We are fully compliant with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We ensure all client data is handled with the highest levels of security and confidentiality.
          </p>
          <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-full border border-white/20 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span>ICO Registered Data Controller</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
