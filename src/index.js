import './index.html';
import './index.scss';
import {cardArr, techArr, priceArr} from './modules/multiply-cards';
import {burger,burgerOpen, feedbackOpenAside,feedbackOpenMain,feedbackClose,callClose,burgerOpacityClose,burgerClose, call,feedback, callOpenAside,  callOpenMain, feedbackCloseMobile,callCloseMobile, mainPageExtraservicesList, sidebarListLink, mainTitle, mainText,mainTextDropdown, brandsListDropdown,brandsList, brandsListDropdownUp,techList,techListDropdownUp,techListDropdown, brandsCarousel, brandsCarouselButton,techCarousel,techCarouselButton,pricelistCarouselButton,pricelistCarousel, langBlock,langBlockItems} from './modules/events';


for (let i = 0; i < cardArr.length; i++) {
  document.querySelector('.repair-brands__main').innerHTML += `
  <div class="repair-brands__content">
    <img src="assets/${cardArr[i]}.svg" alt="${cardArr[i]}">
    <a href="#">
      <img src="assets/go.svg" alt="раскрыть">
    </a>
  </div>
  `
}

for (let i = 0; i < techArr.length; i++) {
  document.querySelector('.repair-tech__main').innerHTML += `
  <div class="repair-tech__content">
    <span class="repair-tech__content--span">${techArr[i]}</span>
    <a href="#">
      <img src="assets/go.svg" alt="раскрыть">
    </a>
  </div>
  `
}

for (let i = 0; i < priceArr.length; i++) {
  document.querySelector('.pricelist__main-response').innerHTML += `
  <div class="pricelist__main-response-card">
    <div class="pricelist__main-response-title">
      <span class="services">Ремонтные услуги</span>
      <span>${priceArr[i].service}</span>
    </div>
    <div class="pricelist__main-response-price">
      <span class="price">Цена</span>
      <span>${priceArr[i].price}</span>
    </div>
    <div class="pricelist__main-response-time">
      <span class="time">Срок</span>
      <span>${priceArr[i].time}</span>
    </div>
    <div class="pricelist__main-response-link">
      <a href="#">
        Заказать
        <div>
          <img src="assets/arrow-small.svg" alt="стрелка" />
        </div>
      </a>
        </div>
    </div>
  `
}

// Модальные окна 

burgerOpen.addEventListener('click', () => {
  burger.style.zIndex = '2'
})

burgerClose.addEventListener('click', () => {
  burger.style.zIndex = '-1'
})

burgerOpacityClose.addEventListener('click', () => {
  burger.style.zIndex = '-1'
})

callOpenAside.addEventListener('click', () => {
  call.style.zIndex = '2'
})

callOpenMain.addEventListener('click', () => {
  call.style.zIndex = '2'
})

callClose.addEventListener('click', () => {
  call.style.zIndex = '-1'
})
callCloseMobile.addEventListener('click', () => {
  call.style.zIndex = '-1'
})

feedbackOpenAside.addEventListener('click', () => {
  feedback.style.zIndex = '2'
})

feedbackOpenMain.addEventListener('click', () => {
  feedback.style.zIndex = '2'
})

feedbackClose.addEventListener('click', () => {
  feedback.style.zIndex = '-1'
})
feedbackCloseMobile.addEventListener('click', () => {
  feedback.style.zIndex = '-1'
})

// Активные ссылки 

for (let i = 0; i < mainPageExtraservicesList.length; i++) {
  mainPageExtraservicesList[i].addEventListener('click', () => {
    for (let j = 0; j < mainPageExtraservicesList.length; j++){
      mainPageExtraservicesList[j].classList.remove('active')
    }
    mainPageExtraservicesList[i].classList.add('active')
  })
}

for (let i = 0; i < sidebarListLink.length; i++) {
  sidebarListLink[i].addEventListener('click', () => {
    for (let j = 0; j < sidebarListLink.length; j++){
      sidebarListLink[j].classList.remove('aside__main-item--active')
    }
    sidebarListLink[i].classList.add('aside__main-item--active')
    mainTitle.textContent = `${sidebarListLink[i].textContent}`
  })
}

// Дропдауны 

mainTextDropdown.addEventListener('click', (event) => {
  if (window.innerWidth < 1024){
    mainText.style.maxHeight = 'none'
    event.preventDefault()
  }
})

brandsListDropdown.addEventListener('click', (event) => {
  if (window.innerWidth >= 768){
    brandsList.style.maxHeight = 'none'
    event.preventDefault()
    brandsListDropdown.style.display = 'none'
    brandsListDropdownUp.style.display = 'flex'
  }
})

