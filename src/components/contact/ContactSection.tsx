"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section id="contact" className="dot-grid py-12 sm:py-24 px-4 sm:px-12 border-t-2 border-[#1A1C1A]">
      <div className="max-w-full mx-auto">
        {/* Hero Header */}
        <header className="mb-24">
          <div className="inline-block bg-[#A33B3C] text-white px-3 py-1 mb-6 text-[10px] uppercase tracking-widest font-black">
            SYSTEM_ACCESS: EXTERNAL_COMMUNICATION
          </div>
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-black leading-[0.8] tracking-tighter uppercase mb-12">
            INITIATE
            <br />
            <span className="text-[#006565]">CONNECTION_</span>
          </h2>
          <p className="max-w-xl text-sm sm:text-base font-medium leading-relaxed text-[#1A1C1A]">
            Our technical node is open for collaboration, inquiries, and glitch
            reporting. Choose your preferred channel to interface with the
            collective.
          </p>
        </header>

        {/* Contact Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-2 border-[#1A1C1A]">
          {/* Phone & WhatsApp Group */}
          <div className="md:col-span-4 flex flex-col border-r-2 border-[#1A1C1A]">
            {/* Phone */}
            <div className="p-8 border-b-2 border-[#1A1C1A] flex flex-col">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-3xl text-[#006565]">phone_in_talk</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#1A1C1A]/40">REF_001</span>
              </div>
              <h3 className="text-xl font-black uppercase mb-2">Phone Number</h3>
              <p className="font-black text-lg text-[#1A1C1A] mb-8">+91 7983957734</p>
            </div>
            
            {/* WhatsApp */}
            <div className="p-8 flex flex-col bg-[#f4f3f1]">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-3xl text-[#006565]">chat</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#1A1C1A]/40">REF_003</span>
              </div>
              <h3 className="text-xl font-black uppercase mb-2">WhatsApp</h3>
              <p className="font-mono text-[9px] uppercase font-bold text-[#A33B3C] mb-2 tracking-widest">SECURE_ENCRYPTED_LINE</p>
              <p className="font-black text-lg text-[#1A1C1A] mb-4">+91 96XXXXX</p>
            </div>
          </div>

          {/* Email (featured) */}
          <div className="md:col-span-5 bg-[#006565] text-white p-8 md:p-12 border-r-2 border-[#1A1C1A] flex flex-col">
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-4xl">mail</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">MAR_390</span>
            </div>
            <h3 className="text-4xl font-black uppercase mb-4 leading-none">DIRECT_INBOX</h3>
            <p className="text-xl font-black mb-12">cidcaitpune@gmail.com</p>
            <a
              href="mailto:cidcaitpune@gmail.com"
              className="mt-auto inline-flex items-center justify-between border-2 border-white px-8 py-4 font-black uppercase tracking-widest text-xs bg-white text-[#006565] hover:bg-[#1A1C1A] hover:text-white transition-colors"
            >
              SEND MESSAGE
              <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
          </div>

          {/* Instagram & Source Code Group */}
          <div className="md:col-span-3 flex flex-col">
            {/* Instagram */}
            <div className="p-8 border-b-2 border-[#1A1C1A] flex flex-col">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-3xl text-[#A33B3C]">alternate_email</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#1A1C1A]/40">REF_INSTA</span>
              </div>
              <h3 className="text-xl font-black uppercase mb-2">INSTAGRAM</h3>
              <p className="font-black text-[#1A1C1A]">@cidc_aitpune</p>
            </div>
            
            {/* Source Code */}
            <div className="p-8 flex flex-col bg-[#1A1C1A] text-white flex-1">
              <div className="flex justify-between items-start mb-12">
                <span className="material-symbols-outlined text-3xl text-white">code</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">REF_G_HUB</span>
              </div>
              <h3 className="text-xl font-black uppercase mb-2">SOURCE_CODE</h3>
              <p className="font-black text-xs text-white/60 mb-8 uppercase tracking-widest">GITHUB.COM/smartAIT</p>
            </div>
          </div>
        </div>

        {/* Send Transmission Form Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Form */}
          <div className="md:col-span-7">
            <h3 className="text-3xl font-black uppercase mb-12 tracking-tighter">SEND_TRANSMISSION</h3>
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#A33B3C]">NAME_</label>
                <input type="text" placeholder="USER_IDENTIFIER" className="w-full bg-[#f4f3f1] border-2 border-[#1A1C1A] p-4 font-mono text-sm focus:outline-none" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#A33B3C]">EMAIL_</label>
                <input type="email" placeholder="RETURN_COORDINATES" className="w-full bg-[#f4f3f1] border-2 border-[#1A1C1A] p-4 font-mono text-sm focus:outline-none" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#A33B3C]">MESSAGE_DATA_</label>
                <textarea rows={4} placeholder="ENTER_PLAINTEXT_HERE..." className="w-full bg-[#f4f3f1] border-2 border-[#1A1C1A] p-4 font-mono text-sm focus:outline-none resize-none" />
              </div>
              <button className="bg-[#006565] text-white px-12 py-4 font-black uppercase tracking-widest text-xs border-2 border-[#1A1C1A] hover:bg-[#1A1C1A] transition-colors">
                EXECUTE_SEND
              </button>
            </form>
          </div>

          {/* Location UI */}
          <div className="md:col-span-5">
            <div className="border-2 border-[#1A1C1A] h-full flex flex-col">
              <div className="p-4 border-b-2 border-[#1A1C1A] font-mono text-[10px] font-black uppercase tracking-widest flex justify-between">
                <span>LOCATION_COORDINATES</span>
              </div>
              <div className="bg-[#e3e2e0] flex-1 min-h-[300px] relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3M-Kx9W-e5Kz-O5Q-H9-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V-V" 
                  alt="Location Context" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white border-2 border-[#1A1C1A] p-6 shadow-[8px_8px_0px_0px_rgba(26,28,26,1)]">
                  <h4 className="font-black uppercase mb-1">AIT_PUNE</h4>
                  <p className="text-[10px] font-medium text-[#1A1C1A]/60 font-mono mb-4">411015, Alandi Road, Dighi Army Institute of Technology</p>
                  <a href="#" className="text-[10px] font-black uppercase tracking-widest underline decoration-2 underline-offset-4">MAP_INTERFACE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
