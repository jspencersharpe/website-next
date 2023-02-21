import Layout from '../components/Layout'
import Heading from '../components/Heading'

const About = () => (
  <Layout>
    <div className="about">
      <Heading value="about" />
      <p>
        I'm a Software Engineer, and a graduate of Nashville Software School. I
        play the bass and live in East Nashville, TN.
      </p>
      <p>
        Born and raised in Tulsa, OK, I studied Music Composition at Oral
        Roberts University. My wife, Amber, is just the best. We moved to
        Nashville in the Fall of 2013 and discover more fun things every day.{' '}
      </p>
      <p>
        Outside of work, you'll find me riding my{' '}
        <a
          href="https://www.bikeradar.com/advice/buyers-guides/what-is-an-electric-bike/"
          rel="noopener noreferrer"
          target="_blank"
        >
          E-bike
        </a>{' '}
        or watching NBA basketball.
      </p>
    </div>
  </Layout>
)

export default About
