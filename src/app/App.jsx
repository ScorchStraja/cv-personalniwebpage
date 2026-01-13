import Layout from "./Layout";
import { useEffect, useRef } from "react";

function App() {
  const target = useRef({ x: 50, y: 50 });
  const current = useRef({ x: 50, y: 50 });
  const rafId = useRef(null);
  useEffect(() => {
    const link = document.getElementById("favicon");
    if (!link) return;

    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "/react.svg";

    let angle = 0;
    let raf = null;
    let running = false;

    const render = () => {
      if (!running) return;

      ctx.clearRect(0, 0, size, size);
      ctx.save();
      ctx.translate(size / 2, size / 2);
      ctx.rotate(angle);
      ctx.drawImage(img, -size / 2, -size / 2, size, size);
      ctx.restore();

      link.href = canvas.toDataURL("image/png");
      angle += 0.05;

      raf = requestAnimationFrame(render);
    };

    const start = () => {
      if (running) return;
      running = true;
      render();
    };

    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    };

    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    img.onload = () => start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

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
