import { SiReact, SiJavascript, SiCss3 } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
export const Home = () => {
  return (
    <div className="home">
      <div className="App-header">
        <h1>Hi I'm Koa Garces</h1>
        <h2>Software Engineer from Southern California</h2>
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
