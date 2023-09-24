import "../about.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>this is my about header</header>
      {children}
    </div>
  );
}
