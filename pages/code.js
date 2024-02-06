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
      <p>This website was made with Next.js.</p>
      <Technologies />
    </div>
  </Layout>
);

export default Code;
