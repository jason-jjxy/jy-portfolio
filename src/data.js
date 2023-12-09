export const projects = [
  {
    title: "Amazon Software Engineering Internship",
    subtitle: "MERN Stack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./src/assets/amazon_logo.png",
    link: "https://reactbootcamp.com",
    tech: "[python, sprigbooto]",
  },
  {
    title: "React Tracks",
    subtitle: "React and Python",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-2.gif",
    link: "https://reedbarger.com",
  },
  {
    title: "DevChat",
    subtitle: "React and Firebase",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-3.gif",
    link: "https://jsbootcamp.com",
  },
  {
    title: "Epic Todo App",
    subtitle: "React Hooks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: "./project-4.gif",
    link: "https://pythonbootcamp.com",
  },
];

export const skills = ["python", "kubernetes"];

export const testimonials = [
  {
    name: "chris c.",
    company: "irdeto",
    quote: "great guy",
    image: generateRandomProfilePhoto(),
  },
];

function generateRandomProfilePhoto() {
  var randomProfile = require("random-profile-generator");
  return randomProfile.avatar;
}
