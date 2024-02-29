export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="section p-2">
      <div className="row">
        <div className="col-2">
          <p>checkout Sidebar</p>
        </div>
        <div className="col-10">{children}</div>
      </div>
    </div>
  );
}
