// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const Hero = ({
  showImage = true,
  imagePosition = "right",
  imageUrl = "/images/it.webp",
}) => {
  return (
    <section id="home" className="scroll-mt-20 pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-[420px] h-[420px] bg-indigo-500/20 blur-3xl rounded-full"></div>
      <div className="pointer-events-none absolute -bottom-24 -left-20 w-[420px] h-[420px] bg-purple-500/20 blur-3xl rounded-full"></div>

      <Container>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* IMAGE LEFT */}
          {showImage && imagePosition === "left" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full order-1 md:order-none"
            >
              <img
                src={imageUrl}
                alt="IT Solutions"
                className="w-full max-h-[420px] object-cover rounded-2xl shadow-2xl 
                hover:scale-[1.02] transition duration-300"
              />
            </motion.div>
          )}

          {/* TEXT */}
          <div className="order-2 md:order-none">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
            bg-indigo-100 dark:bg-slate-800 text-indigo-600 text-xs mb-4">
              🚀 Trusted IT Partner
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Empowering Businesses
              </span>
              <br />
              with Smart IT Solutions
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 mt-5 md:mt-6 text-sm md:text-lg max-w-lg"
            >
              We design, develop, and scale modern digital products—fast, secure, 
              and built for growth.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-6 md:mt-8"
            >
              <a href="#contact">
                <Button>Start Your Project</Button>
              </a>

              <a
                href="#services"
                className="px-6 py-3 border border-gray-300 dark:border-slate-600 rounded-lg 
                hover:bg-gray-100 dark:hover:bg-slate-800 transition"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Trust + Stats */}
            <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-gray-500">
              <span>⭐ 4.8/5 Rating</span>
              <span>•</span>
              <span>100+ Projects</span>
              <span>•</span>
              <span>50+ Clients</span>
            </div>

          </div>

          {/* IMAGE RIGHT */}
          {showImage && imagePosition === "right" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <img
                src={imageUrl}
                alt="IT Solutions"
                className="w-full max-h-[420px] object-cover rounded-2xl shadow-2xl 
                hover:scale-[1.02] transition duration-300"
              />
            </motion.div>
          )}

        </div>
      </Container>
    </section>
  );
};

export default Hero;