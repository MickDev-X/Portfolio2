//nav flottante et angle 45°

nav {
  position: -webkit - sticky;
  position: sticky;
  z - index: 100;
  top: 2rem;
}

.nav {
  position: absolute;
  right: 2rem;
  /* top: 2rem; */
  rotate: -45deg;
  border - radius: 5px;
  width: auto;
  /* padding: 10px; */
  text - align: right;
  /* background-color: var(--back0); */
  background - color: rgba(93, 64, 55, 0.421);
}

nav a {
  text - decoration: none;
  color: var(--fontColor);
  display: block;
  height: 2rem;
  line - height: 2rem;
  border - radius: 5px;
  padding: 5px;
  /* margin: 5px; */
}

nav a: hover {
  background: linear - gradient(var(--fontColor3), var(--back0));
}


// le JS pour géréer la rotation

//gestion de l'affichage dynamique de la nav
setInterval(function () {
  if (!checkVisible(document.querySelector('header'))) {
    const nav = document.querySelector(".nav")
    const navTag = document.querySelector("nav")
    nav.style.rotate = '0deg';
    nav.style.right = '0px';
    navTag.style.top = '0.5rem';
  }
  else {
    const nav = document.querySelector(".nav")
    const navTag = document.querySelector("nav")
    nav.style.rotate = '-45deg';
    navTag.style.top = '2rem';
    nav.style.right = '2rem';
  }
}, 250);

const changeImg = (e) => {
  console.log(e.src);
  let src = e.src.split('potager');
  src = src[src.length - 1].split('.')
  src = parseInt(src[0], 10)
  src += 1
  src > 3 ? src = 1 : false
  e.src = `./img/potager${src}.PNG`
  console.log(src);

}
