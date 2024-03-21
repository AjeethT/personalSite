import { getContext } from "svelte";


let i18n=getContext("i18n");
export let pLanguage=[
    {
      "title": "C#",
      "description": i18n.t("accExpIL"),
      "list": ["ASP.NET Web API", "ASP.NET MVC", "WPF","Entity Framework","LINQ"],
      "imgSrc":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
    },
    {
      "title": "JavaScript",
      "description": "Experience in Work at Accenture and Personal Projects. Intermediate Level",
      "list": ["ReactJS","NodeJS","NextJS","Svelte"],
      "imgSrc":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
      "title": "HTML5",
      "description": "Experience in Work at Accenture and Personal Projects. Intermediate Level",
      "list": ["HTML5 Basics","HTML5 Canvas","HTML5 SVG","HTML5 Web Components"],
      "imgSrc":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
    },
    {
      "title": "CSS3",
      "description": "Experience in Work at Accenture and Personal Projects. Intermediate Level",
      "list": ['CSS3 Basics','CSS3 Flexbox','CSS3 Grid','CSS3 Media Queries'],
      "imgSrc":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
    },
    {
      "title": "GO Lang",
      "description": "Currently Learning. Beginner level ",
      "list": ["Gin framework","Hyperledger Frabric blockchain framework"],
      "imgSrc":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
    },
    {
      "title": "C++",
      "description": "Learned during my Bachelors. Beginner Level",
      "list": ['C++ Basics','OOPs Concepts'],
      "imgSrc":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
    },
    {
      "title": "TypeScript",
      "description": "Currently Learning. Beginner level ",
      "list": ["TypeScript Basics","ReactJS with TypeScript"],
      "imgSrc":
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    }
]