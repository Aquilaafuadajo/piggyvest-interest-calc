const DOMStrings = {
  buttons: document.querySelector('.btn-list'),
  rate: document.querySelector('.rate'),
  months: document.querySelector('.months'),
  principal: document.querySelector('.principal'),
  Month: document.querySelector('.months-2'),
  amount: document.querySelector('.amount'),
  calculateButton: document.querySelector('.calculate-btn'),
  hamburger: document.querySelector('.icon'),
  toggle: document.querySelectorAll('.temp'),
  aside: document.querySelector('.aside')
}

function setRate(e) {
  const button = e.target.closest('.btn')
  const classList = Array.from(button.classList)
  let rate = 0
  if(classList.includes('lighter-blue')) {
    rate = 13
    DOMStrings.rate.value = rate
  } else if(classList.includes('grey')) {
    rate = 6
    DOMStrings.rate.value = rate
  } else {
    rate = 10
    DOMStrings.rate.value = rate
  }
}

function calculateInterest() {
  const rate = DOMStrings.rate.value
  const period = DOMStrings.months.value
  const principal = DOMStrings.principal.value
  const numberOfMonths = DOMStrings.Month.value
  let interest = 0
  if(rate && period && principal && numberOfMonths) {
    interest = Math.round(principal * (Math.pow(1 + rate/100, period/numberOfMonths) - 1))
    DOMStrings.amount.textContent = `${interest}.00`
  } else {
    alert('please enter valid numbers to calculate your interest')
  }
}

let clicked = false
function toggled() {
  clicked = !clicked
  let elementsToBeToggled = Array.from(DOMStrings.toggle)
  let asideClassList = Array.from(DOMStrings.aside.classList)
  if(clicked === true) {
    // if(asideClassList.includes('shrink-in')) {
    //   DOMStrings.aside.classList.remove('shrink-in')
    // }
    elementsToBeToggled.forEach(elm => elm.classList.add('display-none'))
    DOMStrings.aside.style.width = '90px'
  }else {
    DOMStrings.aside.style.width = 'auto'
    elementsToBeToggled.forEach(elm => elm.classList.remove('display-none'))
    
  }
  
  console.log(DOMStrings.toggle.classList)
}

DOMStrings.hamburger.addEventListener('click', toggled)
DOMStrings.calculateButton.addEventListener('click', calculateInterest)
DOMStrings.buttons.addEventListener('click', setRate)
