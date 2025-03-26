import Layout from "../components/Layout";
import Technologies from "../components/Technologies";
import Heading from "../components/Heading";

const Code = () => (
  <Layout>
    <div className="code">
      <Heading value="code" />
      <p>
        I've been writing software since 2014. The majority of my experience has
        been writing JavaScript and React, including{" "}
        <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://reactnative.dev/"
          rel="noopener noreferrer"
          target="_blank"
        >
          React Native
        </a>
        .
      </p>
      <p>
        Checkout my&nbsp;
        <a
          href="https://www.nashvillenewsletters.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Nashville Newsletter Aggregator
        </a>
        . This project aggregates newsletters sent out by Nashville elected
        officials. It was built with Next.js and Vercel (including Vercel Blob).
        Data is aggregated using RSS feeds and the Gmail API.
      </p>
      <p>This website was also made with Next.js.</p>
      <Technologies />
    </div>
  </Layout>
);

export default Code;
