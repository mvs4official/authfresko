"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    const showSlide = (index: number) => {
      slides.forEach((slide, i) => {
        (slide as HTMLElement).classList.toggle('active', i === index);
      });
    };

    const autoSlide = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="min-h-screen font-montserrat">
      <header className="bg-gray-800 text-white fixed w-full z-50">
        <nav className="flex justify-between p-4 max-w-7xl mx-auto">
          <div className="text-lg font-bold">FRESKO</div>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-green-400 transition">Home</Link>
            <Link href="#about" className="hover:text-green-400 transition">About us</Link>
            <Link href="#services" className="hover:text-green-400 transition">Services</Link>
            <Link href="#contact" className="hover:text-green-400 transition">Contact us</Link>
            <button className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition">REGISTER</button>
            <button className="px-4 py-2 border border-green-500 rounded-lg hover:bg-green-500 transition">LOG IN</button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between">
            <div className="w-1/2 space-y-8">
              <h1 className="text-5xl font-bold">
                <span className="text-green-500">"Do not worry;</span>
                <br />
                Allah is certainly with <span className="text-green-500">us."</span>
              </h1>
              <p className="text-xl text-gray-600">
                A compassionate, faith-based approach to help you overcome modern challenges and find lasting peace through Islamic principles.
              </p>
            </div>
            <div className="w-1/2">
              <Image src="/images/picture.png" alt="Fresko" width={600} height={400} className="rounded-lg shadow-xl" />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="bg-black/60 backdrop-blur-sm py-16 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What we do</h2>
            <div className="grid grid-cols-5 gap-8">
              {[
                { title: "Assessment", icon: "/images/assessment.png" },
                { title: "Personal Mentoring", icon: "/images/Training-removebg-preview.jpg" },
                { title: "Islamic Solutions", icon: "/images/Innovation.png" },
                { title: "Research Pool", icon: "/images/Reading.png" },
                { title: "Live Mentoring", icon: "/images/RFID Signal.png" }
              ].map((service, index) => (
                <div key={index} className="bg-black/60 p-6 rounded-lg hover:shadow-xl transition">
                  <div className="w-12 h-12 bg-white rounded-full mb-4 mx-auto">
                    <Image src={service.icon} alt={service.title} width={48} height={48} className="p-2" />
                  </div>
                  <h3 className="text-center font-semibold">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Experts Section */}
        <section className="bg-[#dffff7] py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Meet Our Expert <span className="text-[#067d9f]">Faculties</span></h2>
            <p className="text-center mb-12">Our Visionary Mentors</p>
            <div className="grid grid-cols-6 gap-8">
              {[
                { name: "Javad Koppam", role: "Personal Trainer", image: "/anime1.png" },
                { name: "Suhail Mukkanam", role: "Personal Trainer", image: "/anime2.png" },
                { name: "Jalal Orakkakundil", role: "Personal Trainer", image: "/anime3.png" },
                { name: "Hashim Kallidumbil", role: "Personal Trainer", image: "/anime4.png" },
                { name: "Roshan Mattra", role: "Personal Trainer", image: "/anime5.png" },
                { name: "Mikdad Poozhikuth", role: "Personal Trainer", image: "/anime6.png" }
              ].map((expert, index) => (
                <div key={index} className="text-center">
                  <Image src={expert.image} alt={expert.name} width={260} height={452} className="mb-4" />
                  <h4 className="font-semibold text-sm">{expert.name}</h4>
                  <p className="text-sm text-gray-600">{expert.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white pt-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Follow <span className="text-[#0fc395]">us</span></h2>
            <div className="grid grid-cols-2 gap-16">
              <div className="relative">
                <Image src="/caterpiller.png" alt="Decoration" width={200} height={200} className="absolute -top-16 -left-8" />
                <div className="relative z-10">
                  <h3 className="text-[#03A67C] text-3xl font-semibold mb-4">FRESKO</h3>
                  <address className="not-italic mb-8">
                    Fresko corporation,<br />
                    Perinthalmanna, Malappuram Dist.<br />
                    Kerala, India
                  </address>
                  <hr className="w-48 mb-4" />
                  <h4 className="font-medium mb-2">Contact us</h4>
                  <p>+91 7025908513<br />info@fresko.in</p>
                  <h4 className="font-medium mt-4 mb-2">Customer care</h4>
                  <p>+91 8593985020<br />+91 8089693117</p>
                  <h4 className="text-[#046A50] font-semibold mt-6 mb-4">Connect with us</h4>
                  <div className="flex space-x-4">
                    {['fb.png', 'wtsapp.png', 'x.png', 'ig.png'].map((icon, index) => (
                      <Image key={index} src={`/${icon}`} alt="Social" width={32} height={32} className="rounded" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image src="/Warm.png" alt="Decoration" width={395} height={698} className="absolute top-0 right-0 opacity-20" />
                <div className="bg-[#DFFFF7] p-8 rounded-lg relative z-10">
                  <h3 className="text-xl font-semibold text-center mb-4">Let's get in <span className="text-[#2C957B]">touch</span></h3>
                  <p className="text-center mb-8">
                    Stay connected to guidance and inspiration!<br />
                    By subscribing, you'll gain exclusive access to personalized resources,<br />
                    live mentoring updates, and faith-based solutions to transform your journey.<br />
                    Let <span className="text-[#0C765C]">Fresko</span> be your partner in healing and growth.
                  </p>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full p-4 rounded-lg text-center mb-4"
                  />
                  <button className="w-full p-4 bg-[#2C957B] text-white rounded-lg hover:opacity-90 transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#DFFFF7] h-32 mt-16" />
        </footer>
      </main>
    </div>
  );
}