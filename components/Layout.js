import Nav from "./Nav";

const Layout = ({ children }) => (
  <div className="layout">
    <header className="app-header">
      <img
        src="/static/logo.png"
        className="app-logo"
        alt="logo"
        height={200}
        width={230}
      />
      <Nav />
    </header>
    <section className="content">{children}</section>
    <style jsx global>{`
      html,
      body,
      #root {
        height: 100%;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }

      .layout {
        min-height: 100vh;
      }

      .app {
        min-height: 100%;
        display: grid;
        grid-template-rows: 300px auto 50px;
      }

      .content {
        padding: 30px;
        min-height: calc(100vh - 375px);
      }

      @media only screen and (min-width: 900px) {
        .content {
          padding: 30px 100px;
        }
      }

      @media only screen and (min-width: 1200px) {
        .content {
          padding: 30px 200px;
        }
      }

      @media only screen and (min-width: 1500px) {
        .content {
          padding: 30px 250px;
        }
      }

      .app-logo {
        max-width: 230px;
        padding-top: 2rem;
        padding-bottom: 2rem;
      }

      .app-header {
        text-align: center;
        min-height: 320px;
      }
    `}</style>
  </div>
);

export default Layout;
