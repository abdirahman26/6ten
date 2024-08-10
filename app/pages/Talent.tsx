"use client";

import React, { useEffect, useState } from 'react';
import { getTalentList } from '../functions/data/talent';

interface Talent {
  name: string;
  description: string;
}

const Talent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [talentList, setTalentList] = useState<Talent[]>([]);

  useEffect(() => {
    // Fetch talent list from the server
    const fetchTalentList = async () => {
      const response = await getTalentList();
      
      // Convert object to array
      const talentsArray: Talent[] = Object.values(response);
      
      setTalentList(talentsArray);
      setLoading(false);
    };

    fetchTalentList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      {/* Large Card at the Top */}
      <div className="bg-[#f6ffed] shadow-lg rounded-lg p-6 mb-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Top Talent</h1>
        <p className="text-gray-700">
          This is a large card that represents the top talent. You can include
          more information here, like a description, images, or any other
          relevant details.
        </p>
      </div>

      {/* Cards Below */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {talentList.map((talent, index) => (
          <div
            key={index}
            className="bg-[#f6ffed] shadow-lg rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{talent.name}</h2>
            <p className="text-gray-600">{talent.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Talent;