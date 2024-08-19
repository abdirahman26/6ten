import React from "react";
import { InfiniteMovingCards } from "@components/MovingCards";
import ServicesAction from "@/sections/Services/ServicesAction";
// The about us page
function About() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 text-[var(--textPrimary)]">
            6-TEN CONNECTS BRANDS TO MILLENNIAL, MUSLIM CREATORS.
          </h1>
          <p className="text-base mt-4 pt-7 text-[var(--textSecondary)]">
            We are a team of professionals who are dedicated to providing the
            best services to our clients. Our goal is to help you achieve your
            goals and dreams. We have a team of experts who are ready to help
            you with any project you have in mind. Contact us today to learn
            more about our services. We are a Muslim-owned company that is
            dedicated to helping Muslim creators find their audience. We are a
            team of professionals who are dedicated to providing the best
            services to our clients. Our goal is to help you achieve your goals
            and dreams. We have a team of experts who are ready to help you with
            any project you have in mind. Contact us today to learn more about
            our services.
          </p>
        </div>
      </div>
      <ServicesAction
        header="Here Are Some Inspiring Testimonials to Get You started."
        message="Embark on your journey by taking and the first step."
        button="Reach Out →"
      />
      <InfiniteMovingCards />
    </>
  );
}

export default About;
