import { MdOutlineEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

export const Contact = () => {
  return (
    <div className="home">
      <div className="contact-header">
        <h1>Reach Out!</h1>
        <h3>
          I'm looking for front-end positions but I am always open to full stack
          or back-end options as well!
        </h3>
        <div>
          <MdOutlineEmail className="email-icon" />
          <a
            href="https://www.linkedin.com/in/koa-garces/"
            className="linked"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
          <p>koajgarces@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
