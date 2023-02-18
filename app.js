const hamBurBtn = document.querySelector('.hambur-btn');
const closeIcon = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.mobile-nav-menu');
const mobileMenuItems = Array.from(document.querySelectorAll('.nav-listitem'));

function toggleMenu() {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
  }
}

hamBurBtn.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);
mobileMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

const speakersDetails = [
  {
    speakerPic: './assets/beckham.jpg',
    speakerName: 'David Beckham',
    speakerTeam: 'England',
    speakerDesc: 'David Beckham played for England',
  },

  {
    speakerPic: './assets/ronaldoCrop.jpg',
    speakerName: 'Cristiano Ronaldo',
    speakerTeam: 'Portugal',
    speakerDesc: 'Cristiano Ronaldo plays for Portugal',
  },

  {
    speakerPic: './assets/messi.jpg',
    speakerName: 'Lionel Messi',
    speakerTeam: 'Argentina',
    speakerDesc: 'Lionel Messi plays for Argentina',
  },

  {
    speakerPic: './assets/mbappe.jpg',
    speakerName: 'Kylian Mbappe',
    speakerTeam: 'France',
    speakerDesc: 'Kylian Mbappe plays for France',
  },

  {
    speakerPic: './assets/Achrafhakimi.jpeg',
    speakerName: 'Achraf Hakimi',
    speakerTeam: 'Morocco',
    speakerDesc: 'Achraf Hakimi plays for Morocco',
  },

  {
    speakerPic: './assets/salmanAlFaraj.jpg',
    speakerName: 'Salman Al faraj',
    speakerTeam: 'Saudi Arabia',
    speakerDesc: 'Salman Al Faraj plays for Saudi Arabia',
  },
];

const speakersCatalogue = document.querySelector('.speakers-catalogue');

for (let j = 0; j < speakersDetails.length; j += 1) {
  speakersCatalogue.innerHTML += `
  <div class="speakers-card">
    <div class="speaker-picture-container">
      <img src="./assets/chesssvg.svg" alt="" class="chess-image">
      <img src="${speakersDetails[j].speakerPic}" alt="" class="speaker-picture">
    </div>
    <div class="speaker-details">
      <h3 class="speaker-name">${speakersDetails[j].speakerName}</h3>
      <p class="speaker-team">${speakersDetails[j].speakerTeam}</p>
      <p class="speaker-dotted-line">___</p>
      <p class="speaker-description">${speakersDetails[j].speakerDesc}</p>
    </div>
  </div>
  `;
}

const moreLessBtn = document.querySelector('.see-more-and-less-button');
const seeMoreCont = document.querySelector('.see-more-container');
const seeLessCont = document.querySelector('.see-less-container');
const hiddenSpeakers = Array.from(document.querySelectorAll('.speakers-card:nth-child(n+3)'));

function toggleSpeakers() {
  if (seeMoreCont.style.display === 'flex') {
    seeMoreCont.style.display = 'none';
    seeLessCont.style.display = 'flex';
    for (let k = 0; k < hiddenSpeakers.length; k += 1) {
      hiddenSpeakers[k].style.display = 'flex';
    }
  } else {
    seeMoreCont.style.display = 'flex';
    seeLessCont.style.display = 'none';
    for (let k = 0; k < hiddenSpeakers.length; k += 1) {
      hiddenSpeakers[k].style.display = 'none';
    }
  }
}

moreLessBtn.addEventListener('click', toggleSpeakers);