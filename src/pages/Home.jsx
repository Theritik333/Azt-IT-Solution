import { lazy, Suspense } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Loader from "../components/common/Loader";

const Hero = lazy(() => import("../sections/Hero"));
const Services = lazy(() => import("../sections/Services"));
const About = lazy(() => import("../sections/AboutUs"));
const Courses = lazy(() => import("../sections/CoursesAndInternship"));
const Contact = lazy(() => import("../sections/Contact"));

const Home = () => {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Services />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Courses />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Home;