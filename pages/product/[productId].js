import Head from "next/head";
import React from "react";

const Product = ({ productId, title }) => {
  console.log("what is title", title);
  return (
    <>
      <Head>
        <title>{title} - Custom title</title>
        <meta property="og:title" content={title} />
      </Head>
      <div>Product Id: {productId}</div>
      <div>Product title: {title}</div>
    </>
  );
};

export async function getStaticProps({ params = {} } = {}) {
  return {
    props: {
      productId: params.productId,
      title: `Product ${params.productId}`,
    },
  };
}

export async function getStaticPaths() {
  const paths = [...new Array(5)].map((_, index) => {
    return {
      params: {
        productId: `${index + 1}`, // Convert index to string
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default Product;
