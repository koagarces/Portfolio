import { SiReact, SiJavascript, SiCss3 } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
export const Home = () => {
  return (
    <div className="home">
      <div className="App-header">
        <h1>
          Hi I'm <span className="myName">Koa Garces</span>
        </h1>
        <h2>
          <span className="career">Software Engineer</span> from Southern
          California
        </h2>
        <a
          href="https://drive.google.com/file/d/1KTeXJM76vxS3M981IpoVIbSEHRmenBAX/view?usp=sharing"
          className="resume"
          target="_blank"
        >
          Here's my Resume!
        </a>
      </div>
      <div className="icons">
        <SiReact className="reactIcon" />
        <SiJavascript className="jsIcon" />
        <SiCss3 className="cssIcon" />
        <DiHtml5 className="htmlIcon" />
      </div>
    </div>
  );
};
