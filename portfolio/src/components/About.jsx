export const About = () => {
  return (
    <div className="aboutSection">
      <div className="home">
        <div className="description">
          <h1 className="question">Who am I?</h1>
          <div className="about">
            I am a Software Developer with a high passion for front end
            development. My skills are highlighted in react and the javascript
            ecosystem. I love being challenged and learning, so I am prepard to
            take on any challenge presented. I am HIGHLY motivated to be the
            develper that you need at your company.
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
