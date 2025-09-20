import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  python,
  sql,
  docker,
  git,
  api,
  linux,
  clientServer,
  sqlserver,
  apicogwheel,
  gitbash,
  clientserveruse,
  fixedbplogo,
  pytestLogo,
  boldpenglogo,
  playwrightlogo

} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  // {
  //   id: "1",
  //   title: "Pricing",
  //   url: "#pricing",
  // },
  // {
  //   id: "2",
  //   title: "How to use",
  //   url: "#how-to-use",
  // },
  {
    id: "3",
    title: "QA Wisdom",
    url: "#roadmap",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [python, pytestLogo, playwrightlogo, docker, git, apicogwheel, sqlserver, gitbash, clientserveruse];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "";

export const collabContent = [
  {
    id: "0",
    title: "Every mistake is a lesson, every lesson is progress.",
    text: collabText,
  },
  {
    id: "1",
    title: "Curiosity fuels knowledge, knowledge fuels success.",
  },
  {
    id: "2",
    title: "Learning never stops, growth never ends.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: python,
    width: 48,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: docker,
    width: 48,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: git,
    width: 48,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: api,
    width: 48,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: sqlserver,
    width: 48,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: gitbash,
    width: 48,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: clientServer,
    width: 46,
    height: 34,
  },
  {
    id: "8",
    title: "Raindrop",
    icon: pytestLogo,
    width: 50,
    height: 32,
  },
  {
    id: "7",
    title: "Playwright",
    icon: playwrightlogo,
    width: 50,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "PYTHON",
    text: "A high-level, versatile programming language known for its readability and ease of use. It is widely used in web development, automation, data science, AI, and more.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "PYTEST/UNITTEST",
    text: "Versatile and popular testing frameworks for Python, that make it easy to write simple and scalable test cases. It offers features like fixtures, parameterized tests, and detailed error reporting.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "ALLURE REPORT",
    text: "An open-source test reporting tool that generates clear, interactive and visually appealing reports from test results. It's designed to support a wide range of testing frameworks and CI/CD pipelines.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "PLAYWRIGHT",
    text: "Is an open-source automation library, primarily used for end-to-end web testing and web scraping. It allows automating interactions with web browsers using a single, unified API.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "LOCUST",
    text: "It's an open-source load testing tool written in Python. It's used to simulate user behavior and measure how a system (like a website or API) performs under different loads.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "SQL",
    text: "Structured Query Language is a programming language used to manage and manipulate relational databases. SQL is widely used in applications requiring structured data storage, such as web apps, business software, and data analytics.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "6",
    title: "BASH",
    text: "Bourne Again Shell is a command-line interpreter and scripting language for Unix-based operating systems. It allows users to execute commands, automate tasks, and manage system operations through scripts.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "API",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "8",
    title: "CI/CD",
    text: "Stands for Continuous Integration/Continuous Deployment. It is a practice in software development where code changes are automatically integrated, tested, and deployed.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "9",
    title: "GIT",
    text: "It's is a distributed version control system that tracks changes in code, enables collaboration, and allows developers to manage projects efficiently.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "10",
    title: "DOCKER",
    text: "A platform for developing, shipping, and running applications in lightweight, portable containers. It simplifies deployment and ensures consistency across different environments.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "11",
    title: "OTHER",
    text: "Fiddler, CURL, Swagger, Advanced DevTools and more",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const projectLinks = [
  { id: 1, title: "Python Selenium Project", url: "https://github.com/SencereLearner/Python-Selenium-POM-Framework" },
  { id: 2, title: "Python API Project", url: "https://github.com/SencereLearner/Python-Pytest-API-Framework" },
  { id: 3, title: "Python Playwright Project", url: "https://github.com/SencereLearner/Python-Playwright-POM-Framework" },
];

