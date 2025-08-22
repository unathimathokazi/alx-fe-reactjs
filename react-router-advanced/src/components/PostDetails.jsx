import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();

  return <h2>Post Details for Post ID: {id}</h2>;
}
