import React, { useEffect, useRef } from "react";

// Fixed, parallax-scrolling Japanese cloud ornaments. They live once in the SPA
// (mounted in App.js) and stay at the BOTTOM corners of the viewport, with ~40%
// of each cloud pushed outside the viewport so they look like they are "being
// born" from the lower-left and lower-right corners of the page.
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
        // Rises gently into view + subtle horizontal sway and rotation
        const y = -currentY * 0.04;
        const x = Math.sin(currentY / 240) * 10;
        const r = Math.sin(currentY / 600) * 2;
        // Base offset pushes ~40% of the cloud outside the bottom-left corner
        leftRef.current.style.transform =
          `translate3d(calc(-40% + ${x}px), calc(40% + ${y}px), 0) rotate(${r}deg)`;
      }
      if (rightRef.current) {
        // Rises slower with opposite sway for counter motion
        const y = -currentY * 0.03;
        const x = Math.cos(currentY / 260) * 12;
        const r = Math.cos(currentY / 600) * -2;
        // Base offset pushes ~40% of the cloud outside the bottom-right corner
        rightRef.current.style.transform =
          `translate3d(calc(40% + ${x}px), calc(40% + ${y}px), 0) rotate(${r}deg)`;
      }

      if (Math.abs(targetY - currentY) > 0.3) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial kick so transforms are applied on mount
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
      {/* LEFT cloud: anchored at bottom-left, ~40% spills outside the corner */}
      <img
        ref={leftRef}
        src="/assets/cloud-left.png"
        alt=""
        className="absolute select-none will-change-transform"
        style={{
          left: 0,
          bottom: 0,
          width: "clamp(1120px, 112vw, 2080px)",
          opacity: 0.45,
          filter: "drop-shadow(0 14px 28px rgba(0,0,0,0.4))",
          transition: "opacity 400ms ease",
        }}
      />

      {/* RIGHT cloud: anchored at bottom-right, ~40% spills outside the corner */}
      <img
        ref={rightRef}
        src="/assets/cloud-right.png"
        alt=""
        className="absolute select-none will-change-transform"
        style={{
          right: 0,
          bottom: 0,
          width: "clamp(1200px, 120vw, 2240px)",
          opacity: 0.4,
          filter: "drop-shadow(0 14px 28px rgba(0,0,0,0.4))",
          transition: "opacity 400ms ease",
        }}
      />
    </div>
  );
};

export default ParallaxClouds;
