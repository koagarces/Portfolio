export const About = () => {
  return (
    <div className="aboutSection">
      <div className="home">
        <div className="description">
          <h1 className="question">Who am I?</h1>
          <div className="about">
            A Frontend Developer in the Greater Chicagoland Area looking to find
            my next oppurtunity. I am searching for a role where I can utilize
            my skillset in React, Javascript, CSS, Redux, HTML and Node.JS. My
            dream is to be a profound Frontend Engineer in the software
            industry.
          </div>
        </div>
        <div className="photo">
          <img
            className="koa"
            src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrGtXZGDjg3YGmLr46A8vGQarnHjCyIZu59oV2we_kMG9A?cn=THISLIFE&res=medium&ts=1675194245"
            alt="profile pic"
          />
        </div>
      </div>
      <div className="skills">
        {/* <h1 className="tech">TECHNICAL SKILLS</h1> */}
        <h2 className="front">Front End Skills</h2>
        <p className="front-skills">
          JavaScript | React | CSS | HTML | Redux | TypeScript
        </p>
        <h2 className="front">Back End Skills</h2>
        <p className="front-skills">
          Express | Mongoose | PostgreSQL | Node.js | SQL | RESTful API
        </p>
        <h2 className="front">General</h2>
        <p className="front-skills">
          Heroku | AWS | Git | GitHub | PERN Stack | MERN Stack | VS Code
        </p>
      </div>
    </div>
  );
};
