import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Cpu, Headphones, Search, Code, Lock, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Managed IT Support",
    overview: "Comprehensive 24/7 monitoring and helpdesk support for your entire business infrastructure.",
    target: "SMEs and Mid-market enterprises needing reliable uptime.",
    process: ["Audit", "Onboarding", "24/7 Monitoring", "Proactive Maintenance"],
    benefits: ["Reduced downtime", "Fixed monthly costs", "Expert helpdesk"],
    price: "From £45 / user / month"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Cyber Security",
    overview: "Advanced threat protection, SOC monitoring, and employee security awareness training.",
    target: "Businesses handling sensitive data or requiring high compliance.",
    process: ["Risk Assessment", "Implementation", "Continuous Monitoring", "Incident Response"],
    benefits: ["Data protection", "Regulatory compliance", "Peace of mind"],
    price: "From £250 / month"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Migration",
    overview: "Seamless transition to Azure, AWS, or Private Cloud environments with zero data loss.",
    target: "Companies looking to modernise legacy server infrastructure.",
    process: ["Discovery", "Strategy", "Migration", "Optimisation"],
    benefits: ["Scalability", "Remote access", "Cost efficiency"],
    price: "From £1,500 / project"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "IT Consultancy",
    overview: "Strategic technology roadmaps aligned with your long-term business objectives.",
    target: "Leadership teams planning digital transformation.",
    process: ["Analysis", "Strategy Design", "Implementation Oversight", "Review"],
    benefits: ["Strategic alignment", "Future-proofing", "ROI focus"],
    price: "From £950 / day"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Disaster Recovery",
    overview: "Robust backup solutions and business continuity planning for any scenario.",
    target: "Mission-critical operations requiring minimal RTO/RPO.",
    process: ["BIA Analysis", "Solution Design", "Testing", "Maintenance"],
    benefits: ["Business resilience", "Data integrity", "Compliance"],
    price: "From £150 / month"
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Network Infrastructure",
    overview: "Design and implementation of secure, high-speed wired and wireless networks.",
    target: "Offices and facilities requiring high-performance connectivity.",
    process: ["Site Survey", "Design", "Installation", "Certification"],
    benefits: ["High performance", "Secure access", "Reliability"],
    price: "Custom Quote"
  }
];

const Services = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mb-6">Expert IT Services <br/><span className="text-zinc-400">Tailored for Growth.</span></h1>
            <p className="text-xl text-zinc-500">From day-to-day support to complex infrastructure projects, we provide the technical foundation your business needs to excel.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid lg:grid-cols-12 gap-8 p-8 md:p-12 rounded-[2rem] border border-zinc-100 hover:border-zinc-200 hover:shadow-2xl hover:shadow-zinc-100 transition-all"
              >
                <div className="lg:col-span-4">
                  <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">{service.title}</h2>
                  <p className="text-zinc-500 leading-relaxed mb-6">{service.overview}</p>
                  <div className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Starting Price</div>
                  <div className="text-2xl font-bold text-zinc-900 mt-1">{service.price}</div>
                </div>

                <div className="lg:col-span-4 space-y-8">
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Target Audience</h4>
                    <p className="text-zinc-600 font-medium">{service.target}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-zinc-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Our Process</h4>
                  <div className="relative space-y-6">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-500">
                          0{i + 1}
                        </div>
                        <span className="text-zinc-900 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="mt-10 inline-flex w-full items-center justify-center px-6 py-4 rounded-xl bg-zinc-50 text-zinc-900 font-bold hover:bg-zinc-900 hover:text-white transition-all"
                  >
                    Discuss this service
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Not sure which service you need?</h2>
          <p className="text-zinc-400 text-lg mb-10">Our consultants are ready to help you navigate your technology requirements with a free initial assessment.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-zinc-900 font-bold hover:bg-zinc-100 transition-all"
          >
            Request a Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
