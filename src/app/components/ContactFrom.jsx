'use client'
import React from 'react'
import Swal from 'sweetalert2'
import { useState } from 'react';
import { MotionWrapper } from './motion/MotionWrapper';

function ContactFrom() {
    const [isloading, setIsLoading] = useState(false);
    const HandleSubmite = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const form = e.target;
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name.value,
                    email: form.email.value,
                    subject: form.subject.value,
                    message: form.message.value,
                }),
            });
            if (res.ok) {
                setIsLoading(false);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sended Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            } else {
                alert("Something went wrong");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }


    };
    let d;
    for (let i = 1; i < 5; i++) {
        d =i;
    }
    return (
        <MotionWrapper type='right'>
        <div className=' neon-glow-purple p-10 border border-cyan-200 rounded-3xl bg-blue-50 backdrop-blur-sm'>
            <h4 className='text-black'>Send Me a Message</h4>
            <form onSubmit={HandleSubmite}>
                <div className="flex flex-col gap-4 mt-5 ">
                    <div className="flex flex-col md:flex-row gap-4">
                        <MotionWrapper type='right' delay={d * 0.2} className="flex flex-col flex-1 gap-1">
                            <label htmlFor="name" className='text-black '>Your Name <span className='text-red-500'>*</span></label>
                            <input type="text" name='name' placeholder="Masum Hossain" autoComplete='name' required className="text-black flex-1 p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                        </MotionWrapper>
                        <MotionWrapper type='right' delay={d * 0.2} className="flex flex-col flex-1 gap-1">
                            <label htmlFor="email" className='text-black '>Your Email <span className='text-red-500'>*</span></label>
                            <input type="email" name='email' placeholder="masum@example.com" autoComplete='email' required className="text-black flex-1 p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                        </MotionWrapper>
                    </div>
                    <MotionWrapper type='right' delay={d * 0.2} className="flex flex-col flex-1 gap-1">
                        <label htmlFor="subject" className='text-black '>Subject <span className='text-red-500'>*</span></label>
                        <input type="text" name='subject' placeholder="How can I help you?" required className="text-black w-full p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                    </MotionWrapper>
                    <MotionWrapper type='right' delay={d * 0.2} className="flex flex-col flex-1 gap-1">
                        <label htmlFor="message" className='text-black '>Your Message <span className='text-red-500'>*</span></label>
                        <textarea rows="5" name='message' placeholder="Tell me about your project or say Hi!" required className="text-black w-full p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300"></textarea>
                    </MotionWrapper>
                    <button type="submit" className={`btn-primary ${isloading ? 'opacity-50 cursor-not-allowed' : ''} neon-glow px-6 py-3 rounded-md hover:bg-secondary hover:text-primary transition-colors duration-300 w-full`}>{isloading ? 'Sending...' : 'Send Message'}</button>
                </div>
            </form>

        </div>
        </MotionWrapper>
    )
}

export default ContactFrom
