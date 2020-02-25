const ABOUT = [
    "I'm a full-stack software engineer with a background in both the arts and the sciences. I love being creative and experimenting with new technology, such as graphical computing, natural language processing, and machine learning. Combining art and technology is a passion of mine as well as using software to build new user experiences.",
    "I'm currently looking for work as a frontend or full-stack developer. I am skilled in JavaScript, Ruby, Rails, React, Python, and currently teaching myself Jest and React Testing Library. I also have significant experience within data science and numerical computing, having used R for my masters dissertaion and coursework, as well as matlab for courses in machine learning and numerical analysis.",
    "My previous experience includes a Masters in Psychology from the University of Glasgow, and Bachelors degrees in Philosophy and Mathematics from University of California, Los Angeles. My introduction into web development was through an interest in machine learning as a tool for Psychology research and inpatient/outpatient procedure. However, I quickly fell in love with the creative side of coding, experimenting with design and interface. This duality makes me versatile in tackling the varied problems presented in web development."
]

const PROJECTS = [
    {
        title: "Virtual Canvas",
        img: "./public/virtual_canvas.png",
        meta: "Interactive Audio Visualizer",
        description: "A shared space for audio and visual artists to create on the same canvas simultaneously. By combining animation and audio in the browser with P5.js, UI state management with React Redux, and websocketing using ActionCable in rails, Virtual Canvas allows users to create shapes synced to audio and collaborate on a music visualizer together. Similar to a chatroom, one user holds administrative controls over the canvas, able to change background color and how different audio frequencies map onto the canvas to make the different shapes synced to the frequencies move. Now, all signed in users have the ability to hop into another user's canvas and build shapes synced to the treble, mid, or bass frequencies, specify how many shapes, how they rotate, and many other effects. And any change made from one user will render changes for all other users on the same canvas. Finally, users can then input any mp3 to see their collaborative canvas pulse and move to the audio, offering a unique experience to create with friends.",
        demo: "",
        active: "christianmkastner.com/virtual-canvas/#/",
    },
    {
        title: "Kangaroo Hangout",
        img: "./public/hangout.png",
        meta: "Event Planning App",
        description: "Want to plan a whole day's outing? Kangaroo Hangout is an event planning app that lets user's input places they'd like to go to, then search for nearby locations to also visit. Want Sushi after your Muay Thai class or a library near your favorite burger place? That's easy with kangaroo hangout. Places are found using google's Places API that are persisted to a Rails backend and served to a React frontend. Once users login, they can then input a location and search for any of the one hundred different place types offered by the Google Places API. Next, they can scan through the list and click which they'd like to build into their event. A user can search for any other place they'd like, adding it into the same event as the previous place. Once they've added all the different places they'd like to schedule, they choose a date using React Calendar and save it for later. This offers users a quick and easy way to find and plan activities close together, and hop from one to the next.",
        demo: "",
        active: null
    },
    {
        title: "Beat Poems",
        img: "./public/poems.png",
        meta: "Poems and Natural Language Processing",
        description: "A single page app that makes your poems a little less ordinary. Users can input or write poems, then select what part of speech they'd like swapped, be it verb, noun, or adjective. Then Rita.js, a javascript Natural Language Processing library, combs through the text, flagging the flagged parts of speech and swapping them with a random word matching that part of speech in Rita.js's lexicon. This offers a fun way for users to inject a little chaos into their writing. Also, users can have their poems read aloud by over 100 different voices using the Responsive Voice API and can be even more chaotic with a special bongo-fied reading. Harnessing the asyncronous nature of javascript, Beat Poems queues API calls and bongo audio to mix speech and sound effects for true beatnik all read by the computer",
        demo: "",
        active: "christianmkastner.com/noun-swapper-frontend/"
    }
]

const SKILLS = {
    "Tech": [
        "React", "Redux", "Javascript", "Rails", "Sockets", "ActionCable", "ActionMailer", "Ruby", "Python", "HTML5", "CSS3", "Mocha", "MySQL", "PostgreSQL", "Heroku", "JWT", "Material UI", "Semantic UI", "Git & Github"
    ],
    "Data": [
        "R", "Matlab", "SciKit Learn", "Pandas", "Matplotlib", "Numerical Analysis"
    ],
    "Creative": [
        "Photoshop", "Lightroom", "P5.js", "Mo.js", "Processing in Java"
    ]
}

document.addEventListener('DOMContentLoaded', () => {
    const about = document.getElementById("text-card");
    const projectList = document.getElementById("project-list");
    const skillList = document.getElementById("skill-list");

    // Populate about section
    (function() {
        ABOUT.map(paragraph => {
            p = document.createElement("p")
            p.innerText = paragraph
            a = document.createElement('a')
            a.innerText = 'See My Resume'
            about.appendChild(p)
        })
    })();

    // Populate project list
    (function() {
        PROJECTS.map(project => {
            li = document.createElement("li")
            li.className = "project-card"

            img = document.createElement("img")
            img.src = project.img
            img.alt = `${project.title} picture`

            div = document.createElement("div")
            div.className = "project-header"

            h3 = document.createElement("h3")
            h3.innerText = project.title
            h4 = document.createElement("h4")
            h4.innerText = project.meta
            link = document.createElement("a")
            link.innerText = project.active || ""
            link.href = `https://${link.innerText}`
            gradient = document.createElement("div")
            gradient.className = "gradient" 
            div.append(h3,h4,link)

            p = document.createElement("p")
            p.innerText = project.description

            li.append(img,div,p, gradient)
            projectList.appendChild(li)
        })
    })();

    // Populate Skills
    (function() {
        for (const title in SKILLS) {
            let li = document.createElement("li")
            
            let h4 = document.createElement("h4")
            h4.innerText = title

            let p = document.createElement("p")
            p.innerText = SKILLS[title].join(", ")
            console.log(SKILLS[title])

            li.append(h4, p)
            skillList.appendChild(li)
        }
    })();
    
})