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
)
