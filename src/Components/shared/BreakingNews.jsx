import React from "react";
import Marquee from "react-fast-marquee";
const tabs = [
  {
    id: 1350330435,
    newsTitle: "Breaking: Global Leaders Meet for Climate Summit",
  },
  {
    id: 1350330429,
    newsTitle: "International Politics: UN Debates New Peace Resolution",
  },
  {
    id: 1350330458,
    newsTitle: "World Economy: Oil Prices Rise Amid Regional Tensions",
  },
  {
    id: 1350330409,
    newsTitle:
      "Sports: Underdog Team Wins in Last-Minute Championship Thriller",
  },
  {
    id: 1350330454,
    newsTitle: "Gaming: Major Studio Announces Next-Gen Open World RPG",
  },
  {
    id: 1350330480,
    newsTitle: "Esports: Regional Finals Set New Streaming Record",
  },
  {
    id: 1350330521,
    newsTitle: "Technology: AI Startup Unveils Multilingual Assistant",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex gap-3 bg-gray-300 my-5">
      <button className="btn btn-soft bg-pink-600 text-white min-w-fit m-2 p-2">
        Latest News
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        {tabs.map((tab) => (
          <p key={tab.id} className="mx-2">
            {tab.newsTitle}
            <span> . </span>
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
