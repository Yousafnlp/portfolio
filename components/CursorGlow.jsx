"use client";
import React, { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame;
    const handleMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!glowRef.current) return;
        glowRef.current.style.opacity = "1";
        glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255, 255, 255, 0.06), transparent 40%)`;
        if (dotRef.current) {
          dotRef.current.style.opacity = "1";
          dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        }
      });
    };
    const handleLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-500"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[100] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] opacity-0 transition-opacity duration-300"
      />
    </>
  );
};

export default CursorGlow;
