"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var ABOUT = ["Hi, I'm Christian. I'm a jack-of-all-trades developer, designer, and creative coder with a passion for experimentation. I love researching and spearheading interesting and unique experiences on the web and working with designers.", "See some work samples below--a mix of client work and personal projects.", "You can reach me at christianmkastner@gmail.com."];
var PROJECTS = [{
  title: "Curran LLC",
  img: "./public/curran.png",
  meta: "Online Ecommerce Store",
  description: "Currently work as a full stack web developer facilitating the creation of a new proprietary marketing website, as well as overhauling the existing suite of e-commerce websites under the Curran Company banner (Sisal Carpet, Curran Floor, Curran Home, and Curran Car). Working to decouple the existing Laravel setup and transition to using the JAMStack with a nuxt frontend, external vue ui library, contentful CMS, and a Laravel API backend.",
  tags: ["Nuxt", "Vuex", "SCSS", "Tailwind", "Laravel", "PHP", "Google Tag Manager", "Google Analytics", "Agile", "Docker", "MySQL/MariaDB"],
  active: "https://www.sisalcarpet.com/",
  github: {}
}, {
  title: "Ravo from Solve and Create LLC",
  img: "./public/ravo.jpg",
  meta: "Social Media Voting Platform",
  description: "Worked as a front end partner to build reusable React components. Used lead developer's custom API endpoints to display user information, search through users and add/delete user following statuses (similar to instagram followers and linkedin connections). Worked with creative director and UI designer to build out UI mockups and UX interactions with Ravo's custom React library.",
  demo: null,
  github: {},
  tags: ["React", "SCSS", "Node", "Phabricator", "Arcanist", "Git"]
}, {
  title: "CBD THC Solution and East West Elixir",
  img: "./public/menu.jpg",
  meta: "Online Ecommerce Store and Marketing Website",
  description: "Currently work as a web developer and designer for two CBD companies doing everything from product and graphic design to Wordpress, Godaddy, and Shopify site standup.",
  tags: ["Wordpress", "CSS", "HTML", "GoDaddy Hosting", "Illustrator", "Photoshop"],
  active: "https://eastwestelixir.com/",
  github: {}
}, {
  title: "Beat Poems",
  img: "./public/poems.png",
  meta: "Poems and Natural Language Processing",
  description: "A single page app that makes your poems a little less ordinary. Input a poem and Bongo Cat will do its own spin on your material. Then let Bongo Cat read it aloud, accompanied with some sweet bongos.",
  demo: null,
  active: "https://christianmkastner.com/beat-poems/",
  github: {
    frontend: 'https://github.com/christiankastner/beat-poems'
  },
  tags: ["JavaScript", "Webpack", "Babel", "SASS", "SVG", "Illustrator"]
}, {
  title: "Virtual Canvas",
  img: "./public/virtual_canvas.png",
  meta: "Interactive Audio Visualizer",
  description: "A shared space for audio and visual artists to create on the same canvas simultaneously. By combining animation and audio in the browser with P5.js, UI state management with React Redux, and websocketing using ActionCable in rails, Virtual Canvas allows users to create shapes synced to audio and collaborate on a music visualizer together.",
  active: "https://christianmkastner.com/virtual-canvas/#/",
  github: {
    frontend: 'https://github.com/christiankastner/virtual-canvas',
    backend: 'https://github.com/christiankastner/virtual_canvas_backend_api'
  },
  tags: ["React", "Ruby on Rails", "Web Sockets", "Redux", "SASS", "Firebase Cloud Storage"]
}];
var SKILLS = {
  "Tech": ["React", "Redux", "Javascript", "Rails", "Sockets", "ActionCable", "Ruby", "Python", "HTML5", "CSS3", "SASS/SCSS", "Jest", "MySQL", "PostgreSQL", "Heroku", "JWT", "Material UI", "Semantic UI", "Git & Github"],
  "Data": ["R", "Matlab", "SciKit Learn", "Pandas", "Matplotlib", "Numerical Analysis"],
  "Creative": ["Photoshop", "Illustrator", "XD", "Lightroom", "P5.js", "Mo.js", "Processing in Java"]
};

