import Link from 'next/link';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav>
      <h1>My Portfolio</h1>

  <div>
    <Link href="/">Home</Link>
        <Link  href="/about">About Me</Link>
        <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;
