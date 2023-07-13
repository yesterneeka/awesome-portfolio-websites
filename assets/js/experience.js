AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/Circle.png",
    place: "Circle",
    time: "(Sept - Dec, 2021)",
    desp: "<li>Brainstormed with senior developers to enhance user experience resulting in 30% increase in the traffic.</li> <li>Conducted market research and field work to ensure better engagement for CIRCLE.</li>",
  },
  {
    title: "Social Impact Intern",
    cardImage: "assets/images/experience-page/techkaro.png",
    place: "Tech Karo '22",
    time: "(Jan - Feb, 2022)",
    desp: "<li>Produced engaging content, generating 100+ articles and blog posts to tackle gender parity in Technology.</li><li>Worked under the collaboration of Tech Karo, P&G Pakistan and S&P Global as mentors for life skills training.</li>",
  },
  {
    title: "Director IT & Design - LWIC",
    cardImage: "assets/images/experience-page/LWIC.png",
    place: "Lahore University of Management Sciences",
    time: "(Jan - Aug, 2021)",
    desp: "<li>Managed content, marketing and management for GCC – Girls Coding Camp ’23</li><li>Collaborated with Tajir.pk on Debugging the Startup Space</li>",
  },
  {
    title: "Research and Content Intern",
    cardImage: "assets/images/experience-page/SheLovesTech.jpeg",
    place: "Circle",
    time: "(Jan - Aug, 2021)",
    desp: "<li>Developed compelling written content for a tech startup empowering woman in tech industry. </li><li>The Persuasive Content Management System (PCMS) is a software solution designed to optimize the creation, management, and distribution of persuasive blog posts and articles.</li>",
  },
  {
    title: "Student Intern",
    cardImage: "assets/images/experience-page/LUMS.png",
    place: "LUMS",
    time: "(Mar - Dec, 2020)",
    desp: "<li>Implemented process improvements such as streamlining documentation workflows or digitizing manual processes. </li><li>Managed databases and compiled data for reports and proposals etc.</li>",
  },
  {
    title: "Tutor",
    cardImage: "assets/images/experience-page/Tutoring.jpeg",
    place: "Freelance",
    time: "(2019 - present)",
    desp: "<li>Assisted students in computational problem-solving, promoting a deeper understanding of STEM principles.</li><li>Developed customized lesson plans for CS and Mathematics Students Internationally.</li>",
  },
  {
    title: "Illustrator",
    cardImage: "assets/images/experience-page/Illustration.png",
    place: "Freelance",
    time: "(2019 - present)",
    desp: "<li>Created 100+ illustrations for a diverse range of projects including websites, social media campaigns and print materials.</li>",
  },

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "LUMS Community Service Society - LCSS",
    cardImage: "assets/images/experience-page/LcssLogo.jpeg",
    description:
      "Responsible for Project Rehbar with curriculum and content management. ",
  },
  {
    title: "Girls Coding Camp'23",
    cardImage: "assets/images/LWIC.png",
    description:
      "Managed content, marketing and management for GCC – Girls Coding Camp ’23.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
