import Link from 'next/link';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="section">
      <p>Homepage</p>
      <div className="p-3">
        <Link className="btn btn-secondary" href={'/products'}>
          Products
        </Link>
      </div>
    </div>
  );
}
