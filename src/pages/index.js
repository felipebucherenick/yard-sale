import ProductsList from '@containers/ProductsList';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yard Sale</title>
      </Head>
      <ProductsList />
    </>
  );
}
