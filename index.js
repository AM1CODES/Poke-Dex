const setNormalView = (isNormalView) => {
  if (isNormalView) {
    document.querySelector("#normal-view").classList.add("selected");
    document.querySelector("#compact-view").classList.remove("selected");

    document.querySelectorAll(".card-body").forEach((cardBody) => {
      cardBody.classList.remove("hidden");
    });

    document.querySelectorAll(".row>div").forEach((ele) => {
      ele.classList.replace("col-lg-2", "col-lg-4");
    });
  } else {
    document.querySelector("#compact-view").classList.add("selected");
    document.querySelector("#normal-view").classList.remove("selected");

    document.querySelectorAll(".card-body").forEach((cardBody) => {
      cardBody.classList.add("hidden");
    });

    document.querySelectorAll(".row>div").forEach((ele) => {
      ele.classList.replace("col-lg-4", "col-lg-2");
    });
  }
};

setNormalView(true); // By default normal view is enabled.

document.querySelector("#normal-view").addEventListener("mousedown", () => {
  setNormalView(true);
});

document.querySelector("#compact-view").addEventListener("mousedown", () => {
  setNormalView(false);
});

const sortCards = byName => {
  const galleryRow = document.querySelector('.row');
  const cards = [...galleryRow.querySelectorAll(".col-lg-4")];
  galleryRow.innerHTML = "";
  if (byName) {
    cards.sort((c1, c2) => {
      return c1.querySelector(".card-title").textContent < c2.querySelector(".card-title").textContent ? -1 : 1;
    })
    console.log(cards)
  } else {
    cards.sort((c1, c2) => {
      return parseInt(c1.querySelector(".card-subtitle").textContent.substr(1)) - parseInt(c2.querySelector(".card-subtitle").textContent.substr(1));
    })
    console.log(cards)
  }

  cards.forEach(c => {
    galleryRow.appendChild(c);
  })
}

document.querySelector('#sort-number').addEventListener('click', () => {
  sortCards(false);
  document.querySelector('#sort-number').classList.add('active')
  document.querySelector('#sort-name').classList.remove('active')
})

document.querySelector('#sort-name').addEventListener('click', () => {
  sortCards(true);
  document.querySelector('#sort-name').classList.add('active')
  document.querySelector('#sort-number').classList.remove('active')
})

// START POKEMON SEARCH
const pokemons = [];

document.querySelectorAll("h5.card-title").forEach((e) => {
  pokemons.push({ name: e.innerHTML });
});

document.querySelector("#search-button").addEventListener("click", () => {
  if(!document.querySelector("#search-bar").value) return alert("Please enter a Pokémon name");

  const index = lunr(function () {
    this.ref("name");
    this.field("name");

    pokemons.forEach(function (doc) {
      this.add(doc);
    }, this);
  });

  const search = document.querySelector("#search-bar").value;
  const results = index.search(search).map((e) => e.ref);
  console.log(results);
  document
    .querySelectorAll("#gallery > .container > .row > div")
    .forEach((e) => {
      const pokemonName = e.querySelector(".card-title").innerHTML;
      if (!results.includes(pokemonName)) {
        e.style.display = "none";
      } else {
        e.style.display = "block";
      }
    });
});
// END POKEMON SEARCH

const fixBrokenImages = () => {
  const fallbackURL = "images/fallback_image.png";
  const img = document.getElementsByTagName("img");
  for (let i = 0; i < img.length; i++) {
    let t = img[i];
    if (t.naturalWidth === 0) {
      t.src = fallbackURL;
    }
  }
};

window.onload = fixBrokenImages;

// START OF "TRIGGERING SEARCH BUTTON WHEN ENTER KEY IS CLICKED"
$("#search-bar").keypress(function (event) {
  if (event.keyCode === 13) {
    $("#search-button").click();
  }
});
// END OF "TRIGGERING SEARCH BUTTON WHEN ENTER KEY IS CLICKED"

const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", modeSwitch);

let isLight = true;

function modeSwitch() {
  isLight = !isLight;
  let root = document.body;

  isLight ? (toggle.innerText = "🌞") : (toggle.innerText = "🌚");

  root.classList.toggle("lightMode");
}
