const btn2023 = document.querySelector('#btn23');
const btn2022 = document.querySelector('#btn22');
const btn2021 = document.querySelector('#btn21');
const yearButtons = [btn2022, btn2021, btn2023];

const btnAll = document.querySelector('#btn-all')
btnAll.addEventListener('click', showAll);
const allButtons = yearButtons.concat(btnAll);
const gallery = document.querySelector('.gallery');
const items = document.querySelectorAll('.item');

yearButtons.forEach(button => button.addEventListener('click', toggleVisibility))

function toggleVisibility() {
  // console.log(this.dataset.yr)
  // let yearItems = document.querySelectorAll(`.yr-${this.dataset.yr}`);
  // yearItems.forEach(item => item.classList.toggle('hidden'));
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains(`yr-${this.dataset.yr}`)) {
      items[i].classList.remove('hidden');
    } else {
      items[i].classList.add('hidden');
    }
  }
  allButtons.forEach(button => button.classList.remove('tertiary'));
  this.classList.add('tertiary')
}

function showAll() {
  items.forEach(item => item.classList.remove('hidden'));
  yearButtons.forEach(button => button.classList.remove('tertiary'));
  btnAll.classList.add('tertiary')
}