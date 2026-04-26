import LeftSideBar from "@/Components/Homepage/news/LeftSideBar";
import RightSideBar from "@/Components/Homepage/news/RightSideBar";

async function getCatagories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}
async function getNewsByCatagoryId(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const catagories = await getCatagories();
  // console.log(catagories);
  const news = await getNewsByCatagoryId("04");
  console.log("News:", news);
  return (
    <div className="grid grid-cols-12 gap-5 mt-10">
      <div className="col-span-3">
        <LeftSideBar catagories={catagories} activeId={null} />
      </div>
      <div className="col-span-6">
        <h2 className=" font-semibold">Dragon News Home</h2>
      </div>
      <div className="col-span-3">
        <h2 className=" font-semibold">Login With</h2>
        <div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
