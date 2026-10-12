import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Briefcase, Cpu, ArrowRight, CheckCircle2, Globe, Users, Zap, Sparkles, Rocket, Heart, Star, Send } from 'lucide-react';

export default function Career() {
  const GOOGLE_FORM_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSeTbeJ0pxg5WvL3IP0Sw1mPWr91sBsoRKEkJWLqZapUS1_WkQ/viewform?usp=dialog';

  const positions = [
    {
      title: 'Sales Internship / Full time',
      icon: <Briefcase className="w-8 h-8 text-emerald-500" />,
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
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
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
      icon: <Rocket className="w-7 h-7 text-indigo-500" />,
      title: 'Fast Growth',
      desc: 'Accelerate your career with hands-on learning and rapid growth opportunities.',
    },
    {
      icon: <Heart className="w-7 h-7 text-rose-500" />,
      title: 'Great Culture',
      desc: 'Join a team that values creativity, inclusivity, and work-life balance.',
    },
    {
      icon: <Star className="w-7 h-7 text-amber-500" />,
      title: 'Cutting-Edge Tech',
      desc: 'Work with the latest technologies in cybersecurity, cloud, and AI.',
    },
    {
      icon: <Sparkles className="w-7 h-7 text-purple-500" />,
      title: 'Innovation First',
      desc: 'Your ideas matter. We empower every team member to innovate and lead.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-500/30 overflow-hidden">
      <Helmet>
        <title>Careers at BitNexTro | Join Our Innovative IT & Tech Team</title>
        <meta
          name="description"
          content="Explore career and internship opportunities at BitNexTro Solutions. Join our dynamic team in Kolkata and remote roles in IT, cybersecurity, and cloud solutions."
        />
      </Helmet>

      {/* ── Background Ambient Glows (Matches About & Contact pages) ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-700/20 blur-[130px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[140px]" />
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
      </div>

      {/* ── Main Content Container ── */}
      <div className="relative z-10 pt-20 pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 mt-2.5 max-w-7xl mx-auto">
        {/* ── Hero Section (Loads Snappily on Mount) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 font-medium text-sm mb-6 hover:bg-green-500/20 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Hiring Now: Applications Open
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-tight">
            Build the Future at <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              BitNextro Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
            We are looking for curious minds and bold thinkers. Join our team to
            shape the future of IT, cybersecurity, and digital innovation.
          </p>
        </motion.div>

        {/* ── "Why Join Us" Section ── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Why Join{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                BitNextro
              </span>
              ?
            </h2>
            <p className="text-slate-500 text-lg">
              More than just a job — it's a launchpad for your career.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyJoinUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-7 text-center hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Open Positions ── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Open{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Positions
              </span>
            </h2>
            <p className="text-slate-500 text-lg">
              Find the role that matches your passion and skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 hover:border-indigo-500/30 rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* Gradient accent line at top */}
                <div
                  className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${job.gradient} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
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

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {job.title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {job.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {job.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm md:text-base text-slate-700"
                      >
                        <CheckCircle2
                          className={`w-5 h-5 text-emerald-500 shrink-0`}
                        />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 py-4 px-6 rounded-2xl bg-slate-50 hover:bg-indigo-600 border border-slate-200 text-slate-900 font-bold text-base md:text-lg transition-all duration-300 group-hover:border-indigo-600 group-hover:text-white group-hover:bg-indigo-600 shadow-sm"
                >
                  Apply for {job.title.split(' ')[0]}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Culture / CTA Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative py-8 flex justify-center"
        >
          {/* Card */}
          <div className="relative w-full max-w-4xl bg-white/70 backdrop-blur-2xl border border-slate-200/80 rounded-[2.5rem] p-8 md:p-14 shadow-xl overflow-hidden">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
                Ready to Start Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500">
                  Journey?
                </span>
              </h2>

              <p className="text-slate-600 max-w-xl mx-auto mb-8 text-base md:text-lg font-light leading-relaxed">
                Don't miss this opportunity to work with industry experts and
                kickstart your career in technology.
              </p>

              {/* Perks */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {perks.map((perk, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-4 py-2 bg-white shadow-sm border border-slate-100 rounded-full text-sm font-medium text-slate-700"
                  >
                    <span className="text-indigo-500">{perk.icon}</span>
                    {perk.label}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 bg-[length:200%_100%] hover:bg-[100%_0] text-white font-bold text-base md:text-lg rounded-full transition-all duration-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105"
                >
                  <Send className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  Apply Now via Google Form
                </a>

                <p className="mt-4 text-xs md:text-sm text-slate-400 font-light">
                  * Applications are reviewed on a rolling basis.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
