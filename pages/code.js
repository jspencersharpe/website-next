import Layout from "../components/Layout"
import Technologies from "../components/Technologies"
import Heading from "../components/Heading"

const Code = () => (
  <Layout>
    <div className="code">
      <Heading value="code" />
      <p>
        Check out my{" "}
        <a
          href="http://nba.spencersharpe.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          NBA Stats Scraper
        </a>{" "}
        The app scrapes NBA statistics from{" "}
        <a href="http://nba.com" rel="noopener noreferrer" target="_blank">
          NBA.com
        </a>{" "}
        on page load. In accordance to the NBA's terms of service: there is no
        database, and it saves no statistics.
      </p>
      <p>
        The app is built with Node.js, Express, Pug template engine, and{" "}
        <a
          href="https://cheerio.js.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          Cheerio
        </a>
        . You can find the code
        <a
          href="https://github.com/jspencersharpe/nba-stats-scraper"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          here
        </a>
        .
      </p>
      <p>
        This website was made with{" "}
        <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">
          Next.js
        </a>
        .
      </p>
      <Technologies />
    </div>
  </Layout>
)

export default Code
