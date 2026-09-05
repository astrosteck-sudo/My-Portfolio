import { useEffect, useRef, useState } from "react";

const CountUp = ({ target, prefix = "", suffix = "", duration = 2000 }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let startTime = null;

            const step = timestamp => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              const current = Math.floor(progress * target);
              setValue(current);
              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };

            requestAnimationFrame(step);
            observer.unobserve(ref.current); // run once
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="hud-value">
      {prefix}{value}{suffix}
    </div>
  );
};

export default CountUp;
