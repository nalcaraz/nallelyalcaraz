import Head from "next/head";
import { useEffect } from "react";

const HeadComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.googletagmanager.com/gtag/js?id=UA-118643266-1";
    script.async = true;

    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-118643266-1");
  }, []);

  return (
    <Head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="Web Developer based in the Inland Empire."
      />
      <meta
        name="keywords"
        content="nallely alcaraz, nallely, alcaraz, web developer, computer Engineering, front-end, software engineer"
      ></meta>
      <title>Nallely Alcaraz - Web Developer</title>
      <link rel="icon" href="favicon.ico" />

      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Sacramento"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default HeadComponent;
