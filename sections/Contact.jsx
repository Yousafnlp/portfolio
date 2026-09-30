import React from "react";
import { FiMail } from "react-icons/fi";
import { socialLinks } from "../data/SocialLinks";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="section-title">Contact</h2>

        <div
          className="glass-card p-8 sm:p-10 flex flex-col items-center gap-6 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <p className="text-neutral-500">Email</p>
          <a
            href="mailto:yousaf.dev.web@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full text-sm sm:text-base text-white/80 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
          >
            <FiMail />
            yousaf.dev.web@gmail.com
          </a>
          <div className="flex items-center gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.text}
                className="text-xl text-neutral-500 hover:text-white transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-neutral-600 mt-12">
          © {new Date().getFullYear()} Yousaf Ijaz Munawar
        </p>
      </div>
    </section>
  );
};

export default Contact;
