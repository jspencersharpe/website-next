import Layout from "../components/Layout"
import Heading from "../components/Heading"

export default () => (
  <Layout>
    <section className="home">
      <div className="img-container">
        <img src="/static/spencer.jpg" className="spencer" alt="spencer" />
      </div>
      <div className="bio">
        <Heading value="Spencer Sharpe" />
        <h3>Husband, sports fan, software developer</h3>
      </div>
    </section>
    <style jsx="true">{`
      .home {
        display: grid;
        align-items: center;
      }

      .home .img-container {
        margin: 10px;
      }

      .home .img-container img {
        width: 100%;
        max-width: 200px;
      }

      .home .bio {
        text-align: left;
      }

      @media only screen and (min-width: 700px) {
        .home {
          grid-template-columns: 1fr 2fr;
        }
      }

      @media only screen and (min-width: 1200px) {
        .home {
          grid-template-columns: 1fr 3fr;
        }
      }
    `}</style>
  </Layout>
)
