import React from "react";

const ServicesAction = () => {
  return (
    <section id="contact" className="py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold text-[var(--textPrimary)]">
        Ready to Take Your Social Media to the Next Level?
      </h2>
      <p className="text-lg mt-4 text-[var(--textSecondary)]">
        Contact us today to get started or learn more about how we can help you
        achieve your goals.
      </p>
      <button className="px-4 py-2 backdrop-blur-sm border bg-[var(--lineIndingo)] border-[var(--lineIndigo)] text-white mx-auto text-center rounded-full relative mt-4">
        <span>Get in Touch →</span>
        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[var(--linePink)] to-transparent" />
      </button>
    </section>
  );
};

export default ServicesAction;
