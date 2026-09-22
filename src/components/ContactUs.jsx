import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { handleError, handleSuccess } from './ErrorMessage';
import { motion, useAnimation } from 'framer-motion';

const ContactSectionLight = () => {
    const form = useRef(null);
    const [loder, setloder] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxKzclS1ZW4SIbQ5WvTwOxrPIQpjSts1Av8w_mG4PxeWxlT2U_Jhlb7AdvuffPwZWXP/exec';

    const onsubmit = (e) => {
        e.preventDefault();
        setloder(true);

        const data = new FormData(form.current);

        fetch(scriptURL, {
            method: 'POST',
            body: data
        })
        .then((response) => {
            handleSuccess("Message sent successfully! We will contact you soon.");
            form.current.reset();
            setloder(false);
        })
        .catch((error) => {
            console.error('Error!', error.message);
            handleError("Some error occurred");
            setloder(false);
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <div className="w-full flex items-center justify-center bg-[#FAFAFA] py-24 px-4 font-sans overflow-hidden">
            <div className="max-w-6xl w-full mx-auto relative">
                
                {/* Background decorative elements */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-32 -left-32 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"
                />
                
                <div className="grid lg:grid-cols-2 bg-white rounded-3xl md:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_80px_-15px_rgba(37,99,235,0.25)] transition-shadow duration-500 overflow-hidden border border-slate-100 relative z-10">
                    
                    {/* Left Side: The Form */}
                    <div className="p-8 md:p-14 lg:p-16 flex flex-col justify-center relative">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <h2 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight flex items-center gap-3">
                                Get in Touch <MessageSquare className="text-blue-600 w-8 h-8" />
                            </h2>
                            <p className="text-slate-500 text-lg">We would love to hear from you. Drop us a message!</p>
                        </motion.div>

                        <motion.form 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            name='submit-to-google-sheet' 
                            onSubmit={onsubmit} 
                            ref={form} 
                            className="space-y-6"
                        >
                            <div className="space-y-5 relative">
                                {/* Decorative line connecting inputs */}
                                <div className="absolute left-4 top-8 bottom-8 w-px bg-slate-100 -z-10"></div>

                                {['fullname', 'email', 'message'].map((fieldName, idx) => (
                                    <motion.div variants={itemVariants} key={fieldName} className="relative group">
                                        {/* Focus Indicator Dot */}
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: focusedField === fieldName ? 1 : 0 }}
                                            className="absolute -left-5 top-11 w-2.5 h-2.5 rounded-full bg-blue-600 z-10"
                                        />

                                        <label className="text-sm font-bold text-slate-700 mb-2 block capitalize">
                                            {fieldName === 'fullname' ? 'Full Name' : fieldName === 'email' ? 'Email Address' : 'Message'}
                                        </label>
                                        
                                        {fieldName === 'message' ? (
                                            <textarea
                                                rows="4"
                                                name={fieldName}
                                                required
                                                onFocus={() => setFocusedField(fieldName)}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="How can we help you?"
                                                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 resize-none text-slate-800 placeholder-slate-400 group-hover:border-blue-300"
                                            ></textarea>
                                        ) : (
                                            <input
                                                type={fieldName === 'email' ? 'email' : 'text'}
                                                name={fieldName}
                                                required
                                                onFocus={() => setFocusedField(fieldName)}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder={fieldName === 'fullname' ? 'John Doe' : 'john@example.com'}
                                                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 text-slate-800 placeholder-slate-400 group-hover:border-blue-300"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type='submit'
                                disabled={loder}
                                className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_20px_25px_-5px_rgba(37,99,235,0.4)] transition-all duration-300 flex items-center justify-center gap-3 group overflow-hidden relative"
                            >
                                {/* Button Hover Effect */}
                                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>

                                {loder ? (
                                    <div className='border-4 border-white/30 border-t-white rounded-full h-6 w-6 animate-spin'></div>
                                ) : (
                                    <>
                                        <span className="relative z-10">Send Message</span>
                                        <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </motion.button>
                        </motion.form>
                    </div>

                    {/* Right Side: Contact Info - Glassmorphism */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl border-l border-white/10 p-10 md:p-14 lg:p-16 flex flex-col justify-between relative overflow-hidden group/panel">
                        
                        {/* Intense Interactive Background Blobs for Glass Effect */}
                        <motion.div 
                            animate={{ 
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 0.8, 0.6],
                                rotate: [0, 90, 0]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-600/40 blur-[80px] pointer-events-none group-hover/panel:bg-blue-500/60 group-hover/panel:scale-125 transition-all duration-1000 z-0"
                        />
                        <motion.div 
                            animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0.7, 0.5],
                                x: [0, 50, 0],
                                y: [0, -50, 0]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] rounded-full bg-purple-600/30 blur-[100px] pointer-events-none group-hover/panel:bg-purple-500/50 group-hover/panel:-translate-y-10 transition-all duration-1000 z-0"
                        />

                        <div className="relative z-10 flex-grow flex flex-col justify-center">
                            <motion.h3 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight"
                            >
                                Contact Information
                            </motion.h3>
                            <motion.p 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-blue-200/80 text-lg mb-12 font-medium"
                            >
                                Reach out to us directly or fill out the form.
                            </motion.p>

                            <div className="space-y-10">
                                {[
                                    { icon: Phone, title: "Phone", content: "+91 9330855877", href: "tel:+919330855877" },
                                    { icon: Mail, title: "Email", content: "info@bitnextro.com", href: "mailto:info@bitnextro.com" },
                                    { icon: MapPin, title: "Address", content: "5, Park lane, Park Street\nKolkata - 700016, WB, India", href: null }
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        className="flex items-start space-x-5 group cursor-pointer"
                                    >
                                        <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative overflow-hidden backdrop-blur-md">
                                            {/* Icon pulse effect */}
                                            <div className="absolute inset-0 bg-white/10 scale-0 group-hover:animate-ping rounded-full"></div>
                                            <item.icon className="w-6 h-6 text-white relative z-10" />
                                        </div>
                                        <div className="flex flex-col pt-1">
                                            <span className="text-blue-300/60 text-xs font-bold mb-1.5 tracking-[0.2em] uppercase">{item.title}</span>
                                            {item.href ? (
                                                <a href={item.href} className="text-white font-semibold text-lg md:text-xl hover:text-blue-400 transition-colors">{item.content}</a>
                                            ) : (
                                                <span className="text-white font-semibold text-lg md:text-xl leading-relaxed whitespace-pre-line">{item.content}</span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links at Bottom */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="relative z-10 mt-16 pt-8 border-t border-white/10 flex items-center justify-between"
                        >
                            <span className="text-blue-200/60 text-sm font-semibold tracking-wider uppercase">Connect with us</span>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com/in/bitnextro-solutions-private-limited-a3409a3a5" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:scale-110 transition-all duration-300">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                                <a href="https://x.com/bitnextro" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-black hover:border-black hover:scale-110 transition-all duration-300">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                                </a>
                                <a href="https://www.instagram.com/bitnextro/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:border-transparent hover:scale-110 transition-all duration-300">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactSectionLight;