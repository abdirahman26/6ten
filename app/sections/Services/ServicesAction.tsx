import React from "react";
import Link from "next/link";

type ServicesActionProps = {
  header: string;
  message: string;
  button: string;
};

const ServicesAction = ({ header, message, button }: ServicesActionProps) => {
  return (
    <section id="contact" className="py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold text-[var(--textPrimary)]">
        {header}
      </h2>
      <p className="text-lg mt-4 text-[var(--textSecondary)]">{message}</p>
      <Link href="/contact">
        <button className="px-4 py-2 backdrop-blur-sm border bg-[var(--lineIndingo)] border-[var(--lineIndigo)] text-white mx-auto text-center rounded-full relative mt-4">
          <span>{button}</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-[var(--linePink)] to-transparent" />
        </button>
      </Link>
    </section>
  );
};

export default ServicesAction;
