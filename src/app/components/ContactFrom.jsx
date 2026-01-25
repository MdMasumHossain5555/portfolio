import React from 'react'

function ContactFrom() {
    return (
        <div className=' neon-glow-purple p-10 border border-cyan-200 rounded-3xl bg-blue-50 backdrop-blur-sm'>
            <h4 className='text-black'>Send Me a Message</h4>
            <form action="#">
                <div className="flex flex-col gap-4 mt-5 ">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col flex-1 gap-1">
                            <label htmlFor="your name" className='text-black '>Your Name <span className='text-red-500'>*</span></label>
                            <input type="text" name='your name' placeholder="Masum Hossain" className="text-black flex-1 p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                        </div>
                        <div className="flex flex-col flex-1 gap-1">
                            <label htmlFor="your email" className='text-black '>Your Email <span className='text-red-500'>*</span></label>
                            <input type="email" name='your email' placeholder="masum@example.com" className="text-black flex-1 p-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-300" />
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
