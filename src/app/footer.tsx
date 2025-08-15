import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { CgMail } from "react-icons/cg";

import "./footer.css";

type FooterItemProps = {
  image: any;
  href: string;
};

function FooterItem({ image, href}: FooterItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`footer-icon transition`}
    >
      {image}
    </a>
  );
}

export default function Footer() {
  return (
    <div className="hidden sm:flex flex-col p-6 text-white text-center items-center gap-2 fixed bottom-0">
      <div className="flex flex-row flex-wrap gap-6 items-center justify-center ml-5 mb-3 text-4xl">
        <FooterItem
          image={<BiLogoLinkedinSquare />}
          href="https://www.linkedin.com/in/alexlevy246"
        />
        <FooterItem
          image={<FaGithub />}
          href="https://github.com/ajlevy246"
        />
        <FooterItem
          image={<CgMail />}
          href="mailto:ajlevy246@gmail.com"
        />
      </div>
    </div>
  )
}
