"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* <nav className="fixed w-full top-0 z-50 bg-transparent border-b border-gray-200" opacity-30> */}
        {/* <nav className="fixed w-full top-0 z-50 bg-white  shadow-md border-b border-gray-200"> */}
        <nav
  className={`fixed w-full top-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-black shadow-md border-b border-gray-200"
      : "bg-transparent"
  }`}
>
        <div className="max-w-7xl mx-auto px-6 py-4">

          <div className="flex justify-between items-center">

            <div className="text-xl tracking-wider text-White-900">
              <span className="font-bold">Oesten</span> <span className="font-light">Spaces</span>
            </div>

            {/* Hamburger Menu
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-900"
            >
              {mobileMenuOpen ? (
                // Close (X) icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button> */}
            {/* Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-900 z-9999 relative"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Mobile Menu */}
            <meta name="viewport" content="width=-device-width, initial-scale=1.0" />
            <div
              className={`lg:hidden fixed inset-0 bg-transparent backdrop-blur-md flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${mobileMenuOpen ? "opacity-0 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                }`}
            >
              <a href="#home" className="text-gray-900 text-lg font-light tracking-widest uppercase border-b border-gray-300 pb-2">
                Home
              </a>

              <a href="#about" className="text-gray-900 text-lg font-light tracking-widest uppercase border-b border-gray-300 pb-2">
                About Us
              </a>
              <a href="#services" className="text-gray-900 text-lg font-light tracking-widest uppercase border-b border-gray-300 pb-2">
                Services
              </a>
              <a href="#contact" className="text-gray-900 text-lg font-light tracking-widest uppercase border-b border-gray-300 pb-2">
                Contact Us
              </a>
              <div className="flex gap-6 pt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} className="text-gray-900 hover:text-pink-600" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} className="text-gray-900 hover:text-blue-700" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} className="text-gray-900 hover:text-blue-600" />
                </a>
              </div>
            </div>

            {/* Desktop Menu*/}
            <div className="hidden lg:flex gap-6 items-center">
              <a href="#" className="text-sm text-white hover:bg-white hover:text-black px-4 py-2 rounded-full transition">
                HOME
              </a>
              <a href="#services" className="text-sm text-white hover:bg-white hover:text-black px-4 py-2 rounded-full transition">
                SERVICES
              </a>
              <a href="#portfolio" className="text-sm text-white hover:bg-white hover:text-black px-4 py-2 rounded-full transition">
                PORTFOLIO
              </a>
              <a href="#contact" className="text-sm text-white hover:bg-white hover:text-black px-4 py-2 rounded-full transition">
                CONTACT US
              </a>
            </div>

            {/* Social Media Menu Icon */}
            <div className="hidden lg:flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} className="text-white hover:text-pink-600" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} className="text-white hover:text-blue-700" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} className="text-white hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-linear-to-br from-yellow-400 via-white-800 to-white-900 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <div
            style={{
              backgroundImage: "url('/Home.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-full w-full"
          ></div>

        </div>


        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
            Crafting Timeless Luxury Interiors
          </h1>
          <p className="text-lg text-white mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Transforming living spaces into thoughtfully designed, elegant experiences that reflect your unique lifestyle and personality.
          </p>
          <button className="px-10 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium text-sm tracking-wide">
            Explore Designs
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl font-light text-amber-900 mb-2">120+</div>
              <p className="text-sm text-gray-600">PROJECTS</p>
            </div>
            <div className="border-l border-gray-300">
              <div className="text-4xl font-light text-amber-900 mb-2">90+</div>
              <p className="text-sm text-gray-600">CLIENTS</p>
            </div>
            <div className="border-l border-gray-300">
              <div className="text-4xl font-light text-amber-900 mb-2">4+</div>
              <p className="text-sm text-gray-600">YEARS</p>
            </div>
            <div className="border-l border-gray-300">
              <div className="text-4xl font-light text-amber-900 mb-2">100%</div>
              <p className="text-sm text-gray-600">SATISFACTION</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-amber-900 mb-6">
                Designing Spaces that Reflect Your Lifestyle
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8 font-light">
                We create interiors that are thoughtful, elegant, and timeless. Every design is carefully crafted to reflect your unique taste and lifestyle, ensuring spaces that truly inspire and delight.
              </p>
              <a href="#" className="text-amber-900 font-medium text-sm tracking-wide hover:text-amber-800">
                LEARN MORE →
              </a>
            </div>
            {/* <div className="bg-linear-to-br from-amber-200 to-orange-200 h-64 rounded-3xl"></div> */}
            <div
              style={{
                backgroundImage: "url('/Home.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="bg-linear-to-br from-amber-200 to-orange-200 h-64 rounded-3xl"
            ></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-amber-900 mb-16">
            Architecture & Interior Services
          </h2>

          {/* Service 1 */}
          <div className="mb-20 pb-20 border-b border-gray-200">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-sm font-medium text-gray-700">01</span>
              <h3 className="text-2xl font-light text-amber-900">Architectural Design</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 leading-relaxed mb-8 font-light">
                  Create stunning architectural solutions that combine functionality and aesthetic appeal. Our designs are tailored to your vision and create lasting impressions that stand the test of time.
                </p>
                <a href="#" className="text-amber-900 font-medium text-sm tracking-wide hover:text-amber-800">
                  LEARN MORE →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* <div className="bg-linear-to-br from-amber-100 to-orange-100 h-32 rounded-2xl"></div> */}
                <div
                  style={{
                    backgroundImage: "url('/architecture-service.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="bg-linear-to-br from-amber-100 to-orange-100 h-32 rounded-2xl">

                </div>
                {/* <div className="bg-linear-to-br from-amber-100 to-orange-100 h-32 rounded-2xl"></div> */}
                <div
                  style={{
                    backgroundImage: "url('/feature-banner.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="bg-linear-to-br from-amber-100 to-orange-100 h-32 rounded-2xl">

                </div>
              </div>

            </div>
          </div>

          {/* Service 2 */}
          <div className="mb-20 pb-20 border-b border-gray-200">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-sm font-medium text-gray-700">02</span>
              <h3 className="text-2xl font-light text-amber-900">Interior Design</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 leading-relaxed mb-8 font-light">
                  Transform your spaces with our comprehensive interior design services. From concept to completion, we handle every detail with precision and creative excellence.
                </p>
                <a href="#" className="text-amber-900 font-medium text-sm tracking-wide hover:text-amber-800">
                  LEARN MORE →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-linear-to-br from-amber-100 to-orange-100 h-32 rounded-2xl"></div>
                <div className="bg-linear-to-br from-amber-100 to-orange-100 h-32 rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <span className="text-sm font-medium text-gray-700">03</span>
              <h3 className="text-2xl font-light text-amber-900">Turnkey Design & Execution</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 leading-relaxed mb-8 font-light">
                  Let us handle everything from design to execution. Our turnkey solutions ensure seamless project delivery with exceptional results that exceed expectations.
                </p>
                <a href="#" className="text-amber-900 font-medium text-sm tracking-wide hover:text-amber-800">
                  LEARN MORE →
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-linear-to-br from-amber-100 to-orange-100 h-40 rounded-2xl"></div>
                <div className="bg-linear-to-br from-amber-100 to-orange-100 h-40 rounded-2xl"></div>
                <div className="bg-linear-to-br from-amber-100 to-orange-100 h-40 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brand Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-amber-900 to-amber-800 h-80 rounded-3xl flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10">
              <h2 className="text-5xl font-light text-white mb-6">Oesten Spaces</h2>
              <div className="flex justify-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-96 rounded-3xl flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10 px-8">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-3">WHERE VISION MEETS</h2>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">TIMELESS DESIGN</h2>
              <p className="text-gray-300 text-lg">Experience the perfect blend of innovation and elegance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-amber-900 mb-16">
            Why Choose Oesten Spaces?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Thoughtful Design Crafted", desc: "Meticulous attention to detail creating spaces that are both beautiful and functional." },
              { title: "Transparent Communication", desc: "Clear communication throughout ensuring your vision is realized exactly as intended." },
              { title: "Attention to Detail", desc: "Every element carefully considered to create cohesive, stunning results." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100">
                <h3 className="text-lg font-medium text-amber-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-light mb-6">{item.desc}</p>
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-32 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-amber-900 mb-16">
            Thoughtful Design Crafted For Modern Living
          </h2>

          {/* Living Room */}
          <div className="mb-20">
            <h3 className="text-sm font-medium text-gray-600 mb-8 tracking-wider">LIVING ROOM DESIGN</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-64 rounded-2xl"></div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-64 rounded-2xl"></div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-64 rounded-2xl"></div>
            </div>
            <p className="text-gray-600 text-sm font-light">Elegant living room designs that bring families together with comfort and style.</p>
          </div>

          {/* Bedroom */}
          <div className="mb-20">
            <h3 className="text-sm font-medium text-gray-600 mb-8 tracking-wider">BEDROOM INTERIORS</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-64 rounded-2xl"></div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-64 rounded-2xl"></div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-64 rounded-2xl"></div>
            </div>
            <p className="text-gray-600 text-sm font-light">Serene bedrooms that reflect your personal style and provide sanctuary.</p>
          </div>

          {/* Kitchen */}
          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-8 tracking-wider">KITCHEN INTERIORS</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-64 rounded-2xl"></div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-64 rounded-2xl"></div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 h-64 rounded-2xl"></div>
            </div>
            <p className="text-gray-600 text-sm font-light">Functional and beautiful kitchens designed for modern cooking.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-amber-900 mb-16">
            What Clients Say About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Beautiful From Start to Finish", name: "Impressed From Start to Finish" },
              { title: "Design That Lasts Personally", name: "Design That Feels Personal" },
              { title: "Exceptional Service", name: "Exceptional Service Overall" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-gray-100">
                <div className="grid md:grid-cols-2 h-64">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100"></div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-amber-900 mb-3">{item.title}</h3>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500 text-lg">★</span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed font-light">The team transformed our space beautifully. Every detail was perfect.</p>
                    </div>
                    <p className="text-xs font-medium text-gray-900">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-amber-900 to-amber-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Transform Your Space?</h2>
          <p className="text-amber-50 text-lg mb-10 font-light">
            Get in touch with our team to discuss your next project.
          </p>
          <button className="px-10 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-medium text-sm tracking-wide">
            Start Your Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-light text-white mb-6">Oesten</h3>
              <p className="text-sm leading-relaxed font-light">
                Crafting timeless luxury interiors for modern living.
              </p>
            </div>
            <div>
              <h4 className="font-light text-white mb-6 text-sm">SERVICES</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition">Architecture</a></li>
                <li><a href="#" className="hover:text-white transition">Interior Design</a></li>
                <li><a href="#" className="hover:text-white transition">Turnkey Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-white mb-6 text-sm">COMPANY</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-light text-white mb-6 text-sm">FOLLOW</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex justify-between items-center text-xs">
            <p>&copy; 2026 Oesten Spaces. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
