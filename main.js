const humberger = document.getElementById('hamburger-icon');
humberger.addEventListener('click', () => {
  humberger.classList.toggle('open');
});

const speaker = [
  {
    id: 0,
    sp_name: 'Linka adegoke',
    who: 'Web developper and Web consultant graduate from Microverse online school of programming.',
    studies: `Ndikumana Isaie studied HTML, CSS, JavaScript, ruby on rails, reactJs, github. He has 
    also experience in css frame work like Bootstrap.`,
    image: './images/speakers/Yinka-Adegoke.jpg',
  },

  {
    id: 1,
    sp_name: 'Linka adegoke',
    who: 'Web developper and Web consultant graduate from Microverse online school of programming.',
    studies: `Ndikumana Isaie studied HTML, CSS, JavaScript, ruby on rails, reactJs, github. He has 
    also experience in css frame work like Bootstrap.`,
    image: './images/speakers/erhomo.png',
  },

  {
    id: 2,
    sp_name: 'Linka adegoke',
    who: 'Web developper and Web consultant graduate from Microverse online school of programming.',
    studies: `Ndikumana Isaie studied HTML, CSS, JavaScript, ruby on rails, reactJs, github. He has 
    also experience in css frame work like Bootstrap.`,
    image: './images/speakers/Georgies mgobe.jpg',
  },

  {
    id: 3,
    sp_name: 'Linka adegoke',
    who: 'Web developper and Web consultant graduate from Microverse online school of programming.',
    studies: `Ndikumana Isaie studied HTML, CSS, JavaScript, ruby on rails, reactJs, github. He has 
    also experience in css frame work like Bootstrap.`,
    image: './images/speakers/honorable mutikura.jpg',
  },

  {
    id: 4,
    sp_name: 'Linka adegoke',
    who: 'Web developper and Web consultant graduate from Microverse online school of programming.',
    studies: `Ndikumana Isaie studied HTML, CSS, JavaScript, ruby on rails, reactJs, github. He has 
    also experience in css frame work like Bootstrap.`,
    image: './images/speakers/prof muyunga.jpg',
  },

  {
    id: 5,
    sp_name: 'Linka adegoke',
    who: 'Web developper and Web consultant graduate from Microverse online school of programming.',
    studies: `Ndikumana Isaie studied HTML, CSS, JavaScript, ruby on rails, reactJs, github. He has 
    also experience in css frame work like Bootstrap.`,
    image: './images/speakers/Tim-Berners-Lee.webp',
  },
];

const dynamicSeapkers = document.getElementById('speakers');

/* speaker  cards */
let speakerCard = '';
for (let j = 0; j < speaker.length; j += 1) {
  speakerCard += `
  <div class="day-speakers" id="day-speaker">
  <img src="${speaker[j].image}" alt="speaker1" class="speaker-img">
  <div class="speaker-bio">
    <h3 class="sp-name">${speaker[j].sp_name}</h3>
    <p class="who">${speaker[j].who}</p>
    <div class="grey-rule"></div>
    <p class="studies">${speaker[j].studies}.
    </p>
  </div>
</div>`;
}
dynamicSeapkers.innerHTML = speakerCard;