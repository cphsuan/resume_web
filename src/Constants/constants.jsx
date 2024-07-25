import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
} from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  avatar,
} from "../assets";

import { navLinks } from "./navLinks";
library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
};

const projects = [
  {
    name: "Arasartara's Gallery",
    description:
      "A memory game with an art theme implemented with React. Test your memory skills and enjoy beautiful artwork as you match pairs of cards in this engaging game.",
    image: memoryGame,
    source_code_link: "https://github.com/bl33h/artMemoryGame",
    demo_link: "https://arasarmemory.netlify.app/",
  },
  {
    name: "Pawsitive",
    description:
      "Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.",
    image: pawsitivePrototype,
    source_code_link: "https://github.com/bl33h/pawsitive",
    demo_link:
      "https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2",
  },
  {
    name: "Basic Calculator",
    description:
      "A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.",
    image: calculator,
    source_code_link: "https://github.com/bl33h/calculator",
    demo_link: "https://bl33hscalculator.netlify.app/",
  },
];

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "java",
    title: "Java",
    icon: javaIcon,
    description:
      "I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.",
  },
  {
    id: "aws",
    title: "Amazon Web Services",
    icon: awsIcon,
    description:
      "I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.",
  },
  {
    id: "figma",
    title: "Figma",
    icon: figmaIcon,
    description:
      "In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
  {
    id: "psql",
    title: "Postgresql",
    icon: psqlIcon,
    description:
      "I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
  },
  {
    id: "vite",
    title: "Vite",
    icon: viteIcon,
    description:
      "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
  },
  {
    id: "py",
    title: "Python",
    icon: pyIcon,
    description:
      "With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.",
  },
  {
    id: "node",
    title: "Node",
    icon: nodeIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },
  {
    id: "neo",
    title: "Neo4j",
    icon: neoIcon,
    description:
      "I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.",
  },
  {
    id: "raspi",
    title: "Raspberry Pi",
    icon: raspIcon,
    description:
      "I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.",
  },
  {
    id: "eslint",
    title: "Eslint",
    icon: eslintIcon,
    description:
      "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
  },
];

const experiences = [
  {
    id: 1,
    company: "Perfect Corp.",
    title: "Frontend Engineer",
    period: "2023/03 - Current",
    pl: ["React", "Java", "MySql"],
    shortDesc: (
      <div className="pl-4">
        <ul>
          <li>Upgraded projects to React 18.</li>
          <li>Create dynamic and interactive user interfaces.</li>
          <li>Integrate RESTful APIs.</li>
        </ul>
      </div>
    ),
    desc: (
      <>
        <div>
          <h6>Frontend Skills</h6>
          <div className="pl-4">
            <ul>
              <li>
                Utilized React.js to create dynamic and interactive user
                interfaces.
              </li>
              <li>
                Optimized web applications for speed and performance, improving
                load times by 60%.
              </li>
              <li>
                Implement unit tests using Jest to ensure code reliability.
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-2">
          <h6>Backend Skills</h6>
          <div className="pl-4">
            <ul>
              <li>Maintain Solr/ Cleverbridge Server.</li>
              <li>
                Design an system to inform team members when unexpected errors
                occur in an API involves several steps.
              </li>
              <li>Design RESTful APIs.</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 2,
    company: "CEEC & CGM Lab",
    title: "Student Research Assistant",
    period: "2021/02 - 2023/01",
    pl: ["C#", "Python"],
    shortDesc: (
      <div className="pl-4">
        <ul>
          <li>
            Focus on Computer Vision, especially autonomous driving and human
            keypoints detection algorithms.
          </li>
          <li>Develop a non-traditional Answer Sheet Identification System.</li>
        </ul>
      </div>
    ),
    desc: (
      <>
        <div>
          <h6>CEEC</h6>
          <div className="pl-4">
            <ul>
              <li>
                Develop recognition algorithms(3+) for filled bubbles that can
                be applied to non-traditional answer sheets.
              </li>
              <li>
                Takes only 0.4 second to identify an answer and achieves 99.9%
                accuracy on 100,000+ image tests.
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-2">
          <h6>CGM Lab</h6>
          <div className="pl-4">
            <ul>
              <li>
                Develop a system to solve lane detection, tracking, and
                classification problems by combining deep learning and image
                processing techniques.
              </li>
              <li>
                The System includes:
                <ul>
                  <li>
                    Preprocessing: Lens Distortion Correction, Estimating
                    Coefficient k Method and Hood Detection(Faster R-CNN Model).
                  </li>
                  <li>
                    Lane Detection: Develop a Combing lanes Algorithm Based on
                    LaneAF Model.
                  </li>
                  <li>
                    Lane Tracking: Develop a comparing lanes info. Algorithm.
                  </li>
                  <li>
                    Lane Classification: Build ResNet101 Model to classify lane
                    type.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 3,
    company: "Eastern Union Interactive Corp.",
    title: "Data Analyst",
    period: "2020/05 - 2022/05",
    pl: ["R", "Tableau", "Firebase"],
    shortDesc: (
      <div className="pl-4">
        <ul>
          <li>Earliest member of the digital marketing department.</li>
          <li>Build a real-time user tags system.</li>
          <li>
            Develop potential users for new business (e-commerce and loans).
          </li>
        </ul>
      </div>
    ),
    desc: (
      <div className="pl-4">
        <ul>
          <li>
            Design and build real-time user tagging system to analyze user
            behavior.
          </li>
          <li>
            Develop potential users for new business (e-commerce and loans).
          </li>
          <li>
            Design and build Tableau daily data dashboards (such as remittance,
            competitors, and e-commerce).
          </li>
          <li>
            Design and build a Tableau KPI dashboard to track membership
            registration and usage.
          </li>
          <li>Analyze how users use apps on firebase and google analytics.</li>
          <li>
            Evaluate and improve the effectiveness of marketing campaigns.
          </li>
        </ul>
      </div>
    ),
  },
];
const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, projects, skills, experiences, markerSvg, icons, navLinks };
