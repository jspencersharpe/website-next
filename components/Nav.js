import Link from "next/link";

const Nav = () => (
  <div className="navbar">
    <ul>
      <li>
        <Link href="/" as="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about" as="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/code" as="/code">
          <a>Code</a>
        </Link>
      </li>
      <li>
        <Link href="/music" as="/music">
          <a>Music</a>
        </Link>
      </li>
    </ul>

    <style jsx global>{`
      .navbar {
        padding: 0.5rem 0;
        margin-top: 2rem;
        background-color: #f7f7f7;
      }

      .navbar > ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding-left: 0;
        margin: 0;
      }

      .navbar > ul > li {
        list-style: none;
        padding: 0.425rem 1rem 0.65rem;
      }

      .navbar a {
        color: #196aaa;
        text-decoration: none;
      }

      .active-route {
        border-bottom: 4px solid #196aaa;
      }
    `}</style>
  </div>
);

export default Nav;
