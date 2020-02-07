const ABOUT = [
    "I am a full-stack software engineer from an interdisciplinary background in both the arts and the sciences. I love being creative and experimenting with new technology, like machine learning and computer graphics/animation. Combining art and technology is a passion of mine as well as using software to build new user experiences.",
    "I'm currently looking for work as a frontend or full-stack developer. I am skilled in JavaScript, Ruby, Rails, React. Have used R for academic statistical testing and matlab for machine learning and numerical analysis.",
    "My previous experience includes a Masters in Psychology from the University of Glasgow, and Bachelors degrees in Philosophy and Mathematics from University of California, Los Angeles. My introduction into web development was through an interest in machine learning as the potential. However, I quickly fell in love with the creative side of coding, experimenting with design"
]

const PROJECTS = [
    {
        title: "Virtual Canvas",
        img: "./public/virtual_canvas.png",
        meta: "Interactive Audio Visualizer",
        description: "A shared space for audio and visual artists to create on the same canvas simultaneously. By combining the animation browser animation and audio with P5.js, UI state management with React Redux, and websocketing with ActionCable in rails, Virtual Canvas allows users to create shapes synced to audio and collaborate on a music visualizer together.",
        demo: "",
        link: ""
    },
    {
        title: "Kangaroo Hangout",
        img: null,
        meta: "Event Planning App",
        description: "Want to plan a whole day's outing? Kangaroo Hangout is an event planning app that lets user's input places they'd like to go to, then search for nearby locations to also do. Want Sushi after your Muay Thai class or a library near your favorite burger place? That's easy with kangaroo hangout. Places are found using google's Places API that are persisted to a Rails backend and served to a React frontend.",
        demo: "",
        link: ""
    },
    {
        title: "Geek Poems",
        img: null,
        meta: "",
        description: "A single page app that makes your poems a little less ordinary. Users can input or write poems that made ",
        demo: "",
        link: ""
    }
]

document.addEventListener('DOMContentLoaded', () => {
    console.log("you made it!");

    const about = document.getElementById("text-card");
    console.log(about);

    (function() {
        ABOUT.map(paragraph => {
            p = document.createElement("p")
            p.innerText = paragraph
            about.appendChild(p)
        })
    })();
})