const btnAll = document.querySelector('#btn-all').addEventListener('click', showAll);
const btn2022 = document.querySelector('#btn22');
const btn2021 = document.querySelector('#btn21');
const yearButtons = [btn2022, btn2021];

const gallery = document.querySelector('.gallery');
const items = document.querySelectorAll('.item');

yearButtons.forEach(button => button.addEventListener('click', toggleVisibility))

const items2021 = document.querySelectorAll('.yr-21');

console.log(btn2022)
console.log(gallery)
console.log(items2021)

function toggleVisibility() {
  console.log(this.dataset.yr)
  // let yearItems = document.querySelectorAll(`.yr-${this.dataset.yr}`);
  // yearItems.forEach(item => item.classList.toggle('hidden'));

  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains(`yr-${this.dataset.yr}`)) {
      items[i].classList.remove('hidden');
    } else {
      items[i].classList.add('hidden');
    }
  }
}

function showAll() {
  items.forEach(item => item.classList.remove('hidden'));
}