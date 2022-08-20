import Head from "next/head";
import Intro from "../components/Intro.js";
// import Review from "../components/Review";
// import Workflow from "../components/Workflow";
import SocialLinks from "../components/SocialLinks.js";

// const prefix = ' ' || process.env.NEXT_PUBLIC_BASIC_PATH;

export default function Home() {
  return (
    <>
      <Head>

        <title>Konsa College</title>
        <meta charSet="UTF-8" />
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="author" content="Konsa College" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content="Konsa College" />
        <meta
          name="twitter:image"
          content= {"/kclogo.png"}
        />
        <meta property="og:url" content="zostera2438.github.io/" />
        <meta property="og:title" content="Konsa College" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          href={"/kclogo.png"}
        />
        <meta property="og:site_name" content="Konsa College" />

        <link rel="canonical" href="zostera2438.github.io/" /> */}
         <link
          rel="icon"
          type="image/png"
          href={"/kclogo.png"}
        />

      </Head>

      <Intro />
      {/* <Review />
      <Workflow /> */}
      <SocialLinks />
    </>
  );
}
