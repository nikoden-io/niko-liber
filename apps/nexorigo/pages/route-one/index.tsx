import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const index: FC = () => {
  return (
    <div>
      <p>ROUTE ONE INDEX</p>
      <Image
        src="/static/eop-avatar.jpg"
        alt="eop-logo"
        height={150}
        width={150}
      />
      <Link href="/route-one/route-two">Route Two</Link>
      <Link href="/route-one/145874">Route 145874</Link>
    </div>
  );
};

export default index;
