import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Counter = ({ target = 100, duration = 1000 }) => {
  const [count, setCount] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.5, // 50% visible hone pe start
    triggerOnce: false, // 🔥 important (baar baar chalega)
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return (
    <h3 ref={ref} className="text-xl md:text-3xl font-bold text-indigo-600">
      {count}+
    </h3>
  );
};

export default Counter;