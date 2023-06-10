import React from "react";
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
};

const SEO = (props: SEOProps) => {
  return (
    // <SuperSEO
    //   title={props.title}
    //   description={props.description}
    //   lang="en"
    //   robots="index, follow"
    //   openGraph={{
    //     ogTitle: props.title,
    //     ogDescription: props.description,
    //     ogType: "website",
    //     ogSiteName: "Hooshu&apos;s Static Interactive CYOAs",
    //   }}
    //   twitter={{
    //     twitterSummaryCard: {
    //       summaryCardImage: props?.image,
    //       summaryCardImageAlt: props.title,
    //     },
    //   }}
    // >
    //   <meta name="keywords" content="superpowers, cyoa, magic, ryoa, interactive cyoa, cyoa build, Hooshu" />
    //   <meta name="author" content="Hooshu" />
    //   <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    //   {props.children}
    // </SuperSEO>
    <Helmet prioritizeSeoTags>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
      {props?.image && <meta property="og:image" content={props.image} />}
      <meta name="keywords" content="superpowers, cyoa, interactive cyoa, cyoa build, Hooshu" />
      <meta name="author" content="Hooshu" />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {props?.image && <meta name="twitter:image" content={props.image} />}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      {props.children}
    </Helmet>
  );
};

export default SEO;
