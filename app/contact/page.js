"use client";

import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Client-side validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          from_name: `${formData.name} (Portfolio Contact)`,
          ...formData,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: result.message || "Something went wrong. Please try again later." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 lg:py-20 max-w-4xl">
      <AnimatedSection direction="up">
        <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-4 text-center">
          Get In <span className="text-white drop-shadow-md">Touch</span>
        </h1>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out using the form below or connect with me on social media.
        </p>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={100} className="bg-black/20 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-text-light">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-text-light placeholder-text-muted transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-text-light">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-text-light placeholder-text-muted transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-text-light">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
              className="w-full px-4 py-3 bg-dark-primary border border-dark-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-green text-text-light placeholder-text-muted transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-text-light">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Kamsi, I would like to..."
              className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-text-light placeholder-text-muted transition-colors resize-y"
            ></textarea>
          </div>

          {status.message && (
            <div
              className={`p-4 rounded-lg border ${
                status.type === "success"
                  ? "bg-accent-green/10 border-accent-green text-accent-green"
                  : "bg-red-500/10 border-red-500 text-red-500"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-white/10 text-white font-semibold rounded-lg shadow-lg border border-white/50 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </AnimatedSection>

      {/* Social Links */}
      <AnimatedSection direction="up" delay={200} className="mt-16 text-center">
        <h3 className="text-xl font-bold text-text-light mb-6">Connect with me</h3>
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-text-light hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="mailto:kamsiyochinwakwuribe@gmail.com"
            className="w-12 h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-text-light hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="tel:08068705361"
            className="w-12 h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-text-light hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
            aria-label="Phone"
          >
            <FaPhoneAlt size={20} />
          </a>
          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-text-light hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
            aria-label="Twitter / X"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://github.com/KDN-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-text-light hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
