let mijnHamburger = document.querySelector("#hamburger");
let mijnNav = document.querySelector("nav");
mijnHamburger.addEventListener("click", function() {
  mijnNav.classList.toggle("zichtbaar");
})


// STAP 1: neem de drie afbeeldingen vast
let mijnAfbeeldingen = document.getElementByID("voorkant");

// STAP 2: doorloop de afbeeldingen
let i = 0;
while (i < mijnAfbeeldingen.length) {
			// STAP3: bij het doorlopen zet je de eventjes
			mijnAfbeeldingen[i].addEventListener("mouseover",veranderAfb);
			mijnAfbeeldingen[i].addEventListener("mouseout",zetAfbTerug);
      i++;
}

// Hoort bij STAP3 (zet je best BOVEN de while loop, maar deze manier van functiebeschrijving werkt ook eronder)
function veranderAfb() {
			var mijnSrc = this.getAttribute("src");
			this.setAttribute("src",this.getAttribute("data-rug"));
			this.setAttribute("data-rug",mijnSrc);
}

function zetAfbTerug() {
			var mijnSrc = this.getAttribute("src");
			this.setAttribute("src",this.getAttribute("data-rug"));
			this.setAttribute("data-rug",mijnSrc);
}
