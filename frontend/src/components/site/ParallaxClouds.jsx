import React, { useEffect, useRef } from "react";

// Fixed, parallax-scrolling Japanese cloud ornaments. They live once in the SPA
// (mounted in App.js) and stay in the same viewport position on every section,
// only shifting subtly as the user scrolls for a gentle depth effect.
const ParallaxClouds = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    let rafId = null;
    let targetY = 0;
    let currentY = 0;

    const onScroll = () => {
      targetY = window.scrollY;
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const tick = () => {
      // Smooth follow so the movement feels organic
      currentY += (targetY - currentY) * 0.12;

      if (leftRef.current) {
        // Left cloud drifts down slower + a touch of horizontal sway
        const y = currentY * 0.04;
        const x = Math.sin(currentY / 240) * 10;
        const r = Math.sin(currentY / 600) * 2;
        leftRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${r}deg)`;
      }
      if (rightRef.current) {
        // Right cloud drifts up slightly (negative factor) for counter motion
        const y = -currentY * 0.03;
        const x = Math.cos(currentY / 260) * 12;
        const r = Math.cos(currentY / 600) * -2;
        rightRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${r}deg)`;
      }

      if (Math.abs(targetY - currentY) > 0.3) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial kick
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* LEFT cloud: sits at bottom-left of viewport, drifts gently */}
      <img
        ref={leftRef}
        src="/assets/cloud-left.png"
        alt=""
        className="absolute select-none will-change-transform"
        style={{
          left: "-60px",
          bottom: "-40px",
          width: "clamp(280px, 28vw, 520px)",
          opacity: 0.55,
          filter: "drop-shadow(0 14px 28px rgba(0,0,0,0.35))",
          transition: "opacity 400ms ease",
        }}
      />

      {/* RIGHT cloud: sits at top-right of viewport, drifts opposite */}
      <img
        ref={rightRef}
        src="/assets/cloud-right.png"
        alt=""
        className="absolute select-none will-change-transform"
        style={{
          right: "-80px",
          top: "-40px",
          width: "clamp(300px, 30vw, 560px)",
          opacity: 0.5,
          filter: "drop-shadow(0 14px 28px rgba(0,0,0,0.35))",
          transition: "opacity 400ms ease",
        }}
      />
    </div>
  );
};

export default ParallaxClouds;
