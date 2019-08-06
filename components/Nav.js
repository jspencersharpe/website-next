import Link from "next/link"

const Nav = () => {
  return (
    <>
      <Link href="/about" as="/about">
        <a>About</a>
      </Link>
      <Link href="/code" as="/code">
        <a>Code</a>
      </Link>
      <Link href="/music" as="/music">
        <a>Music</a>
      </Link>
    </>
  )
}

export default Nav
