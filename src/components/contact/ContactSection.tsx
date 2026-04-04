"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="dot-grid py-12 sm:py-24 px-3 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <header className="mb-12 sm:mb-20">
          <div className="inline-block bg-[#A33B3C] text-white px-2 sm:px-3 py-1 mb-4 sm:mb-6 text-[0.6rem] sm:text-[0.75rem] uppercase tracking-widest font-bold">
            SYSTEM_ACCESS: EXTERNAL_COMMUNICATION
          </div>
          <h2 className="text-[2rem] sm:text-[3.5rem] md:text-[5rem] font-black leading-[0.9] -tracking-[0.04em] uppercase mb-6 sm:mb-8">
            INITIATE
            <br />
            <span className="text-[#006565]">CONNECTION_</span>
          </h2>
          <div className="w-16 sm:w-24 h-2 bg-[#1A1C1A] mb-6 sm:mb-8" />
          <p className="max-w-xl text-sm sm:text-lg leading-relaxed">
            Our technical node is open for collaboration, inquiries, and glitch
            reporting. Choose your preferred channel to interface with the
            collective.
          </p>
        </header>

        {/* Contact Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-20">
          {/* Phone */}
          <div className="bg-[#faf9f6] border-2 border-[#1A1C1A] p-5 sm:p-8 shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] sm:shadow-[8px_8px_0px_0px_rgba(26,28,26,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-75 cursor-pointer relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-16 h-16 opacity-10 text-[#006565] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "4px 4px",
              }}
            />
            <div className="flex justify-between items-start mb-6 sm:mb-12">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#006565]">
                phone_in_talk
              </span>
              <span className="font-mono text-[0.6rem] sm:text-[0.7rem] uppercase tracking-widest opacity-60">
                Ref_Sec
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase mb-3 sm:mb-4">Phone Number</h3>
            <p className="font-bold text-[#1A1C1A]/70 mb-6 sm:mb-8 text-sm sm:text-base">+91 7983957734</p>
            <div className="w-1/3 h-0.5 bg-[#A33B3C]" />
          </div>

          {/* Email (featured) */}
          <div className="sm:col-span-2 bg-[#006565] text-white p-5 sm:p-8 shadow-[4px_4px_0px_0px_rgba(163,59,60,1)] sm:shadow-[8px_8px_0px_0px_rgba(163,59,60,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-75 cursor-pointer relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "4px 4px",
              }}
            />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6 sm:mb-12">
                <span className="material-symbols-outlined text-3xl sm:text-4xl">mail</span>
                <span className="font-mono text-[0.6rem] sm:text-[0.7rem] uppercase tracking-widest text-white/60">
                  REF_SEC
                </span>
              </div>
              <h3 className="text-2xl sm:text-[2.5rem] font-black uppercase mb-3 sm:mb-4 leading-none">
                DIRECT_INBOX
              </h3>
              <p className="text-base sm:text-xl font-medium mb-6 sm:mb-12 break-all sm:break-normal">
                cidcaitpune@gmail.com
              </p>
              <a
                href="mailto:cidcaitpune@gmail.com"
                className="inline-flex items-center gap-2 border-2 border-white px-4 sm:px-6 py-3 font-bold uppercase tracking-widest text-xs sm:text-sm bg-white text-[#006565] hover:bg-[#faf9f6] transition-colors"
              >
                SEND MESSAGE
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-[#e9e8e5] border-2 border-[#1A1C1A] p-5 sm:p-8 shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] sm:shadow-[8px_8px_0px_0px_rgba(26,28,26,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-75 cursor-pointer">
            <div className="flex justify-between items-start mb-6 sm:mb-12">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#006565]">
                chat
              </span>
              <span className="font-mono text-[0.6rem] sm:text-[0.7rem] uppercase tracking-widest opacity-60">
                REF_SEC
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase mb-3 sm:mb-4">WHATSAPP</h3>
            <p className="font-bold text-[#1A1C1A]/70 mb-6 sm:mb-8 text-sm sm:text-base">
              SECURE_ENCRYPTED_LINE
            </p>
            <p className="text-[#006565] font-black text-sm sm:text-base">+91 85XXXX</p>
          </div>

          {/* Instagram */}
          <div className="bg-[#faf9f6] border-2 border-[#1A1C1A] p-5 sm:p-8 shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] sm:shadow-[8px_8px_0px_0px_rgba(26,28,26,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-75 cursor-pointer">
            <div className="flex justify-between items-start mb-6 sm:mb-12">
              <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#A33B3C]">
                camera
              </span>
              <span className="font-mono text-[0.6rem] sm:text-[0.7rem] uppercase tracking-widest opacity-60">
                REF_insta
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase mb-3 sm:mb-4">Instagram</h3>
            <p className="font-bold text-[#1A1C1A]/70 mb-6 sm:mb-8 text-sm sm:text-base">@cidc_aitpune</p>
            <div className="w-1/3 h-0.5 bg-[#A33B3C]" />
          </div>

          {/* GitHub */}
          <div className="bg-[#1A1C1A] text-[#faf9f6] p-5 sm:p-8 shadow-[4px_4px_0px_0px_rgba(0,101,101,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,101,101,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-75 cursor-pointer">
            <div className="flex justify-between items-start mb-6 sm:mb-12">
              <span className="material-symbols-outlined text-3xl sm:text-4xl">code</span>
              <span className="font-mono text-[0.6rem] sm:text-[0.7rem] uppercase tracking-widest opacity-40">
                REF_github
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase mb-3 sm:mb-4">SOURCE_CODE</h3>
            <p className="font-bold text-[#faf9f6]/70 mb-6 sm:mb-8 text-sm sm:text-base">
              GITHUB.COM/smartAIT
            </p>
            <div className="w-1/3 h-0.5 bg-[#006565]" />
          </div>
        </div>

        {/* Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 border-t-2 border-[#1A1C1A] pt-8 sm:pt-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase mb-8 sm:mb-12">
              SEND_TRANSMISSION
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div>
                <label className="block text-[0.65rem] sm:text-[0.75rem] font-bold uppercase tracking-widest mb-2">
                  &gt; NAME_
                </label>
                <input
                  type="text"
                  placeholder="USER_IDENTIFIER"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#e3e2e0] border-b-2 border-[#1A1C1A] focus:ring-0 p-3 sm:p-4 font-bold text-base sm:text-lg outline-none focus:shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] transition-all"
                />
              </div>
              <div>
                <label className="block text-[0.65rem] sm:text-[0.75rem] font-bold uppercase tracking-widest mb-2">
                  &gt; EMAIL_
                </label>
                <input
                  type="email"
                  placeholder="RETURN_COORDINATES"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#e3e2e0] border-b-2 border-[#1A1C1A] focus:ring-0 p-3 sm:p-4 font-bold text-base sm:text-lg outline-none focus:shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] transition-all"
                />
              </div>
              <div>
                <label className="block text-[0.65rem] sm:text-[0.75rem] font-bold uppercase tracking-widest mb-2">
                  &gt; MESSAGE_DATA_
                </label>
                <textarea
                  rows={4}
                  placeholder="ENTER_PLAINTEXT_HERE..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#e3e2e0] border-b-2 border-[#1A1C1A] focus:ring-0 p-3 sm:p-4 font-bold text-base sm:text-lg outline-none focus:shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#006565] text-white px-8 sm:px-12 py-3 sm:py-4 font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(26,28,26,1)] hover:-translate-x-1 hover:-translate-y-1 transition-transform active:translate-x-0 active:translate-y-0"
              >
                EXECUTE_SEND
              </button>
            </form>
          </div>

          {/* Location */}
          <div className="relative group">
            <div className="absolute -top-3 left-2 sm:-top-4 sm:-left-4 bg-[#A33B3C] text-white px-3 sm:px-4 py-1 sm:py-2 z-10 font-bold uppercase text-[0.6rem] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] shadow-[3px_3px_0px_0px_rgba(26,28,26,1)] sm:shadow-[4px_4px_0px_0px_rgba(26,28,26,1)]">
              LOCATION_COORDINATES
            </div>
            <div className="aspect-[4/3] sm:aspect-square bg-[#e9e8e5] border-2 border-[#1A1C1A] overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,101,101,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,101,101,1)] relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy0bX_NxmDGz7Y94KgegvcniK6eY2fLzhg-8pqOLdTqLfP5xmUY5RZfkj5kh-sPEHIFvGPjyUnK7yjBSLNF24EUY7ugJlbv7YKsXf1VmygZ0d9JJLn_Kum5S47KGK5ly0l4kgB8ab7g9lWGkNtbqDGCprYfwgAJqPlDF2MiP07Q-gNW-7kN4py336fGeh6ZrfJxJttkFfDzHk2pAPqybXo8sD0aEsP9PZumWxTJ9qpeAJ6fUtWjpp1g4K4CTKYhrNfv7a1UhejT_o"
                alt="AIT Pune Location"
                className="w-full h-full object-cover grayscale brightness-50 contrast-125"
              />
              <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, currentColor 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 bg-[#faf9f6] p-4 sm:p-6 border-2 border-[#1A1C1A] shadow-[3px_3px_0px_0px_rgba(163,59,60,1)] sm:shadow-[4px_4px_0px_0px_rgba(163,59,60,1)] max-w-[200px] sm:max-w-none">
                <h4 className="font-black uppercase mb-1 sm:mb-2 text-sm sm:text-base">AIT, Pune</h4>
                <p className="text-xs sm:text-sm font-medium opacity-70 mb-3 sm:mb-4">
                  411015, Alandi road Dighi
                  <br />
                  Army Institute of Technology
                </p>
                <a
                  href="https://maps.google.com/?q=Army+Institute+of+Technology+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A33B3C] font-bold underline underline-offset-4 text-[0.6rem] sm:text-sm uppercase tracking-widest"
                >
                  MAP_INTERFACE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
