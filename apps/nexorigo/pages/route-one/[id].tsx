import { useRouter } from 'next/router';
import React, { FC } from 'react';
import Link from 'next/link';

const RouteId: FC = (props) => {
  const router = useRouter();

  return (
    <div>
      <p>ROUTE ID</p>
      <p>{router.query.id}</p>
      <Link href="/route-one">Route One</Link>
      <Link href="/route-one/145874">Route 145874</Link>
      <Link href="/route-one">Route One</Link>
    </div>
  );
};

export default RouteId;
