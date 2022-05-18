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
    image: './images/speakers/Linka adegoke.png',
  },

  {
    id: 1,
    sp_name: 'erhomo',
    who: 'Web developper and Web consultant graduate from Microverse online school of programming.',
    studies: `Ndikumana Isaie studied HTML, CSS, JavaScript, ruby on rails, reactJs, github. He has 
    also experience in css frame work like Bootstrap.`,
    image: './images/speakers/erhomo.png',
  },

  {
    id: 2,
    sp_name: 'Georgies mgobe',
    who: 'Web developper and Web consultant graduate from Microverse online school of programming.',
    studies: `Ndikumana Isaie studied HTML, CSS, JavaScript, ruby on rails, reactJs, github. He has 
    also experience in css frame work like Bootstrap.`,
    image: './images/speakers/George mgobe.png',
  },

  {
    id: 3,
    sp_name: 'daniel',
    who: 'Web developper and Web consultant graduate from Microverse online school of programming.',
    studies: `Ndikumana Isaie studied HTML, CSS, JavaScript, ruby on rails, reactJs, github. He has 
    also experience in css frame work like Bootstrap.`,
    image: './images/speakers/daniel.png',
  },

  {
    id: 4,
    sp_name: 'Kayode Yusuf',
    who: 'Web developper and Web consultant graduate from Microverse online school of programming.',
    studies: `Ndikumana Isaie studied HTML, CSS, JavaScript, ruby on rails, reactJs, github. He has 
    also experience in css frame work like Bootstrap.`,
    image: './images/speakers/kayode yusuf.png',
  },

  {
    id: 5,
    sp_name: 'Prof Muyunga',
    who: 'Web developper and Web consultant graduate from Microverse online school of programming.',
    studies: `Ndikumana Isaie studied HTML, CSS, JavaScript, ruby on rails, reactJs, github. He has 
    also experience in css frame work like Bootstrap.`,
    image: './images/speakers/prof muyunga.png',
  },
];

const dynamicSeapkers = document.getElementById('speakers');

/* speaker  cards */
let speakerCard = '';
for (let j = 0; j < speaker.length; j += 1) {
  speakerCard += `
  <div class="day-speakers" id="day-speaker">
  <div class="sp-img">
    <img src="${speaker[j].image}" alt="speaker1" class="speaker-img">
  </div>
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

const morespeakers = document.createElement('button');
morespeakers.className = 'morebtn';
morespeakers.type = 'button';
morespeakers.innerHTML = 'MORE <i class="chevron down icon"></i>';
dynamicSeapkers.appendChild(morespeakers);

const speakerCards = Array.from(document.querySelectorAll('.day-speakers'));

speakerCards.forEach((card, index) => {
  if (index > 1) {
    card.classList.add('hide');
  }
});

const moreBtn = document.querySelector('.morebtn');

const moreBtnText = (card) => {
  if (card.classList.contains('hide')) {
    moreBtn.innerHTML = 'MORE <i class="fa-solid fa-angle-down  down"></i>';
  } else {
    moreBtn.innerHTML = 'LESS <i class="fa-solid fa-angle-up up"></i>';
  }
};

moreBtn.addEventListener('click', () => {
  speakerCards.forEach((card, index) => {
    if (index > 1) {
      card.classList.toggle('hide');
      moreBtnText(card);
    }
  });
});