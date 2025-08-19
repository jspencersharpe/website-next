import Layout from "../components/Layout";
import Subheading from "../components/Subheading";

const About = () => (
  <Layout>
    <div className="about">
      <section>
        <Subheading value="Me" />
        <p>Hi! I’m a Software Engineer from Nashville, TN.</p>
        <p>
          Born and raised in Tulsa, OK, I moved to Nashville with my wife,
          Amber, in the fall of 2013.
        </p>
        <p>
          I attended Nashville Software School (Cohort 7) from 2014 to 2015.
        </p>
      </section>
      <section>
        <Subheading value="Work" />
        <p>
          In my software career, I have worked mostly for startups. Most of my
          day-to-day development has been on the client side, primarily using
          JavaScript, but I have also spent significant time on the backend.
        </p>
        <p>
          I currently work for{" "}
          <a
            href="https://drinkag1.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            AG1
          </a>
          .
        </p>

        <p>What brings me the most passion in my work is the product.</p>
        <ul>
          <li>What are we building? </li>
          <li>
            <i>Why</i> are we building it?
          </li>
          <li>Who are we serving?</li>
          <li>How can we make it better?</li>
        </ul>
      </section>

      <section>
        <Subheading value="Else" />

        <p>Outside of work, you'll find me:</p>
        <ul>
          <li>
            riding my{" "}
            <a
              href="https://www.bikeradar.com/advice/buyers-guides/what-is-an-electric-bike/"
              rel="noopener noreferrer"
              target="_blank"
            >
              E-bike
            </a>
          </li>
          <li>watching NBA basketball (Go Pacers!)</li>
          <li>
            posting about public transportation and Nashville local politics
          </li>
          <li>at Nashville SC games</li>
          <li>at any Mexican restaurant in East Nashville</li>
        </ul>
      </section>
    </div>
    <style jsx="true">{`
      .about section {
        padding-bottom: 16px;
      }
    `}</style>
  </Layout>
);

export default About;
