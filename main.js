
// Swiper Js (Testemonial)
const swiper = new Swiper('.swiper', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});


const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

//show menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

// hide menu
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})

//read more about
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content')
    if (readMoreContent.classList.contains('show-content')) {
        if ($("#mostrandoMais").text() == "Show more") {
            readMoreBtn.textContent = "Show less";
        } else {
            readMoreBtn.textContent = "Mostrar menos";
        }
    } else {
        if ($("#mostrandoMais").text() == "Show less") {
            readMoreBtn.textContent = "Show more";
        } else {
            readMoreBtn.textContent = "Mostrar mais";
        }
    }
})

// show/hide skills items
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    })
})

// add box shadow on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0)
})

// dark mode
$(".dark").hide();

function modificador() {

    if ($(".dark").is(":visible")) {

        $("body").removeClass("dark")

    } else {
        $("body").addClass("dark")
    }
}

// language website

// LET NAVBAR
let desenvolvedor = "Developer"
let inicio = "Home"
let sobre = "About"
let habilidade = "Skills"
let servicos = "Services"
let Portfolio = "Portfolio"
let contacte_me = "Let's Talk"

// LET HOME
let titulo = "UI/UX Design & Fullstack Web Developer"
let apresentacao = "hi, I'm Arthur Estevan"
let arthur = "I'm nineteen years yold. I'm shoemaker and future developer. I'm tall, thin and funny. My favorite TV series is 'The Officer'. That's me..."

// LET ABOUT
let biografia_paragrafo01 = "My name is Arthur Estevan Vargas, I was born on December 27, 2002, at Monsenhor José Locks Hospital. I am the son of Ezequiel Augusto Vargas and Alcione Salvador, my mother is currently a beautician and my father is a model maker. When I turned 18, like all young people, I didn't know where to run, I thought of different areas to specialize. I started this journey thinking about doing a 'Graduate in Music' because different aspects of music are approached, from its history, mastery of instruments and techniques, to composition and conducting, something that always caught my attention, however, I soon saw that it was not to me. Then what we will call here 'The dream' came in the form of Architecture and Urbanism which I spent a short 2 months taking classes but due to the lack of students in the class they had to cancel the course, I'm not much to complain, however, thank you until today for not having started, you will already know why. At the end of 2021 I realized that I still hadn't chosen a profession, but I also realized that I wanted to be inserted in the university environment and I couldn't give up looking for the career that fits me."
let biografia_paragrafo02 = "So it was at that exact moment that the wind took me to the Information System, a formal, socio-technical and organizational system used to collect, process, store and disseminate informational data, which can be either a computerized information system or a manual system. So through referrals I started my career as a programmer or for the closest developers from the Entra21 program. Developed by BLUSOFT, a non-profit organization that aims to promote Blumenau as a Technological Pole, Entra21 is a training and employability program with the objective of supplying the technological sector with specialized labor. It is intended for young people aged 16 and over and adults who live in Santa Catarina and are attending or having completed high school or higher education."
let biografia_paragrafo03 = "This would be a little about Arthur more technical and focused only on my career... Now we are going to talk about Arthur for real, I am a young man who dreams big in his goals, however, I have an important base in my life which is the family , moreover, I like to always remember that we have a starting point that we can never forget. What would my starting point be? - My starting point is where I currently work Suzana Santos Calçados. Here I was able to further develop my notions of what it is like to be inserted in the labor market, I also chose footwear because my city has a strong influence on the footwear industry. Wait I know you must be wondering what a developer is doing working with footwear. And Jesus answered him, saying, It is written, Man shall not live by bread alone, but by every word of God. Jokes aside, I'm here because it was where I got my first job opportunity."
let biografia_paragrafo04 = "Now we can talk a little about my hobbies, in my free time I develop websites is one of the hobbies I acquired over time, in addition I also love to go outdoors like hiking, hiking and camping, I also like to read good books I am currently reading '48 Laws of Power' by author Robert Greene, great book, I recommend it to anyone who likes to know how power evolves over the years and how to conquer it. Thats me."
let baixar = "Download CV "
let mostrarMais = "Show more"

// LET SKILLS
let idioma = "language"
let idioma01 = "French"
let idioma02 = "English"

// LET SERVICES
let design = "User interface design or user interface engineering is the development of computers, applications, machines, mobile communication devices, software and websites with a focus on user experience and interaction."
let frontend = "My front-end web development is the development of a website's graphical user interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website."
let backend = "As a back end developer I work with the server side of applications, being responsible for everything that happens behind the screen. I am also responsible for developing the codes that will pass the instructions to the application, so that users can access the interface and fulfill the desired requests."

