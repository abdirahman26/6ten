import React from "react";
import Card from "../../../components/ui/card";

const ServicesAction = () => {
    return (
        <div className="flex items-center justify-center pt-[3rem] pb-[5rem] p-4">
            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                <Card title="Social Media Strategy" content="Develop a comprehensive strategy tailored to your audience and goals." />
                <Card title="Content Creation" content="Create engaging content that resonates with your audience and boosts your brand." />
            </div>
        </div>
    );
}

export default ServicesAction;
