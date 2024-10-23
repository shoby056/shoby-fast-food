import Header from "../responsive/header";
import Footer from "../responsive/footer";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="contact-parent">
        <div className="contact-left">
          <h1 className="getintouch">Get in Touch</h1>
          <p className="touch">
            &quot;We&#39;d love to hear from you! Whether you have a question,
            feedback, or just want to say hello, feel free to reach out using
            the form below.&quot; <br /> Here are Our Social Links:
          </p>
        </div>

        <div className="contact-right">
        <form>
  <label htmlFor="name">Name</label>
  <br />
  <input type="text" id="name" name="name" />
  <br />

  <label htmlFor="email">Email</label>
  <br />
  <input type="email" id="email" name="email" />
  <br />

  <label htmlFor="number">Number</label>
  <br />
  <input type="number" id="number" name="number" />
  <br />
  <button type="submit" className="btn">Submit</button>
</form>

        </div>
      </div>

      <div className="icons">
        <Link href="https://www.linkedin.com/in/muhammad-shoaib-41927627a/"   className="abcd">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </Link>

        <Link href="https://github.com/shoby056" className="abcd">
          <i className="fa-brands fa-github"></i> Github
        </Link>

        <Link href="https://www.facebook.com/shoby056" className="abcd">
          <i className="fa-brands fa-facebook"></i> Facebook
        </Link>

        <Link href="mailto:shkshoaib056@gmail.com" className="abcd">
          <i className="fa-solid fa-envelope"></i> shkshoaib056@gmail.com
        </Link>
      </div>

      <Footer />
    </div>
  );
}