// LET RECENTWORKS
let workrecents = "My Recent Work"
let titulo_projeto = "Here Are Some Of My Most Recent Solo Projects"

let projeto01 = "Responsive Personal Portfolio Website Using Html, CSS and JavaScript"
let sobre_projeto01 = "A good portfolio brings several advantages to its owner. He is literally a competitive advantage that makes the difference between getting a good job or not. It's no use having a great resume and excellent service if your window is poorly done."

let projeto02 = "Entra21 Project Bank Account Using Java Complete Logic in Backend"
let sobre_projeto02 = "Banking System, where we have the features of a bank such as: account registration, account login, day-to-day banking actions and also implementation of a business rule, in this case I used `investments` in the project to highlight the rule of business."

let projeto03 = "Project website \"Enta21 JavaScript\" using general knowledge"
let sobre_projeto03 = "Coming to another stage of our course, I was asked to deliver a simple project made in HTML, using knowledge such as JavaScript, JQuery and API. I created a mini site where you can browse through these three subjects and learn more about them. Exercises proposed in the classroom were also carried out within the topics. Thus structuring a complete site with informative content and exercises for practice."

// LET TESTEMONIAL
let testemunho = "Testimonial"

// LET LET'S CONTACT
let entrar_contato = "Good, Arthur! Follow this same tune and, for sure, you will reap the fruits of it. Effort, dedication and constant learning should be your guides on this journey! We're in this together!"
let enviardados = "Submit"


$("#portugues").on("click", (event) => {
    
    event.preventDefault();
    location.reload();
})


$("#ingles").on("click", (event) => {

    event.preventDefault();

    // NAVBAR TRADUCTION
    $(".developer").text(desenvolvedor)
    $(".inicio").text(inicio)
    $(".sobre").text(sobre)
    $(".habilidades").text(habilidade)
    $(".servicos").text(servicos)
    $(".portifolio").text(Portfolio)
    $(".contato").text(contacte_me)
    // NAVBAR TRADUCTION

    // HOME TRADUCTION
    $(".titulo").text(titulo)
    $(".apresentacao").text(apresentacao)
    $(".arthur").text(arthur)
    // HOME TRADUCTION

    // ABOUT TRADUCTION
    $(".biografia-paragrafo01").text(biografia_paragrafo01)
    $(".biografia-paragrafo02").text(biografia_paragrafo02)
    $(".biografia-paragrafo03").text(biografia_paragrafo03)
    $(".biografia-paragrafo04").text(biografia_paragrafo04)
    $(".baixar").empty().append(
        $("<a>", { text: baixar }).append(
            $(" <i>", { class: "uil uil-download-alt" })
        )
    )
    $("#mostrandoMais").text(mostrarMais)
    // ABOUT TRADUCTION

    // //read more about
    // const readMoreBtn = document.querySelector('.read-more');
    // const readMoreContent = document.querySelector('.read-more-content');

    // readMoreBtn.addEventListener('click', () => {
    //     readMoreContent.classList.toggle('show-content')
    //     if (readMoreContent.classList.contains('show-content')) {
    //         readMoreBtn.textContent = "Mostrar menos";
    //     } else {
    //         readMoreBtn.textContent = "Mostrar mais";
    //     }
    // })

    // SKILLS TRADUCTION
    $(".idioma").text(idioma)
    $(".idioma01").text(idioma01)
    $(".idioma02").text(idioma02)
    // SKILLS TRADUCTION

    // SERVICES TRADUCTION
    $(".design").text(design)
    $(".fontend").text(frontend)
    $(".backend").text(backend)
    // SERVICES TRADUCTION

    // RECENT WORK TRADUCTION
    $(".titulo-work").text(workrecents)
    $(".titulo-projeto").text(titulo_projeto)
    $(".projeto01").text(projeto01)
    $(".sobre-projeto01").text(sobre_projeto01)
    $(".projeto02").text(projeto02)
    $(".sobre-projeto02").text(sobre_projeto02)
    $(".projeto03").text(projeto03)
    $(".sobre-projeto03").text(sobre_projeto03)
    // RECENT WORK TRADUCTION

    // TESTEMONIAL TRADUCTION
    $(".testemunho").text(testemunho)
    // TESTEMONIAL TRADUCTION

    // CONTACT-ME TRADUCTION
    $(".entrar-contato").text(entrar_contato)
    $("#enviardados").val(enviardados)

    $('#nome').attr('placeholder',
    'Name');

    $('#email').attr('placeholder',
    'Email');

    $('#assunto').attr('placeholder',
    'Subject');

    $('#mensagem').attr('placeholder',
    'Message');

    // CONTACT-ME TRADUCTION
})
