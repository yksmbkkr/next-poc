import Link from 'next/link';

export default async function PriceBreakdown() {
  return (
    <div>
      <p>
        Go to
        <span>
          <Link
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href={'/checkout'}
          >
            {' '}
            Checkout
          </Link>
        </span>
      </p>
      <p>Price Breakdown</p>
    </div>
  );
}
