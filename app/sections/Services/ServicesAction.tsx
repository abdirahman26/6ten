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
      <a
        href="mailto:contact@youragency.com"
        className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg bg-gradient-to-r from-[var(--linePurple)] to-[var(--lineIndigo)]"
      >
        Get in Touch
      </a>
    </section>
  );
};

export default ServicesAction;
