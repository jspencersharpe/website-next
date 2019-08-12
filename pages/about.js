import Layout from "../components/Layout"
import Heading from "../components/Heading"

const About = () => (
  <Layout>
    <div className="about">
      <Heading value="about" />
      <p>
        I'm a Software Engineer, and a graduate of Nashville Software School. I
        play the bass and sleep in East Nashville, TN.
      </p>
      <p>
        Born and raised in Tulsa, OK, I studied Music Composition at Oral
        Roberts University. My wife, Amber, is just the best. We moved to
        Nashville in the Fall of 2013 and discover more fun things every day.{" "}
      </p>
      <p>
        I have been a fan of the{" "}
        <a
          href="http://www.nba.com/pacers/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          Indiana Pacers
        </a>{" "}
        my whole life. We are going to win a title. You just wait.
      </p>
    </div>
  </Layout>
)

export default About
