import Layout from "../components/Layout";
import Heading from "../components/Heading";

const Music = () => {
  return (
    <Layout>
      <Heading value="music" />
      <div className="music">
        <section className="card">
          <div>
            <p>
              I was in a band in Nashville called We Dissolved The Company. We
              released 3 singles that you can hear in all the places people find
              music.
            </p>
          </div>
          <div>
            <iframe
              src="https://open.spotify.com/embed/artist/1XCLGH5dZCDmyODPvnIBeG?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>

        <section className="card">
          <div>
            <p>
              From 2006 to 2010, I performed and toured as a singer/songwriter
              under my own name. I released the "Hemming the Seams" E.P. in
              2009.
            </p>
          </div>
          <div>
            <iframe
              src="https://open.spotify.com/embed/artist/7FHbjbFKSmEpAHjzL0w30c?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>

        <section className="card">
          <div>
            <p>
              In the early 2010s, I was in a rock band fronted by multi-talented
              artist Damion Shade. Damion is still performing and releasing
              music for multiple projects in Tulsa. I played both electric bass
              and upright bass on this record, "The" Swallower of X-Mas."
            </p>
          </div>
          <div>
            <iframe
              src="https://open.spotify.com/embed/artist/0rbulKa3OuFfXeMDQdc12r?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>
      </div>
      <style jsx="true">{`
        .card {
          padding-bottom: 30px;
        }

        @media only screen and (min-width: 768px) {
          .card {
            display: grid;
            grid-gap: 40px;
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Music;
