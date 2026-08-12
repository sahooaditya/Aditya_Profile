import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollProgress.css";

const ScrollProgress = () => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const progress = progressRef.current;
    const percent = percentRef.current;
    const showLoader = () => gsap.to(loader, { autoAlpha: 1, y: 0, duration: 0.22, ease: "power2.out" });
    const hideLoader = () => gsap.to(loader, { autoAlpha: 0, y: -12, duration: 0.22, ease: "power2.out" });

    gsap.set(loader, { autoAlpha: 0, y: -12 });

    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const currentProgress = Math.round(self.progress * 100);
        gsap.set(progress, { scaleX: self.progress });
        percent.textContent = `${currentProgress}%`;

        if (self.progress <= 0.01 || self.progress >= 0.99) {
          hideLoader();
        } else {
          showLoader();
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="scroll-loader" ref={loaderRef} aria-hidden="true">
      <span className="scroll-loader-track">
        <span className="scroll-loader-bar" ref={progressRef} />
      </span>
      <strong ref={percentRef}>0%</strong>
    </div>
  );
};

export default ScrollProgress;
