async function getPostById(postId: string) {
  const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    method: "GET",
    next: {
      revalidate: 5000,
    },
  });

  return response.json();
}

export default async function PostID({ params }: any) {
  const { post } = await getPostById(params.id);

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </main>
  );
}
