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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "HTML",
          "CSS",
          "JavaScript",
          "Vue.js",
          "TailwindCSS",
          "AdobeXD",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
      {
        id: 2,
        details:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: 3,
        details:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: 4,
        details:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        icon: <FiTwitter />,
        url: "https://twitter.com/realstoman",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://instagram.com/realstoman",
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
        url: "https://www.youtube.com/c/StomanStudio",
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
