import Layout from "../components/Layout"
import Heading from "../components/Heading"

const Music = () => {
  const src = "https://open.spotify.com/embed/artist/1XCLGH5dZCDmyODPvnIBeG"

  return (
    <Layout>
      <Heading value="music" />
      <div className="music">
        <p>
          I am in a band called{" "}
          <a
            href="http://wedissolvedthecompany.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            We Dissolved The Company
          </a>{" "}
          with my friend Andrew Fraser. We have released 3 songs that you can
          here in all the places people find music. I also released a solo
          record in 2009 that I don't want to tell you about.
        </p>
        <iframe
          title="spotify"
          src={src}
          width="400"
          height="300"
          frameBorder="0"
        />
      </div>
      <style jsx="true">{`
        .music iframe {
          width: 100%;
        }

        @media only screen and (min-width: 1000px) {
          .music {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Music
