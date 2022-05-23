export const About = () => {
  return (
    <div className="aboutSection">
      <div className="home">
        <div className="description">
          <h1 className="question">Who am I?</h1>
          <div className="about">
            I am a Software Developer with both a creative and technical
            background. As a college student, I pursued general engineering and
            began my love for content creation. My approach to problem-solving
            embraces my background which allows innovative ideas to take place
            in my work flow.
          </div>
        </div>
        <div className="photo">
          <img
            className="koa"
            src="https://uniim1.shutterfly.com/render/00-MYObA9_qGTLbUvWfy090B4qqNvdh7monO3KLvLrmGrFAI3RgOFDDf_ZLvK36gFxXVZV51t4MhjbEwRNyGscOgg?cn=THISLIFE&res=medium&ts=1653213735"
            alt="profile pic"
          />
        </div>
      </div>
      <div className="skills">
        {/* <h1 className="tech">TECHNICAL SKILLS</h1> */}
        <h2 className="front">Front End Skills</h2>
        <p className="front-skills">
          React | CSS | HTML | JavaScript | Redux | TypeScript
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
