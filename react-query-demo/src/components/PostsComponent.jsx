import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "../components/PostsComponent";

const queryClient = new QueryClient();

test("renders posts and allows refetch", async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );

  // Check loading
  expect(screen.getByText(/Loading posts/i)).toBeInTheDocument();

  // Wait for posts to appear
  await waitFor(() => expect(screen.getByText(/Posts/i)).toBeInTheDocument());

  // Check if first post title appears
  expect(screen.getAllByRole("listitem").length).toBeGreaterThan(0);

  // Refetch button works
  fireEvent.click(screen.getByText(/Refetch Posts/i));
});
