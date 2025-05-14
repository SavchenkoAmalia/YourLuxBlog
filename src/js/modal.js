const openBtn = document.querySelector('.create-home__add');
const modal = document.querySelector('.create-home__modal');
const closeBtn = document.querySelector('.create-home__close');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll');
});

//! buttons

const button1 = document.querySelector('.base-home__button');
const button2 = document.querySelector('.create-home__all');
const buutonBack = document.querySelector('.all-home__back');

function closeSections() {
  document.getElementById('section1').style.display = 'none';
  document.getElementById('section2').style.display = 'none';
  document.getElementById('section3').style.display = 'block';
  
  document.getElementById('section3').scrollIntoView({ behavior: 'smooth' });
}

function schowSections() {
    document.getElementById('section1').style.display = 'block';
  document.getElementById('section2').style.display = 'block';
  document.getElementById('section3').style.display = 'none';
  
  document.getElementById('sections1').scrollIntoView({ behavior: 'smooth' });

}

button1.addEventListener('click', closeSections);
button2.addEventListener('click', closeSections);
buutonBack.addEventListener('click', schowSections);