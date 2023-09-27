import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { isPending, data: blog } = useFetch(
    "http://localhost:8000/blogss/" + id
  );
  const history = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogss/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>DELETE</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
