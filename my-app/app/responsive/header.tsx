

import Link from "next/link";
export default function Header() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fa-solid fa-list"></i>
      </label>
      <label className="logo">Shoby</label>
      <ul>
        <li className="active">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link href="/jobs">Order Now</Link>
        </li>
      </ul>
    </nav>
  );
}
