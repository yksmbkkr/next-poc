import Link from 'next/link';

export default async function Products() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <div className="section">
        <p>Products Page</p>
        <p>
          Go to
          <span>
            <Link
              className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              href={'/'}
            >
              {' '}
              Home
            </Link>
          </span>
        </p>
      </div>
      <div className="section">
        <div className="d-flex flex-column">
          <div className="p-3">
            <Link className="btn btn-secondary" href={'/products/1'}>
              Product 1
            </Link>
          </div>
          <div className="p-3">
            <Link className="btn btn-secondary" href={'/products/2'}>
              product 2
            </Link>
          </div>
          <div className="p-3">
            <Link className="btn btn-secondary" href={'/products/3'}>
              Product 3
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
