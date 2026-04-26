import Link from "next/link";
import React from "react";

const LeftSideBar = ({ catagories, activeId }) => {
  // console.log(catagories);
  // console.log("Active ID:", activeId);

  return (
    <div>
      <h2 className=" text-lg font-semibold mb-5">All Categories</h2>
      <div className="flex flex-col gap-3">
        {catagories.news_category.map((catagory) => (
          <Link
            href={`/category/${catagory.category_id}`}
            key={catagory.category_id}
            className={`{catagory.category_id === activeId && "bg-slate-100 font-bold" } bg-gray-100 border block border-gray-300 cursor-pointer p-2 rounded-md`}
          >
            {catagory.category_name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
