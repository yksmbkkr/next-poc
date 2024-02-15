import { lazy, Suspense } from 'react';
typeof window !== 'undefined' && console.log(window.checkout);
const RemoteTitle = lazy(() => import('checkout/title'));

export default function AppRouterPage() {
  return (
    <>
      <p>APP ROUTER PAGE</p>
      <Suspense fallback={'loading remote title'}>
        <RemoteTitle />
      </Suspense>
    </>
  );
}
