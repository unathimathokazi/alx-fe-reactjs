import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is the content of blog post {id}.</p>
    </div>
  );
}
