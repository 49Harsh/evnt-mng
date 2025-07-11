"use client";

import { useState, FormEvent, useEffect } from "react";
import axiosInstance from "@/api/axiosInstance";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });
  
  const { user, loading } = useAuth();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    // Check if user is authenticated after loading completes
    if (!loading && !user) {
      toast.error("Please login to contact us", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      router.push("/login");
    }
  }, [user, loading, router]);

  // If still loading or user not authenticated, show a loading state
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 bg-[#e7c47b]"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    );
  }

  // If not authenticated, don't render the form at all (will be redirected by useEffect)
  if (!user) {
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    try {
      // Try with axiosInstance first
      try {
        await axiosInstance.post("/contact", formData);
      } catch (axiosError) {
        console.log(axiosError);       
       
      }
      
      toast.success("Thank you for your message. We'll get back to you soon!");
      setSubmitMessage("Thank you for your message. We'll get back to you soon!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        message: "",
      });
    } catch (error: unknown) {
      toast.error("Something went wrong. Please try again later.");
      setSubmitMessage("Something went wrong. Please try again later.");
      console.error("Contact form error:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#b6810c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with us to start planning your perfect event
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="social">Social Gathering</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#b6810c] text-white py-3 px-6 rounded hover:bg-[#8a620a] transition-colors disabled:bg-purple-400"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Head Office</h3>
                    <p className="text-gray-600">A-261 F/F, KH.NO-302, A-BLOCK, MEET NAGAR, SABOLI DELHI -110094</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Corporate Office</h3>
                    <p className="text-gray-600">A12 Bansal Complex, 100 ft. hindi sansthan road, Near Khandari Crossing, </p>
                    <p className="text-gray-600">Khandari, Agra - 282005</p>
                  </div>
                  {/* <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+91 6396429825</p>
                  </div> */}
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">support25@milanmanch.com</p>
                  </div>
                  {/* <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div> */}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 h-[300px] rounded-lg flex items-center justify-center text-gray-400 overflow-hidden">
                <iframe
                  title="Bansal Complex Map"
                  src="https://www.google.com/maps?q=Bansal+Complex,+100+ft,+Kendriya+Hindi+Sansthan+Rd,+Khandari,+Agra,+Uttar+Pradesh+282005&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
