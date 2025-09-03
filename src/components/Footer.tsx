import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FooterContainer, SocialLinks, SocialLink } from "./styled/Footer";

export default function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink
          href="https://github.com/adelicia-js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub size={24} />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/adelicia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={24} />
        </SocialLink>
      </SocialLinks>
      <p style={{ marginBottom: "0.5rem" }}>
        Explore the world, one country at a time
      </p>
      <SocialLink
        href="https://github.com/adelicia-js/country_info"
        target="_blank"
        rel="noopener noreferrer"
        title="View Source Code"
        style={{
          width: "auto",
          height: "auto",
          borderRadius: "12px",
          padding: "0.3rem",
          fontSize: "0.8rem",
          fontWeight: "400",
        }}
      >
        $ source | 2025 - 2026
      </SocialLink>
    </FooterContainer>
  );
}
