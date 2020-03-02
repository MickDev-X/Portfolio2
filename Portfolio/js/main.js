
// Smothing scroll
(()=>{
  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a[href*="#"]');
    links.forEach(each => (each.onclick = scrollAnchors));
  })

function scrollAnchors(e) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  const target = this.getAttribute("href")
  let targetID = this.getAttribute("href").split('#')
  targetID = targetID[targetID.length - 1]
  const targetAnchor = document.querySelector(`#${targetID}`);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop-50, left: 0, behavior: 'smooth' });
  const checkIfDone = setInterval(function () {
    const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      // targetAnchor.focus();
      window.history.pushState('', '', target);
      clearInterval(checkIfDone);
    }
  }, 1000);
}
})()

//Ajoute la class animation
const animeAdd = () => {
  let jauges = document.querySelectorAll('[class*="jaugeR1"], [class*="jaugeL1"]');
  jauges.forEach(jauge => {
    jauge.classList.add('barAnime1');
  });

  jauges = document.querySelectorAll('[class*="jaugeR2"], [class*="jaugeL2"]');
  jauges.forEach(jauge => {
    jauge.classList.add('barAnime2');
  });
}

//Ajoute la class animation
const animeRemove = () => {
  let jauges = document.querySelectorAll('[class*="jaugeR1"], [class*="jaugeL1"]');
  jauges.forEach(jauge => {
    jauge.classList.remove('barAnime1');
  });

  jauges = document.querySelectorAll('[class*="jaugeR2"], [class*="jaugeL2"]');
  jauges.forEach(jauge => {
    jauge.classList.remove('barAnime2');
  });
}

// Check si l'element passé en param est affiché sur l'écran
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

//Regarde si la div  est affichée toutes les 250ms puis désactive l'interval
const runAnimation = () => {
var interval = setInterval(function () {
  if (checkVisible(document.getElementById('mesTechno'))) {
    animeAdd();
    clearInterval(interval); // Désactive le SetInterval
    setTimeout(() => {
      animeRemove();
    }, 5000);
  }
}, 250);
}

setInterval(function () {
  if (!checkVisible(document.getElementById('mesTechno'))) {
    runAnimation()
  }
}, 250);

