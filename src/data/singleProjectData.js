// Import images
import Image1 from "../images/rawgapi.png";
import Image2 from "../images/overwatch.jpg";
import Image3 from "../images/arcade.jpg";
import Image4 from "../images/mobile-project-1.jpg";
import Image5 from "../images/web-project-1.jpg";
import Image6 from "../images/ui-project-2.jpg";
// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const singleProjectData = {
  ProjectHeader: {
    title: "GameFuze",
    publishDate: "October 2023",
    tags: "Fullstack",
  },
  ProjectImages: [
    {
      id: 1,
      title: "RAWG API",
      img: Image1,
    },
    {
      id: 2,
      title: "Overwatch",
      img: Image2,
    },
    {
      id: 3,
      title: "Gaming photos",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "Details",
    CompanyInfo: [
      {
        id: 1,
        title: "API",
        details: "RAWG API",
      },
      //   {
      //     id: 2,
      //     title: "",
      //     details: "",
      //   },
      {
        id: 3,
        title: "Website",
        details:
          "http://final-project-dev2.us-west-1.elasticbeanstalk.com/home",
      },
      //   {
      //     id: 4,
      //     title: "Phone",
      //     details: "555 8888 888",
      //   },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "To create a Fullstack web application using the tools & technologies we were taught during our 14 week accelerated coding bootcamp program.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap 5",
          "React",
          "Express",
          "PostgreSQL",
        ],
      },
    ],
    ProjectDetailsHeading: "Description",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Our objective was to create a Fullstack Web Application using React on the Frontend and Express, Node, PostgreSQL for the backend. This allowed me to create an application where game enthusiasts could review top rated games. A robust user authentication was implmented to safeguard user data and privacy. Guest login was also implemented for those users who did not want to sign up!",
      },
      {
        id: 2,
        details:
          "I was able to find a friendly API to incorporate within my application that allowed me to dynamically render data based on their community votings on games. This project will always hold a special place in my development career. While working on the project, it was incredible to finally see everything that we had learned in the past 14 weeks come together as the Frontend and Backend were seemlessly communicating with each other.",
      },
      {
        id: 3,
        details:
          "My favorite part about this project was being able to present the product to our cohort and faculty. Our mock technical presentation helped to emulate how it would be in the real world during meetings and technical presentations with stakeholders of the company.",
      },
      {
        id: 4,
        details: "",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        icon: <FiTwitter />,
        url: "https://twitter.com/",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://instagram.com/",
      },
      {
        id: 3,
        name: "Facebook",
        icon: <FiFacebook />,
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: <FiYoutube />,
        url: "https://www.youtube.com/",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 1,
        title: "Mobile UI",
        img: Image4,
      },
      {
        id: 2,
        title: "Web Application",
        img: Image5,
      },
      {
        id: 3,
        title: "UI Design",
        img: Image6,
      },
      {
        id: 4,
        title: "Kabul Mobile App UI",
        img: Image3,
      },
    ],
  },
};
