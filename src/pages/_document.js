import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Andrés Barrera | Mission" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="black" />
        <meta name="mobile-web-app-title" content="Andrés Barrera | Mission" />
        <title>Andrés Barrera | Mission</title>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Andrés Barrera | Mission" />
        <meta property="og:description" content="Andrés Barrera's mission-driven portfolio and story." />
        <meta property="og:image" content="/media_cover.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Andrés Barrera Mission Cover" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Andrés Barrera | Mission" />
        <meta name="twitter:description" content="Andrés Barrera's mission-driven portfolio and story." />
        <meta name="twitter:image" content="/media_cover.png" />
        <meta name="twitter:image:alt" content="Andrés Barrera Mission Cover" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
