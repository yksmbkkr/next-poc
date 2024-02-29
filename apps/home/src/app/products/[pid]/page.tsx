import Link from 'next/link';

export default function PidPage({ params }: { params: { pid: string } }) {
  return (
    <div>
      <p>
        Go to
        <span>
          <Link
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            href={'/products'}
          >
            {' '}
            Products
          </Link>
        </span>
      </p>
      <p>Product details for: Product-{params.pid}</p>
    </div>
  );
}
