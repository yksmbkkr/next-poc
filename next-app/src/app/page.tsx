import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <section className="section">
        <Link className="btn btn-primary" href="/company">
          Company Home
        </Link>
      </section>
    </div>
  );
}
