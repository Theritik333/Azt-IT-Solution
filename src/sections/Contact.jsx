// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 UPDATED SUBMIT (WHATSAPP)
  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919354138669"; // 👉 apna WhatsApp number (country code ke sath)

      const message = `
      Hello Akz IT Solutions Team 👋

      I hope you're doing well.

      I would like to connect with you regarding a project/business inquiry. Please find my details below:

            👤 Name: ${form.name}
            📧 Email: ${form.email}
            📌 Subject: ${form.subject}

            📝 Message:
             ${form.message}

      Looking forward to your response. Thank you for your time!

      Best regards,  
             ${form.name}
           `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    // reset
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 
        bg-gradient-to-br 
        from-indigo-50 via-white to-cyan-50 
        dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      </div>

      <Container>

        <SectionTitle
          title="Contact Us"
          subtitle="Have a project in mind? Let’s discuss how we can help you build and grow digitally."
        />

        {/* TOP INTRO */}
        <div className="max-w-3xl mx-auto text-center mt-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Whether you're a startup or an enterprise, we’re here to help you 
            build powerful digital solutions. Reach out to us and let’s create 
            something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start mt-12">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {[
              { icon: <FaPhoneAlt />, title: "Phone", value: "+91 98765 43210" },
              { icon: <FaEnvelope />, title: "Email", value: "contact@akzit.com" },
              { icon: <FaMapMarkerAlt />, title: "Location", value: "Delhi, India" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/80 dark:bg-slate-800/80 
                backdrop-blur-lg p-5 rounded-xl shadow border border-gray-200 dark:border-slate-700"
              >
                <div className="text-indigo-500 text-xl mt-1">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="text-sm text-gray-500 mt-4">
              <p>⏰ Mon - Sat (10 AM - 7 PM)</p>
              <p>⚡ Reply within 24 hours</p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg 
            p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 space-y-4"
          >

            <h3 className="text-lg font-semibold mb-2">
              Send Message on WhatsApp
            </h3>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows="4"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition shadow-md"
            >
              Send on WhatsApp 💬
            </button>

          </motion.form>

        </div>

      </Container>
    </section>
  );
};

export default Contact;