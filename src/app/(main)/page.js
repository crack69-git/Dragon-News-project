async function getCatagories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const catagories = await getCatagories();
  console.log(catagories);
  return (
    <div className="grid grid-cols-12 gap-5 mt-10">
      <div className="col-span-3">
        <h2 className=" text-lg font-semibold mb-5">All Categories</h2>
        <ul>
          {catagories.news_category.map((catagory) => (
            <li
              className="bg-slate-100 p-2 rounded-md text-center text-[16px]"
              key={catagory.category_id}
            >
              {catagory.category_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-6">
        <h2 className=" font-semibold">Dragon News Home</h2>
      </div>
      <div className="col-span-3">
        <h2 className=" font-semibold">Login With</h2>
      </div>
    </div>
  );
}
