
import { PropertyProps } from "@/interfaces";
import React, { useState } from "react";

const PropertyDescription: React.FC<{property: PropertyProps}> = ({property}) => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "What we offer", "Reviews", "About host"];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      {/* Tabs and Published Date */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-medium text-sm ${
                activeTab === tab
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <span className="text-sm text-gray-400">
          Published July 01, 2024
        </span>
      </div>

      {/* Content Section */}
      {activeTab === "Description" && (
        <div className="mt-6 text-gray-700 leading-relaxed">
          <p>
            Feel like exploring the Dominican? Start the day with a hike on one
            of Playa Moron’s many trails. Weave your way around the gated
            community to find secluded sandy coves for swimming and
            paddleboarding. When you’re ready to chill with friends, the beach
            house pool awaits. Spend the night entertaining in the outdoor
            lounge, sipping drinks in the hot tub, and gazing out over
            incredible ocean views.
          </p>

          <h4 className="mt-6 font-semibold text-gray-900">The space</h4>
          <p className="uppercase text-sm text-gray-500 mt-2">
            BEDROOM & BATHROOM
          </p>
          <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
            <li>
              Bedroom 1 - Primary: King size bed, Ensuite bathroom with
              stand-alone rain shower, Dual vanity, Walk-in closet, Television,
              Sofa, Deck, Balcony, Ocean view
            </li>
          </ul>

          <button className="mt-6 flex items-center text-green-600 font-medium hover:underline">
            Read more <span className="ml-1 text-lg">→</span>
          </button>
        </div>
      )}

      {activeTab === "What we offer" && (
        <div className="my-4">
            <h2 className="mt-4 text-2xl font-semibold">What this place offers</h2>
            <ul className="flex flex-wrap space-x-4">
              {property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded-md">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
      )}

      {activeTab === "Reviews" && (
        <div className="mt-6 text-gray-700">Reviews will be displayed here...</div>
      )}

      {activeTab === "About host" && (
        <div className="mt-6 text-gray-700">Host details and bio go here...</div>
      )}
    </div>
  );
};

export default PropertyDescription;
