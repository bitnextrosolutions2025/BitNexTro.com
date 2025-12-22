import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { handleError, handleSuccess } from './ErrorMessage';
const ContactSectionLight = () => {
    const form = useRef(null);
    const [loder,setloder]=useState(false)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyTMstU-QSoR-copgHz3ipUrfsKz00o6VJU_dQV0RI7tjbLimY71GIKPazrLZZuIay3/exec';
    const onsubmit = (e) => {
        e.preventDefault();
        setloder(true)
        fetch(scriptURL, { method: 'POST', body: new FormData(form.current) })
            .then((response) => {
                handleSuccess("Message sent successfully! we contact you soon.")
                form.current.reset();
                setloder(false)
            })
            .catch((error) => {console.error('Error!', error.message); handleError("Some error is occurred")});
    };
    return (
        <div className="w-full min-h-screen  flex items-center justify-center bg-sky-400 py-20 px-4">
            <div className="max-w-5xl w-full mx-auto">

                <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 bg-white rounded-4xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden" style={{ borderBottomRightRadius: "164px", borderTopLeftRadius: "100px" }}>



                    {/* Right Side: The Form */}
                    <div className="p-4 pl-7 md:p-12 bg-white" style={{ padding: "30px" }}>
                        <h2 className="text-3xl font-bold text-gray-800 mb-1">Get in Touch</h2>
                        <p className="text-gray-500 mb-2">We would love to hear from you!</p>
                        <form name='submit-to-google-sheet' onSubmit={onsubmit} ref={form} >
                            <div className="space-y-2">
                                <div>
                                    <label className="text-sm font-medium text-gray-600 mb-1 block">Full Name</label>
                                    <input
                                        type="text"
                                        name='fullname'
                                        required
                                        className="w-full px-5 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-600 mb-1 block">Email Address</label>
                                    <input
                                        type="email"
                                        name='email'
                                        required
                                        className="w-full px-5 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-600 mb-1 block">Message</label>
                                    <textarea
                                        rows="4"
                                        name='message'
                                        required
                                        className="w-full px-5 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type='submit'
                                    className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    {loder?<div className='border-4 border-dashed rounded-full border-[#001bec] h-10 w-10 animate-spin'>

                                    </div>:<>Send Message
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-linear-to-br from-[#05c45e] to-[#137644] p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
                        {/* Background Shapes */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-blue-800 to-gray-900 mb-4">Contact Information</h3>
                            <p className="text-gray-900 text-xl mb-8">Say something to start a live chat!</p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 text-gray-900 font-bold text-xl">
                                    <Phone className="w-6 h-6" />
                                    <span>+91 9330855877</span>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-900 font-bold  text-xl">
                                    <Mail className="w-6 h-6" />
                                    <span>bitnextro@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-900 font-bold  text-xl">
                                    <MapPin className="w-6 h-6" />
                                    <span>5, park lane kol 16, park street </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSectionLight;