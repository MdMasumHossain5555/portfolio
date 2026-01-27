'use client'
import React from 'react'

function ContactFrom() {
    const HandleSubmite = async (e) => {
        e.preventDefault();
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
                alert("Message sent!");
                form.reset();
            } else {
                alert("Something went wrong");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }


    };
    return (
        <div className=' neon-glow-purple p-10 border border-cyan-200 rounded-3xl bg-blue-50 backdrop-blur-sm'>
            <h4 className='text-black'>Send Me a Message</h4>
            <form onSubmit={HandleSubmite}>
                <div className="flex flex-col gap-4 mt-5 ">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col flex-1 gap-1">
                            <label htmlFor="name" className='text-black '>Your Name <span className='text-red-500'>*</span></label>
                            <input type="text" name='name' placeholder="Masum Hossain" autoComplete='name' className="text-black flex-1 p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                        </div>
                        <div className="flex flex-col flex-1 gap-1">
                            <label htmlFor="email" className='text-black '>Your Email <span className='text-red-500'>*</span></label>
                            <input type="email" name='email' placeholder="masum@example.com" autoComplete='email' className="text-black flex-1 p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                        <label htmlFor="subject" className='text-black '>Subject <span className='text-red-500'>*</span></label>
                        <input type="text" name='subject' placeholder="How can I help you?" className="text-black w-full p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                        <label htmlFor="message" className='text-black '>Your Message <span className='text-red-500'>*</span></label>
                        <textarea rows="5" name='message' placeholder="Tell me about your project of say Hi!" className="text-black w-full p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300"></textarea>
                    </div>
                    <button type="submit" className="btn-primary neon-glow px-6 py-3 rounded-md hover:bg-secondary hover:text-primary transition-colors duration-300 w-full">Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactFrom
