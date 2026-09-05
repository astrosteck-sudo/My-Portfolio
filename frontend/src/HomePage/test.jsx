import { useEffect, useRef, useState } from "react";

export function Counter({ target, duration = 2000, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div className="counter-card">
      <span ref={ref} className="counter-number">{count}+</span>
      {label && <p className="counter-label">{label}</p>}
    </div>
  );
}

export default function Stats() {
  return (
    <>
      <style>{`
        .stats-section {
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 4rem 2rem;
          background: #0a0a0a;
        }

        .counter-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 2.5rem;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          position: relative;
          overflow: hidden;
          min-width: 160px;
        }

        .counter-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--glow);
          opacity: 0.08;
          z-index: 0;
        }

        .counter-card:nth-child(1) { --glow: linear-gradient(135deg, #cc5500, #ff8c00); }
        .counter-card:nth-child(2) { --glow: linear-gradient(135deg, #00cfff, #0077ff); }
        .counter-card:nth-child(3) { --glow: linear-gradient(135deg, #a855f7, #ec4899); }
        .counter-card:nth-child(4) { --glow: linear-gradient(135deg, #22c55e, #16a34a); }

        .counter-number {
          font-size: 3rem;
          font-weight: 800;
          background: var(--glow);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 1;
          line-height: 1;
        }

        .counter-label {
          margin-top: 0.5rem;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          position: relative;
          z-index: 1;
        }
      `}</style>

      <section className="stats-section">
        <Counter target={500}  label="Clients"   />
        <Counter target={1200} label="Projects"  />
        <Counter target={99}   label="Satisfaction" />
        <Counter target={50}   label="Awards"    />
      </section>
    </>
  );
}