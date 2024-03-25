import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin  } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://github.com/adelicia-js"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub size={32} style={{ paddingTop: "10%" }} />
      </a>
      <a
        href="https://www.linkedin.com/in/adelicia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size={34} style={{ paddingTop: "15%" }} />
      </a>
      <a
        href="https://github.com/adelicia-js/country_info"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
    </footer>
  );
}
