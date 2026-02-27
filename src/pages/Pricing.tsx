import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: "Essential Support",
    price: "45",
    period: "user/month",
    description: "Perfect for small teams needing reliable day-to-day IT assistance.",
    features: [
      "Unlimited Remote Support",
      "9am - 5:30pm Helpdesk",
      "Antivirus & Endpoint Protection",
      "Patch Management",
      "Microsoft 365 Management",
      "Next Business Day On-site"
    ],
    support: "Standard Business Hours",
    ideal: "Small businesses (5-20 users)",
    cta: "Start Essential"
  },
  {
    name: "Business Pro",
    price: "75",
    period: "user/month",
    popular: true,
    description: "Our most popular plan for growing businesses requiring proactive management.",
    features: [
      "Everything in Essential",
      "24/7 Server Monitoring",
      "Quarterly Strategy Reviews",
      "Advanced Cyber Security Suite",
      "Cloud Backup (100GB/user)",
      "4-Hour Critical Response",
      "On-site Support Included"
    ],
    support: "24/7 Critical Monitoring",
    ideal: "Growing SMEs (20-100 users)",
    cta: "Go Pro"
  },
  {
    name: "Enterprise Managed",
    price: "120",
    period: "user/month",
    description: "Full-scale IT department outsourcing for complex organisations.",
    features: [
      "Everything in Pro",
      "Dedicated Account Engineer",
      "Monthly Security Audits",
      "Unlimited On-site Support",
      "vCIO Strategic Consulting",
      "DR & Continuity Planning",
      "Custom Project Rates"
    ],
    support: "Priority 24/7 Support",
    ideal: "Large or Multi-site Enterprises",
    cta: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight mb-6">Transparent Pricing <br/><span className="text-zinc-400">No Hidden Fees.</span></h1>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">Simple, per-user monthly billing that scales with your business. All prices exclude VAT at the prevailing rate.</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-10 rounded-[2.5rem] border ${
                  plan.popular ? 'border-zinc-900 shadow-2xl shadow-zinc-200' : 'border-zinc-100'
                } flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-zinc-900">£{plan.price}</span>
                    <span className="text-zinc-400 ml-2">/{plan.period}</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 uppercase font-bold tracking-wider">+ VAT</div>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-zinc-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-zinc-100 space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Support Level</span>
                    <span className="text-zinc-900 font-bold">{plan.support}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Ideal For</span>
                    <span className="text-zinc-900 font-bold">{plan.ideal}</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.popular 
                      ? 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-lg shadow-zinc-200' 
                      : 'bg-zinc-50 text-zinc-900 hover:bg-zinc-100'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex space-x-4">
              <div className="shrink-0">
                <Info className="w-6 h-6 text-zinc-400" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-2">VAT Clarification</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">All prices quoted are subject to VAT at the standard UK rate (currently 20%). Invoices are issued monthly in advance.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="shrink-0">
                <HelpCircle className="w-6 h-6 text-zinc-400" />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-2">Custom Requirements?</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">If your business has unique requirements or more than 100 users, we can create a bespoke package tailored to your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
