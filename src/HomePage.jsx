import { Link } from "react-router";
import "./HomePage.css";

export default function HomePage() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="intro">Hi, I’m</p>

        <h1 className="name">
          Vansh Kumar
        </h1>

        <h2 className="role">
          Frontend / React Developer
        </h2>

        <p className="description">
          I’m a junior web developer based in Japan, focused on building
          practical user friendly web applications using React and JavaScript.
          I enjoy turning ideas into real products and continuously improving
          my skills through hands on projects.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>
          <a
            href="https://github.com/vanshvansh858"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>
        </div>

        <p className="extra">
          📍 Japan &nbsp;|&nbsp; Conversational N3 (JLPT N4) &nbsp;|&nbsp; Open to junior/grad roles
        </p>
      </div>
    </section>
  );
}
