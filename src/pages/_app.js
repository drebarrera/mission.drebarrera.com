import "@/styles/globals.css";
import { ScrollProvider } from "@/components/ScrollContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ScrollProvider>
      <Head>
        <title>Andrés Barrera - Engineer | Systems & Cultural Intelligence</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta
          name="description"
          content="Andrés Barrera is an engineer, analyst, and community organizer building at the intersection of community, data, and technology. Founder of Hispanic Hackers, a 501(c)(3) with 2,700+ members. Consultant at CircleSquare Labs. Computational Social Science researcher."
        />

        <meta property="og:title" content="Andrés Barrera - Engineer | Systems & Cultural Intelligence" />
        <meta
          property="og:description"
          content="My calling is to build at the intersection of community, data, and technology - applying engineering depth and cross-cultural fluency to problems where the human and technical complexity are equally demanding."
        />
        <meta property="og:image" content="https://mission.drebarrera.com/media_cover.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Andrés Barrera Mission Cover" />
        <meta property="og:url" content="https://mission.drebarrera.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Andrés Barrera - Engineer | Systems & Cultural Intelligence" />
        <meta
          name="twitter:description"
          content="Engineer, analyst, and community organizer. Founder of Hispanic Hackers. Consultant at CircleSquare Labs."
        />
        <meta name="twitter:image" content="https://mission.drebarrera.com/media_cover.png" />
        <meta name="twitter:image:alt" content="Andrés Barrera Mission Cover" />

        <link rel="canonical" href="https://mission.drebarrera.com" />
      </Head>
      <Component {...pageProps} />
    </ScrollProvider>
  );
}
