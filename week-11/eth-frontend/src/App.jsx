
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

async function getter() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const response = await data.json();
  return response;
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
}

function Posts() {
  const { data, isLoading, error } = useQuery({ queryKey: ["posts"], queryFn: getter });

  if (error) {
    return <div>Error while fetching</div>;
  }

  if (isLoading) {
    return <div>Loading. . .</div>;
  }

  return (
    <div>
      <ul>{data?.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
}

export default App;

