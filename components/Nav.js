import Link from "next/link";

const Nav = () => (
  <div className="navbar">
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/code">Code</Link>
      </li>
      <li>
        <Link href="/music">Music</Link>
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
