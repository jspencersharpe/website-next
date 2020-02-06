import Head from "next/head";
import { technologies } from "../utils";
import Layout from "../components/Layout";
import Heading from "../components/Heading";

const data = {
  title: "Spencer Sharpe",
  description:
    "I'm a Software Engineer, and a graduate of Nashville Software School. I play the bass and sleep in East Nashville, TN.",
  bio:
    "Born and raised in Tulsa, OK, I studied Music Composition at Oral Roberts University. My wife, Amber, is just the best. We moved to Nashville in the Fall of 2013 and discover more fun things every day.",
  keywords: technologies.map(t => t.name)
};

export default () => (
  <>
    <Head>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
    </Head>
    <Layout>
      <section className="home">
        <div className="img-container">
          <img
            src="/static/spencer.jpg"
            className="spencer"
            alt="spencer"
            height={345}
            width={345}
          />
        </div>
        <div className="bio">
          <Heading value="Spencer Sharpe" />
          <h3>
            Software Engineer at{" "}
            <a
              href="https://www.hellotend.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tend
            </a>
            . Musician. NBA fan.
          </h3>
        </div>
      </section>
      <style jsx="true">{`
        .home {
          display: grid;
          align-items: center;
          grid-gap: 10px;
        }

        .home .img-container {
          margin: 10px;
        }

        .home .img-container img {
          width: 100%;
          max-width: 375px;
        }

        .home .bio {
          text-align: left;
          display: block;
        }

        @media only screen and (min-width: 700px) {
          .home {
            grid-template-columns: 250px 2fr;
          }
        }

        @media only screen and (min-width: 1200px) {
          .home {
            grid-template-columns: 375px 3fr;
            grid-gap: 40px;
          }
        }
      `}</style>
    </Layout>
  </>
);
