import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, ArrowRight, CheckCircle2, Globe, Users, Zap, Sparkles, Rocket, Heart, Star, Send } from 'lucide-react';

// ── Animation variants ────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};


export default function Career() {
  const GOOGLE_FORM_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSeTbeJ0pxg5WvL3IP0Sw1mPWr91sBsoRKEkJWLqZapUS1_WkQ/viewform?usp=dialog';

  const positions = [
    {
      title: 'Sales Internship / Full time',
      icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
      type: 'Internship / Full time',
      location: 'Remote / Hybrid',
      description:
        'Drive business growth, build client relationships, and develop your sales expertise in the competitive tech industry.',
      requirements: [
        'Strong communication skills',
        'Lead generation & outreach',
        'Client relationship management',
        'Goal-oriented mindset',
      ],
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Technical Support Internship / Full time',
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      type: 'Internship / Full time',
      location: 'Remote / Hybrid',
      description:
        'Provide exceptional technical assistance, troubleshoot software issues, and ensure customer satisfaction.',
      requirements: [
        'Basic IT & networking knowledge',
        'Troubleshooting software issues',
        'Customer service skills',
        'Documentation & reporting',
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-500',
    },
  ];

  const perks = [
    { icon: <Zap className="w-5 h-5" />, label: 'High Impact Work' },
    { icon: <Users className="w-5 h-5" />, label: 'Collaborative Team' },
    { icon: <Globe className="w-5 h-5" />, label: 'Remote Options' },
  ];

  const whyJoinUs = [
    {
      icon: <Rocket className="w-7 h-7 text-indigo-400" />,
      title: 'Fast Growth',
      desc: 'Accelerate your career with hands-on learning and rapid growth opportunities.',
    },
    {
      icon: <Heart className="w-7 h-7 text-rose-400" />,
      title: 'Great Culture',
      desc: 'Join a team that values creativity, inclusivity, and work-life balance.',
    },
    {
      icon: <Star className="w-7 h-7 text-amber-400" />,
      title: 'Cutting-Edge Tech',
      desc: 'Work with the latest technologies in cybersecurity, cloud, and AI.',
    },
    {
      icon: <Sparkles className="w-7 h-7 text-purple-400" />,
      title: 'Innovation First',
      desc: 'Your ideas matter. We empower every team member to innovate and lead.',
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-500/30 overflow-hidden"
    >
      {/* ── Background Effects ────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/15 rounded-full blur-[130px]"
        />
      </div>

      {/* ── Page Content ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-36">
        {/* ── Hero Section ───────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-28"
        >
          <motion.div
            variants={fadeScale}
            custom={0.1}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 font-medium text-sm mb-8 hover:bg-green-500/20 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Hiring Now: Applications Open
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={0.2}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
          >
            Build the Future at <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              BitNextro Solutions
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.4}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light"
          >
            We are looking for curious minds and bold thinkers. Join our team to
            shape the future of IT, cybersecurity, and digital innovation.
          </motion.p>

          {/* ── Scroll indicator ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-14 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-400 uppercase tracking-widest">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center pt-2"
            >
              <motion.div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── "Why Join Us" Section ──────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="mb-28"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Why Join{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              BitNextro
            </span>
            ?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className="text-slate-500 text-center max-w-xl mx-auto mb-14 text-lg"
          >
            More than just a job — it's a launchpad for your career.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyJoinUs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeScale}
                custom={i * 0.1}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-7 text-center hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Open Positions ─────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="mb-28"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Open{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              Positions
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.1}
            className="text-slate-500 text-center max-w-xl mx-auto mb-14 text-lg"
          >
            Find the role that matches your passion and skills.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10">
            {positions.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index * 0.2}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative bg-white/60 backdrop-blur-2xl border border-slate-200 hover:border-indigo-500/30 rounded-3xl p-8 transition-colors duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* Gradient accent line at top */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${job.gradient} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="flex flex-col sm:flex-row items-start justify-between mb-8 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                    {job.icon}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-slate-700 tracking-wide">
                      {job.type}
                    </span>
                    <span className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-slate-700 tracking-wide">
                      {job.location}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {job.title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  {job.description}
                </p>

                <div className="mb-10">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {job.requirements.map((req, i) => (
                      <motion.li
                        key={i}
                        variants={slideInLeft}
                        custom={0.3 + i * 0.1}
                        className="flex items-center gap-3 text-base text-slate-700"
                      >
                        <CheckCircle2
                          className={`w-5 h-5 text-${job.color}-500 shrink-0`}
                        />
                        {req}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 py-4 px-6 rounded-2xl bg-slate-50 hover:bg-indigo-600 border border-slate-200 text-slate-900 font-bold text-lg transition-all duration-300 group-hover:border-indigo-600 group-hover:text-white group-hover:bg-indigo-600"
                >
                  Apply for {job.title.split(' ')[0]}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Culture / CTA Section ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative py-10 flex justify-center"
        >
          {/* Animated decorative orbs for light background */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none"
          />

          {/* Premium Glassmorphism Card - Light Theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative w-full max-w-4xl bg-white/60 backdrop-blur-2xl border border-slate-200/60 rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            {/* Inner subtle glow for the card */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent pointer-events-none opacity-50" />

            <div className="relative z-10">
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center text-slate-900 tracking-tight"
              >
                Ready to Start Your
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 ml-2 sm:ml-0">
                  Journey?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-slate-600 max-w-xl mx-auto mb-10 text-lg md:text-xl font-light text-center leading-relaxed"
              >
                Don't miss this opportunity to work with industry experts and
                kickstart your career in technology.
              </motion.p>

              {/* Perks */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                {perks.map((perk, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-2.5 px-5 py-2.5 bg-white shadow-sm border border-slate-100 rounded-full text-sm font-medium text-slate-700"
                  >
                    <span className="text-indigo-500">{perk.icon}</span>
                    {perk.label}
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 bg-[length:200%_100%] hover:bg-[100%_0] text-white font-bold text-lg rounded-full transition-all duration-500 overflow-hidden shadow-[0_10px_40px_-10px_rgba(99,102,241,0.6)] hover:shadow-[0_15px_60px_-15px_rgba(99,102,241,0.8)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                    Apply Now via Google Form
                  </span>
                </motion.a>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-6 text-sm text-slate-500 font-light"
                >
                  * Applications are reviewed on a rolling basis.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
