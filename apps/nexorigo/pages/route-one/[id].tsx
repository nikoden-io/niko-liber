import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

/* SSG with external data
 * GET STATIC PATHS
 * Rules:
 * 1. Can only be exported from a page file
 * 2. meant for all routes
 * 3. Page must also implement getStaticProps
 * Characteristics:
 * 1. Only runs at build time
 * 2. Only runs on server side
 * 3. Won't be included in the JS bundle
 * 4. On dev runs on client and server side
 */

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '123' } }, { params: { id: '456' } }],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      table: params.id,
    },
  };
};

interface iProps {
  table: string;
}

const RouteId: React.FC<iProps> = (props) => {
  const router = useRouter();

  // Create a loading component if fallback is true and triggered
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>ROUTE ID</p>
      <p>{router.query.id}</p>
      <p>Table: {props.table}</p>
      <Link href="/route-one">Route One</Link>
      <Link href="/route-one/145874">Route 145874</Link>
      <Link href="/route-one">Route One</Link>
    </div>
  );
};

export default RouteId;
