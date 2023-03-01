/* SSG with external data
 * GET STATIC PROPS
 * Rules:
 * 1. Can only be exported from a page file
 * 2. meant for all routes
 * Characteristics:
 * 1. Only runs at build time
 * 2. Only runs on server side
 * 3. Won't be included in the JS bundle
 * 4. On dev runs on client and server side
 */

import table from '../../data/dummy.json';

export const getStaticProps = async () => {
  console.log('Only log on server side');
  return {
    props: {
      table,
    },
  };
};

const SsgRender = (props) => {
  console.log(props);

  return (
    <div>
      <p>SSG RENDER</p>
    </div>
  );
};

export default SsgRender;
