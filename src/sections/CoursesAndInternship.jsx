// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";
import Container from "../components/common/Container";
import CourseCard from "../components/common/CourseCard";

const Courses = () => {
  const coursesData = [
    {
      title: "MERN Stack Development",
      description:
        "Master full-stack development using MongoDB, Express, React, and Node.js. Build real-world projects like dashboards, APIs, and scalable web applications.",
      rating: "4.8",
      duration: "3 Months",
      image: "/images/mern.webp",
    },
    {
      title: "Frontend Development",
      description:
        "Learn HTML, CSS, JavaScript, React, and modern UI frameworks. Build responsive and user-friendly interfaces with real-world design practices.",
      rating: "4.7",
      duration: "2 Months",
      image: "/images/frontend.webp",
    },
    {
      title: "Backend Development",
      description:
        "Understand server-side development, APIs, authentication, databases, and scalable architecture using Node.js and Express.",
      rating: "4.9",
      duration: "3 Months",
      image: "/images/backend.webp",
    },
  ];

  return (
    <section id="courses" className="scroll-mt-20 py-20 relative overflow-hidden">

      {/* 🔥 Background */}
      <div className="absolute inset-0 -z-10 
        bg-gradient-to-br 
        from-cyan-50 via-white to-indigo-50 
        dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      </div>

      <Container>

        {/* TITLE */}
        <SectionTitle
          title="Courses & Internship Programs"
          subtitle="Industry-focused training programs designed to make you job-ready with real-world experience"
        />

        {/* COURSES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {coursesData.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>

        {/* 🔥 INTERNSHIP SECTION */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Internship Program
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Our internship program is designed to give you real industry exposure.
              You will work on live projects, collaborate with experienced developers,
              and gain practical knowledge that goes beyond theoretical learning.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              We focus on hands-on training, problem-solving, and building a strong
              portfolio that helps you stand out in the job market.
            </p>

            {/* HIGHLIGHTS */}
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <p>✔ Work on Real Client Projects</p>
              <p>✔ Industry Mentorship</p>
              <p>✔ Certificate of Completion</p>
              <p>✔ Performance-based Hiring Opportunity</p>
            </div>
          </motion.div>

          {/* RIGHT BOX */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg 
            p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700"
          >
            <h4 className="text-xl font-semibold mb-4">
              Why Choose Our Program?
            </h4>

            <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
              <li>🚀 Job-ready curriculum</li>
              <li>💻 Hands-on coding experience</li>
              <li>📂 Portfolio development</li>
              <li>👨‍🏫 Expert guidance & mentorship</li>
              <li>📈 Career support & placement guidance</li>
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-block mt-6 bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition"
            >
              Apply for Internship →
            </a>
          </motion.div>

        </div>

      </Container>
    </section>
  );
};

export default Courses;