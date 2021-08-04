svg4everybody();

function share() {
  const toggle = document.querySelector('.share__toggle');

  toggle.addEventListener('click', function () {
    this.closest('.share').classList.toggle('open')
  })
}

share();
