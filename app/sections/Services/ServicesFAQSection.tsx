import React from "react";

const FAQSection = () => {
    return (
        <section className="py-12 px-4">
            <div className="text-center">
                <h2 className="text-3xl font-semibold mb-8 text-[var(--textPrimary)]">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-[var(--textPrimary)]">What services do you offer?</h3>
                        <p className="mt-2 text-gray-700 text-[var(--textSecondary)]">
                            We offer a comprehensive suite of services including social media strategy development, content creation, audience engagement, analytics and reporting, and brand partnerships. Our goal is to help you enhance your online presence and achieve your social media objectives.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-[var(--textPrimary)]">How can I get started?</h3>
                        <p className="mt-2 text-gray-700 text-[var(--textSecondary)]">
                            To get started, simply reach out to us through our contact form or email us at contact@youragency.com. We will schedule a consultation to discuss your needs and tailor a strategy that aligns with your goals.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-[var(--textPrimary)]">What are your pricing plans?</h3>
                        <p className="mt-2 text-gray-700 text-[var(--textSecondary)]">
                            Our pricing varies depending on the services required and the scope of the project. We offer customizable packages to suit different needs and budgets. Contact us for a detailed quote and we’ll work with you to create a plan that fits your requirements.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-[var(--textPrimary)]">How do you measure the success of your campaigns?</h3>
                        <p className="mt-2 text-gray-700 text-[var(--textSecondary)]">
                            We measure success through various metrics such as engagement rates, follower growth, content reach, and conversion rates. We provide detailed reports and insights to help you understand the impact of our campaigns and make data-driven decisions.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-[var(--textPrimary)]">Can I switch services or packages later on?</h3>
                        <p className="mt-2 text-gray-700 text-[var(--textSecondary)]">
                            Yes, you can switch services or packages as your needs evolve. We offer flexible options and are happy to adjust our services to better meet your goals. Contact us to discuss any changes and we’ll make sure to accommodate your new requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
