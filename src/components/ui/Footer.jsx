import Container from "../common/Container";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-20">

      {/* 🔥 CTA STRIP */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white py-10">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div>
              <h2 className="text-2xl font-semibold">
                Ready to build your next project?
              </h2>
              <p className="text-sm opacity-90 mt-1">
                Let’s work together and turn your ideas into reality.
              </p>
            </div>

            <a
              href="#contact"
              className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Get Started <FaArrowRight />
            </a>

          </div>
        </Container>
      </div>

      {/* 🔥 MAIN FOOTER */}
      <div
        className="pt-16 pb-8 border-t border-gray-300 dark:border-slate-700 
        bg-gradient-to-b 
        from-gray-100 via-gray-200 to-gray-300 
        dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      >
        <Container>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

            {/* COMPANY */}
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Akz IT
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm leading-relaxed">
                We deliver scalable, secure, and high-performance IT solutions
                that help businesses grow in the digital era.
              </p>

              {/* SOCIAL */}
              <div className="flex gap-3 mt-5">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="p-2 bg-white dark:bg-slate-800 rounded-full shadow 
                      hover:bg-indigo-500 hover:text-white transition cursor-pointer"
                    >
                      <Icon size={14} />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li><a href="#home" className="hover:text-indigo-500">Home</a></li>
                <li><a href="#services" className="hover:text-indigo-500">Services</a></li>
                <li><a href="#about" className="hover:text-indigo-500">About</a></li>
                <li><a href="#courses" className="hover:text-indigo-500">Courses</a></li>
                <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Cloud Solutions</li>
                <li>UI/UX Design</li>
                <li>SaaS Platforms</li>
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Subscribe to get latest updates, courses, and tech insights.
              </p>

              <form className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-lg outline-none bg-transparent"
                />
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>

          {/* 🔥 BOTTOM */}
          <div className="border-t border-gray-300 dark:border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-gray-600 dark:text-gray-300 text-center md:text-left">
              © {new Date().getFullYear()} Akz IT Solutions. All rights reserved.
            </p>

            <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
              <a href="#" className="hover:text-indigo-500">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-500">Terms & Conditions</a>
            </div>

          </div>

        </Container>
      </div>

    </footer>
  );
};

export default Footer;