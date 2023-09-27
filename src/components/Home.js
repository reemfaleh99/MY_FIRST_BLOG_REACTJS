import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

function Home() {
  const { isPending, data: blogs } = useFetch("http://localhost:8000/blogss");

  return (
    <div className="home">
      {isPending && <h5>Loading...</h5>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;
