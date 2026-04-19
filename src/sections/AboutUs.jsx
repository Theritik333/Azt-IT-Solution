// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import Counter from "../components/common/Counter";

const AboutUs = () => {
  return (
    <section id="about" className="scroll-mt-20 py-20 relative overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 -z-10 
        bg-gradient-to-br 
        from-indigo-50 via-white to-purple-50 
        dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      </div>

      <Container>

        {/* HEADER */}
        <SectionTitle
          title="About Akz IT Solutions"
          subtitle="We build digital products that help businesses grow, scale, and succeed."
        />

        {/* 🔥 STORY + HIGHLIGHTS */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Who We Are
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Akz IT Solutions is a modern IT services company focused on building 
              scalable, secure, and high-performance digital products. We work with 
              startups and enterprises to turn ideas into real-world applications.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Our development approach is based on agile methodology, ensuring 
              faster delivery, better collaboration, and continuous improvement.
            </p>

            {/* HIGHLIGHTS */}
            <div className="space-y-2 text-gray-600 dark:text-gray-300 text-sm mt-4">
              <p>✔ Custom Web & Mobile App Development</p>
              <p>✔ Scalable Cloud-Based Architecture</p>
              <p>✔ ROI-Focused Digital Solutions</p>
              <p>✔ Dedicated Expert Team</p>
            </div>
          </motion.div>

          {/* RIGHT STATS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: 5, label: "Years Experience" },
              { value: 100, label: "Projects Completed" },
              { value: 50, label: "Happy Clients" },
              { value: "24/7", label: "Support" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg 
                p-6 rounded-2xl shadow-md text-center border border-gray-200 dark:border-slate-700"
              >
                {typeof item.value === "number" ? (
                  <Counter target={item.value} />
                ) : (
                  <h3 className="text-3xl font-bold text-indigo-500">{item.value}</h3>
                )}
                <p className="text-sm text-gray-500 mt-2">{item.label}</p>
              </div>
            ))}
          </motion.div>

        </div>

        {/* 🔥 TIMELINE */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12">
            Our Journey
          </h3>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {[
              { year: "2019", text: "Started with a small team and big vision." },
              { year: "2021", text: "Expanded team and delivered multiple projects." },
              { year: "2023", text: "Focused on SaaS and cloud-based solutions." },
              { year: "2025", text: "Growing globally with strong client trust." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h4 className="text-indigo-500 font-bold text-lg">{item.year}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* 🔥 TEAM */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12">
            Core Team
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">

            {[
              { name: "Aditya Soni", role: "Founder" },
              { name: "Sachin Sonone", role: "CTO" },
              { name: "Maurizio Picone", role: "Operations (Europe)" },
              { name: "Anant Soni", role: "Board Member" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg 
                p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200 dark:border-slate-700"
              >
                {/* Avatar */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold">
                  {member.name.charAt(0)}
                </div>

                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
            ))}

          </div>
        </div>

      </Container>
    </section>
  );
};

export default AboutUs;