brandsListDropdownUp.addEventListener('click', (event) => {
  if (window.innerWidth >= 768){
    brandsList.style.maxHeight = '160px'
    event.preventDefault()
    brandsListDropdownUp.style.display = 'none'
    brandsListDropdown.style.display = 'flex'
  } 
})

techListDropdown.addEventListener('click', (event) => {
  if (window.innerWidth >= 768){
    techList.style.maxHeight = 'none'
    event.preventDefault()
    techListDropdown.style.display = 'none'
    techListDropdownUp.style.display = 'flex'
  }
})

techListDropdownUp.addEventListener('click', (event) => {
  if (window.innerWidth >= 768){
    techList.style.maxHeight = '160px'
    event.preventDefault()
    techListDropdownUp.style.display = 'none'
    techListDropdown.style.display = 'flex'
  } 
})


// слайдеры

for (let i = 0; i < brandsCarouselButton.length; i++) {
  brandsCarouselButton[i].addEventListener('click', () => {
    for (let j = 0; j < brandsCarouselButton.length; j++){
      brandsCarouselButton[j].classList.remove('carousel-active')
    }
    brandsCarouselButton[i].classList.add('carousel-active')
  })
}

if (window.innerWidth < 768) {
  for (let i = 0; i < brandsCarouselButton.length; i++) {
    brandsCarouselButton[i].addEventListener("click", function () {
      if (i === 0) {
        brandsCarousel.style.marginLeft = `${0}px`;
      } else if (i === 1) {
        brandsCarousel.style.marginLeft = `-256px`;
      } else if (i === 2) {
        brandsCarousel.style.marginLeft = `-${256 * 2}px`;
      } else if (i === 3) {
        brandsCarousel.style.marginLeft = `-${256 * 3}px`;
      } else if (i === 4) {
        brandsCarousel.style.marginLeft = `-${256 * 4}px`;
      } else if (i === 5) {
        brandsCarousel.style.marginLeft = `-${256 * 5}px`;
      } else if (i === 6) {
        brandsCarousel.style.marginLeft = `-${256 * 6}px`;
      } else if (i === 7) {
        brandsCarousel.style.marginLeft = `-${256 * 7}px`;
      } else if (i === 8) {
        brandsCarousel.style.marginLeft = `-${256 * 8}px`;
      }
    })
  }
}

for (let i = 0; i < techCarouselButton.length; i++) {
  techCarouselButton[i].addEventListener('click', () => {
    for (let j = 0; j < techCarouselButton.length; j++){
      techCarouselButton[j].classList.remove('carousel-active')
    }
    techCarouselButton[i].classList.add('carousel-active')
  })
}

if (window.innerWidth < 768) {
  for (let i = 0; i < techCarouselButton.length; i++) {
    techCarouselButton[i].addEventListener("click", function () {
      if (i === 0) {
        techCarousel.style.marginLeft = `${0}px`;
      } else if (i === 1) {
        techCarousel.style.marginLeft = `-256px`;
      } else if (i === 2) {
        techCarousel.style.marginLeft = `-${256 * 2}px`;
      } else if (i === 3) {
        techCarousel.style.marginLeft = `-${256 * 3}px`;
      } 
    })
  }
}

for (let i = 0; i < pricelistCarouselButton.length; i++) {
  pricelistCarouselButton[i].addEventListener('click', () => {
    for (let j = 0; j < pricelistCarouselButton.length; j++){
      pricelistCarouselButton[j].classList.remove('carousel-active')
    }
    pricelistCarouselButton[i].classList.add('carousel-active')
  })
}

if (window.innerWidth < 768) {
  for (let i = 0; i < pricelistCarouselButton.length; i++) {
    pricelistCarouselButton[i].addEventListener("click", function () {
      if (i === 0) {
        pricelistCarousel.style.marginLeft = `${0}px`;
      } else if (i === 1) {
        pricelistCarousel.style.marginLeft = `-276px`;
      } else if (i === 2) {
        pricelistCarousel.style.marginLeft = `-${276 * 2}px`;
      } else if (i === 3) {
        pricelistCarousel.style.marginLeft = `-${276 * 3}px`;
      } else if (i === 4) {
        pricelistCarousel.style.marginLeft = `-${276 * 4}px`;
      } 
    })
  }
}

// Языки 

for (let i = 0; i < langBlockItems.length; i++) {
  langBlockItems[i].addEventListener('click', (event) => {
    for (let j = 0; j < langBlockItems.length; j++) {
      langBlockItems[j].classList.remove('aside__contacts-lang--active')
    }
    langBlockItems[i].classList.add('aside__contacts-lang--active')
    event.preventDefault()
  })
}