var renderDemo = function renderDemo(url) {
  if (url == null) return "";
  var iframe = document.createElement("div");
  iframe.className = "responsive";
  iframe.innerHTML = "<iframe width=\"560\" height=\"315\" src=\"".concat(url, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"\"></iframe>");
  return iframe;
};

var renderLinks = function renderLinks() {
  var ul = document.createElement("ul");
  ul.className = "links";

  for (var _len = arguments.length, links = new Array(_len), _key = 0; _key < _len; _key++) {
    links[_key] = arguments[_key];
  }

  var newArray = links.filter(function (x) {
    return x.innerHTML;
  }).map(function (x) {
    var link = document.createElement("li");
    link.append(x);
    return link;
  });
  ul.append.apply(ul, _toConsumableArray(newArray));
  return ul;
};

function get(element) {
  return document.getElementById(element);
}

document.addEventListener('DOMContentLoaded', function () {
  var open = get("menu-btn");
  var nav = get("nav");
  open.addEventListener('click', function () {
    nav.classList.toggle('open-nav');
  });
  nav.addEventListener('click', function () {
    nav.classList.toggle('open-nav');
  });
  var about = document.getElementById("text-card");
  var projectList = document.getElementById("project-list");
  var skillList = document.getElementById("skill-list"); // Populate about section

  (function () {
    ABOUT.map(function (paragraph) {
      var p = document.createElement("p");
      p.innerText = paragraph;
      about.appendChild(p);
    });
  })(); // Populate project list


  (function () {
    PROJECTS.map(function (project) {
      var li = document.createElement("li");
      li.className = "project-card";
      var img = document.createElement("img");
      img["src"] = project.img;
      img.alt = "".concat(project.title, " picture");
      var div = document.createElement("div");
      div.className = "project-header";
      var h3 = document.createElement("h3");
      h3.innerText = project.title;
      var h4 = document.createElement("h4");
      h4.innerText = project.meta;
      var demo = document.createElement("a");

      if (project.active) {
        demo.innerText = "Live Site";
        demo.href = project.active;
      }

      var frontend = document.createElement("a");
      project.github.frontend ? frontend.innerText = "Frontend" : "";
      frontend.href = project.github.frontend;
      var backend = document.createElement("a");
      project.github.backend ? backend.innerText = "Backend" : backend.href = project.github.backend;
      var links = renderLinks(demo, frontend, backend);
      var gradient = document.createElement("div");
      gradient.className = "gradient";
      div.append(h3, h4, links);
      var tags = document.createElement("div");
      tags.innerHTML = project.tags.map(function (x) {
        return "<span>" + x + "</span>";
      }).join(" - ");
      tags.classList.add("tags");
      var p = document.createElement("p");
      p.innerText = project.description;
      var iframe = renderDemo(project.demo);
      var container = document.createElement("div");
      container.className = "text-container";
      container.append(iframe);
      li.append(img, div, p, container, tags, gradient);
      projectList.appendChild(li);
    });
  })(); // Populate Skills
  // (function() {
  //     for (const title in SKILLS) {
  //         let li = document.createElement("li")
  //         let h4 = document.createElement("h4")
  //         h4.innerText = title
  //         let p = document.createElement("p")
  //         p.innerText = SKILLS[title].join(", ")
  //         li.append(h4, p)
  //         // skillList.appendChild(li)
  //     }
  // })();

});
"use strict";

var images = document.querySelectorAll("[data-src]");
var options = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px"
};

function preloadImage(img) {
  var src = img.getAttribute("data-src");
  console.log(src);

  if (!src) {
    return;
  }

  img.src = src;
  img.classList.toggle("img-loading");
  img.classList.toggle("img-loaded");
}

var imgObserver = new IntersectionObserver(function (entries, imgObserver) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    } else {
      return;
    }
  });
}, options);
images.forEach(function (image) {
  imgObserver.observe(image);
});