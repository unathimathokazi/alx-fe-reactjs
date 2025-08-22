// src/App.jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Example</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}
