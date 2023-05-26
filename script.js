var models = [
  {
    name: "Tandem Silindirler",
    img: "img/silinder2.jpeg",
    link: "https://www.cat.com/tr_TR/products/new/equipment/compactors/tandem-vibratory-rollers/15970053.html",
  },
  {
    name: "Madencilik Şovelleri",
    img: "img/paletli.jpeg",
    link: "https://www.cat.com/tr_TR/products/new/equipment/hydraulic-mining-shovels/hydraulic-mining-shovels/112500.html",
  },
  {
    name: "Toprak Silindirleri",
    img: "img/toprak_sil.jpeg",
    link: "https://www.cat.com/tr_TR/products/new/equipment/compactors/vibratory-soil-compactors/105540.html",
  },
  {
    name: "Motorlu Greyderler",
    img: "img/greyder.jpeg",
    link: "https://www.cat.com/tr_TR/products/new/equipment/motor-graders/motor-graders/1000023263.html",
  },
  {
    name: "Tekerlekli Yükleyiciler",
    img: "img/tekerlekli.jpeg",
    link: "https://www.cat.com/tr_TR/products/new/equipment/wheel-loaders/medium-wheel-loaders/1000023500.html",
  },
];

var index = 3;

document.querySelector(".card-title").textContent = models[index].name;

document.querySelector(".card-img-top").setAttribute("src", models[index].img);

document.querySelector(".card-link").setAttribute("href", models[index].link);
