const toggle = document.querySelector('.toggle');
const whitejs = document.querySelector('.whitejs')

toggle.addEventListener('click', () => toggle.classList.toggle('active'));

toggle.addEventListener('click', () => {
    whitejs.classList.toggle('white')
  })

