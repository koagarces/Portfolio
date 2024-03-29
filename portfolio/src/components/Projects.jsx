import { GrGithub } from "react-icons/gr";

export const Projects = () => {
  return (
    <div>
      <h1 className="projectTitle">EXPERIENCE</h1>
      <div className="workExperienceBox">
        <a
          href="http://nelson-grinding-website.s3-website-us-west-1.amazonaws.com/"
          target="_blank"
          className="nelsonGrinding"
          rel="noreferrer"
        >
          <div className="imageBox workChild">
            <img
              className="nelsonImage"
              alt="nelsonGrinding"
              src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrGM2OwNmXS_JVN1CPZSvtyZ5cYdfB3jRoL_VZILaXEufg?cn=THISLIFE&res=medium&ts=1675187447"
            />
          </div>
          <div className="detailsBox workChild">
            <h3 className="projectText">Nelson Grinding</h3>{" "}
            <a
              href="https://github.com/koagarces/nelsons-grinding"
              className="navlink workLink"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub /> GitHub
            </a>
            <p className="projectText">
              A source of communication, information, and credibility for
              potential Nelson Grinding Customers. This applications features
              quote requesting, appealing products, a photo carousel and
              contactability though the use of React, React-Router, Email.js,
              AWS S3 and AWS 53.
            </p>
            <p className="projectText">React | React-Router</p>
            <p className="projectText">Email.js | Javascript</p>
          </div>
        </a>
      </div>
      <h1 className="projectTitle">PROJECTS</h1>
      <div className="list-projects">
        <a
          href="https://last-minute-event.herokuapp.com/"
          target="_blank"
          className="ninety"
          rel="noreferrer"
        >
          <img
            alt="last minute"
            src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrFOIt_bzBs_RNkhAr3ERdJ1Kwg5ydwHipy3aIZBf9dNYQ?cn=THISLIFE&res=medium&ts=1653311381"
          ></img>
          <h3 className="projectText">Last Minute</h3>
          <p className="projectText">
            Let go that family pressure of being single! Last minute allows you
            to find a last minute plus one for those dreadful family events.
          </p>
          <p className="projectText">React | Postgres | Express</p>
          <p className="projectText">node.js | Javascript</p>
          <a
            href="https://github.com/koagarces/last_minute"
            className="navlink"
            target="_blank"
            rel="noreferrer"
          >
            <GrGithub />
          </a>
        </a>
        <a
          href="https://mock-ign.herokuapp.com/"
          target="_blank"
          className="ninety"
          rel="noreferrer"
        >
          <img
            alt="ign"
            src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrH9TmEtmMs54h3pqif5YnZlUnDnu4gHHWpfyYq5WwzmNg?cn=THISLIFE&res=medium&ts=1653312127"
          ></img>
          <h3 className="projectText">Mock Ign Webpage</h3>
          <p className="projectText">
            A gaming/entertainment news website with a video play and list of
            videos to choose from.
          </p>
          <p className="projectText">JavaScript | TypeScript </p>
          <p className="projectText">Redux | Styled-components</p>
          <a
            href="https://github.com/koagarces/Mock-ign"
            className="navlink"
            target="_blank"
            rel="noreferrer"
          >
            <GrGithub />
          </a>
        </a>
        <a
          className="ninety"
          href="https://show-your-nineties.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="show 90's"
            src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrHvGYQ-T-Wvq9lKMEp4NAlWrnHjCyIZu59oV2we_kMG9A?cn=THISLIFE&res=medium&ts=1653309152"
          ></img>
          <h3 className="projectText">Show Your 90's!</h3>
          <p className="projectText">
            A place to find and share your favcorite 90's memorabilia
          </p>
          <p className="projectText">Postgres | Express | React | node.js</p>
          <p className="projectText"> Javascript | Auth | REST | CSS </p>
          <a
            href="https://github.com/jenna-allgeier/show_your_90s"
            className="navlink"
            target="_blank"
            rel="noreferrer"
          >
            <GrGithub />
          </a>
        </a>
      </div>
    </div>
  );
};
