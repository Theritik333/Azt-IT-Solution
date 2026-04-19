// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import { FaCode, FaMobileAlt, FaCloud, FaDatabase } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "We build fast, responsive, and SEO-friendly websites using modern technologies like React, Next.js, and Node.js. Our focus is on performance, scalability, and user experience.",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    description:
      "Create powerful Android and iOS apps with smooth UI and high performance. We develop scalable mobile solutions tailored to your business needs.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description:
      "Deploy and scale your applications securely on cloud platforms. We ensure high availability, performance, and cost-efficient infrastructure.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "We design and manage optimized database systems ensuring data security, performance, and seamless integration with your applications.",
  }
];

const Services = () => {
  return (
    <section id="services" className="scroll-mt-20 py-20 relative overflow-hidden">

      {/* 🔥 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 -z-10 
        bg-gradient-to-br 
        from-indigo-100 via-purple-100 to-cyan-100 
        dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      </div>

      <Container>

        {/* TITLE */}
        <SectionTitle
          title="Our Services"
          subtitle="We deliver powerful IT solutions that help businesses grow faster and smarter"
        />

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg 
              p-6 rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 
              dark:border-slate-700 transition-all duration-300 hover:-translate-y-2"
            >

              {/* ICON BOX */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg 
              bg-indigo-100 dark:bg-slate-700 text-indigo-500 mb-4 
              group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* TAG */}
              <span className="text-xs text-indigo-500 font-medium">
                Professional Service
              </span>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-indigo-500 transition">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <button className="mt-4 text-indigo-500 text-sm font-medium hover:underline">
                Learn More →
              </button>

            </motion.div>
          ))}

        </div>

        {/* 🔥 SECTION CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block bg-indigo-500 text-white px-8 py-3 rounded-lg 
            hover:bg-indigo-600 transition shadow-md hover:shadow-lg"
          >
            Start Your Project →
          </a>
        </div>

      </Container>
    </section>
  );
};

export default Services;