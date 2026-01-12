import Layout from "./Layout";
import { useEffect, useRef } from "react";

function App() {
  const target = useRef({ x: 50, y: 50 });
  const current = useRef({ x: 50, y: 50 });
  const rafId = useRef(null);

  useEffect(() => {
    const root = document.documentElement;

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      target.current.x = x;
      target.current.y = y;
    };

    const animate = () => {
      const speed = 0.5; // manji = sporije/“teže”, veći = brže

      current.current.x += (target.current.x - current.current.x) * speed;
      current.current.y += (target.current.y - current.current.y) * speed;

      root.style.setProperty("--cursor-x", `${current.current.x}%`);
      root.style.setProperty("--cursor-y", `${current.current.y}%`);

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <Layout />;
}

export default App;
