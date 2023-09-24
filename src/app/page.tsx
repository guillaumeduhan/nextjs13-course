import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My page title",
  description: "This a description",
  openGraph: {
    title: "My page title",
    description: "This a description",
    url: "mywebsite.com",
    siteName: "Codewithguillaume",
    images: [
      {
        url: "/mywebsite.png",
        width: 1260,
        height: 800,
      }
    ]
  },
};

export default function Home() {
  return <main>Main page</main>;
}
