import React from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

function ContactAddress() {
    const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mdmasumhossain1712@gmail.com',
    href: 'mailto:mdmasumhossain1712@gmail.com',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1772423200',
    href: 'tel:+8801772423200',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: '#',
    gradient: 'from-green-500 to-teal-500',
  },
];
  return (
    <div >
      <section className="space-y-5">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-center gap-3 p-4 rounded-3xl bg-gradient-to-r from-blue-300 to-cyan-300 text-black neon-glow">
            <div className={`bg-gradient-to-br ${info.gradient} p-3 rounded-full`}>
                <info.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold">{info.label}</p>
              <a href={info.href} className="text-sm hover:underline">
                {info.value}
              </a>
            </div>
          </div>
        ))}
      </section>
      <section className="mt-5 p-5 item bg-gradient-to-tr from-cyan-200 to-fuchsia-200 border border-border rounded-3xl backdrop-blur-sm neon-glow-purple">
        <h4 className='text-black mb-5 mx-5'>Follow Me</h4>
        <div className="flex gap-8 mx-5">
          <a href="#" className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-full text-white hover:opacity-80">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full text-white hover:opacity-80">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="bg-gradient-to-br from-green-500 to-teal-500 p-3 rounded-full text-white hover:opacity-80">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="bg-gradient-to-br from-red-500 to-orange-500 p-3 rounded-full text-white hover:opacity-80">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </section>
      <section>
        <div className="mt-5 p-5 item bg-gradient-to-tr from-cyan-200 to-fuchsia-200 border border-border rounded-3xl backdrop-blur-sm neon-glow-purple">
          <div>
            <MapPin className="w-6 h-6 mb-3 text-black" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024864868234!2d90.3917183149812!3d23.750903394589736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0b2f6e6b7%3A0x7d5a4f4c4e4e4e4e!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactAddress
