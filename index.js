let navList = document.getElementById('nav-list')
let navList2 = document.getElementById('nav-list2')
let burger = document.getElementById('burger')
let navLink = document.querySelectorAll('.nav-link2')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  navList.classList.toggle('active')
  navList2.classList.toggle('open')

  if (navList2.classList.contains('open')) {
    navList2.classList.remove('nav-list2')
  } else {
    navList2.classList.add('nav-list2')
  }
})

const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
})

const sr2 = ScrollReveal({
  distance: '85px',
  duration: 2600,
  delay: 450,
  reset: true
})

sr.reveal('.social', { delay: 400, origin: 'bottom' })
sr.reveal('nav', { delay: 300, origin: 'top' })

sr2.reveal('.introduction', { delay: 200, origin: 'left' })
sr2.reveal('.about', { delay: 300, origin: 'bottom' })
sr2.reveal('.services', { delay: 300, origin: 'bottom' })
sr2.reveal('.contact', { delay: 300, origin: 'bottom' })
