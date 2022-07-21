import React from "react";
import Footer from "./Footer";

import { useRouter } from "next/router";
import { Navbar } from "./Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export const defaultMeta = {
  title: "모던 PHP 유저 그룹에서 운영하는 PHP NEWS",
  siteName: "모던PUG..",
  image: "/img/1654213810643040.jpg",
  type: "website",
};

export type SeoProps = {
  description?: string;
  templateTitle?: string;
  summary?: string;
  date?: string;
  lastmod?: string;
  children: React.ReactNode;
  type?: string;
} & Partial<typeof defaultMeta>;

export default function Layout(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta["title"] = props.templateTitle ? ` ${props.templateTitle}丨${meta.siteName}` : meta.title;

  meta["description"] = props.description ? props.description : "모던 PHP 유저 그룹에서 운영하는 PHP 소식..";

  return (
    <div className="flex flex-col justify-between">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.summary ? meta.summary : meta.description} />
        <link rel="canonical" href={`https://php-new-kkyngvelyy.com${router.asPath}`} />
        <meta property="og:url" content={`https://php-new-kkyngvelyy.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="PHP NEWS" />
        <meta property="og:description" content={meta.summary ? meta.summary : meta.description} />
        <meta property="og:title" content={meta.title} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
        {meta.lastmod && <meta property="article:modified_time" content={meta.lastmod} />}
        <meta property="og:image" content={`${meta.image}`} />
        <meta property="og:image:alt" content={meta.summary ? meta.summary : meta.description} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="ko_kr" />
        <meta name="twitter:image" content={`${meta.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kkyungvelyy" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.summary ? meta.summary : meta.description} />
        <meta name="twitter:creator" content="@kkyungvelyy" />
        {meta.type === "article" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                {
                  "@context": "https://schema.org",
                  "@type": "Article",
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://php-new-kkyngvelyy.com${router.asPath}`,
                  },
                  headline: meta.title,
                  image: {
                    "@type": "ImageObject",
                    url: `https://php-new-kkyngvelyy.com${meta.image}`,
                  },
                  datePublished: meta.date,
                  dateModified: meta.lastmod,
                  author: {
                    "@type": "Person",
                    name: "PHP NEWS",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "PHP NEWS",
                    logo: {
                      "@type": "ImageObject",
                      url: `https://php-new-kkyngvelyy.com/static/images/logo/logo-black.png`,
                    },
                  },
                  description: meta.summary,
                },
                null,
                2,
              ),
            }}
          />
        )}
        {favicons.map((linkProps) => (
          <link key={linkProps.href} {...linkProps} />
        ))}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/static/static/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <main className="mx-auto mt-8 w-full max-w-5xl px-8 xl:px-0">{props.children}</main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </div>
  );
}

export type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/static/favicon/apple-icon-57x57.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/static/favicon/apple-icon-60x60.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/static/favicon/apple-icon-72x72.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/static/favicon/apple-icon-76x76.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/favicon/apple-icon-114x114.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/favicon/apple-icon-120x120.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/favicon/apple-icon-144x144.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/favicon/apple-icon-152x152.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/favicon/apple-icon-180x180.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/static/favicon/android-icon-192x192.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/static/favicon/favicon-96x96.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/favicon/favicon-16x16.png",
  },
  {
    rel: "manifest",
    href: "/static/favicon/manifest.json",
  },
];
