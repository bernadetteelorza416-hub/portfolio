
const portfolioData = {
  name: "RYAN FALLORE",
  role: "BSCS Student, Aspiring Web Developer & Network Engineer",
  location: "Capoocan, Leyte, Philippines",

  about:
    "I am a BSCS student interested in web development, networking, and IT infrastructure. I enjoy building websites, exploring generative AI tools, and using modern technologies to improve my skills, creativity, and problem-solving abilities.",

  email: "falloreryan649@gmail.com",
  github: "https://github.com/errorryan",
  linkedin: "https://www.linkedin.com/in/falloreryan/",

  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "PHP", "Python", "JavaScript"],
    },
    {
      category: "Web Development",
      items: ["Django", "Node.js", "HTML", "CSS", "Tailwind CSS","Flutter",],
    },
    {
      category: "Networking & IT",
      items: [
        "OSI Model",
        "IPv4/IPv6",
        "TCP/IP",
        "Subnetting",
        "Cisco Packet Tracer",
        "Traceroute",
        "Wireshark",
        "Troubleshooting",
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "MySQL",
        "Firebase",
        "Bootstrap",
      ],
    },
  ],


projects: [
  {
    title: "FinGo",
    description:
      "An e-commerce website that allows fishermen to sell their products online and buyers to purchase them.",
    image: "/projects/fingo.png",
    techStack: ["Python", "Django", "Tailwind CSS"],
    github: "https://github.com/errorryan/django_fingo/tree/main/FinGo",
    liveDemo: "https://e-commerce-django-xbxh.onrender.com",
  },
  {
    title: "Recipe Website",
    description:
      "A recipe website featuring CRUD operations and user authentication, allowing users to create, read, update, and delete data securely through login and registration.",
    techStack: ["PHP", "MySQL"],
  },
  {
    title: "Loan Tracker",
    description:
      "A simple loan tracking application to manage and monitor loan applications.",
    image: "/projects/loan.png",
    techStack: ["Dart", "Flutter", "Firebase"],
  },
  {
    title: "Task Scheduler",
    description:
      "A task scheduling application to manage and organize daily activities.",
    image: "/projects/task.png",
    techStack: ["Python", "Django", "Bootstrap", "SQLite"],
  },
],


  certificates: [
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "2026",
      image: "NETWORKING BASICS.png",
      file: "/certificates/Networking Basics.pdf",
    },
    {
      title: "Introduction to AI Literacy and Responsible Use",
      issuer: "Mapua University",
      date: "2026",
      image: "INTRODUCTION TO AI.png",
      file: "/certificates/Introduction to AI Literacy and Responsible Use.pdf",
    },
    {
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "2026",
      image: "GETTING STARTED.png",
      file: "/certificates/Getting Started with Cisco Packet Tracer.pdf",
    },
  ],
};

export default portfolioData;
