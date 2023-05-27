let models = [
  {
    name: "Vibratory Soil Compactors",
    text: "Cat Vibratory Soil Compactors are durable and reliable. They offer high compaction performance, speed and gradeability to maximize productivity on a wide range of applications.Cat Vibratory Soil Compactors are durable and reliable.",
    image: "img/toprak_sil.jpeg",
    link: "https://www.cat.com/en_GB/products/new/equipment/compactors/vibratory-soil-compactors/106381.html",
  },
  {
    name: "Off-highway Trucks",
    text: "For over 50 years, rugged Cat trucks and mining trucks have worked in the harsh conditions of mines, construction projects and quarries around the world. Pass-matched with our wheel loaders and excavators, you can count on our haul.",
    image: "img/maden_kam.jpeg",
    link: "https://www.cat.com/en_GB/products/new/equipment/off-highway-trucks/off-highway-trucks/18256812.html",
  },
  {
    name: "Motor Graders",
    text: "Built with decades of design experience, you'll find the perfect Cat® motor grader for your grading application. Advanced hydraulics, control-type options and technology options, you'll complete your grading projects on time and at a lower cost.",
    image: "img/greyder.jpeg",
    link: "https://www.cat.com/en_GB/products/new/equipment/motor-graders/motor-graders/18552913.html",
  },
  {
    name: "Wheel Loaders",
    text: "From material handling and truck loading, general construction or stockpiling, Cat® medium wheel loaders are ready for your work. Spacious cabs and low effort controls ensure a comfortable and productive environment.",
    image: "img/tekerlekli.jpeg",
    link: "https://www.cat.com/en_GB/products/new/equipment/wheel-loaders/medium-wheel-loaders/1000029167.html",
  },
  {
    name: "Excavators",
    text: "Their size make Cat® mid-size excavators easy to transport to the jobsite. With ample power, exclusive factory-equipped technology, comfortable cabs, simple maintenance and matching Cat attachments, Cat excavators will help you complete ",
    image: "img/paletli.jpeg",
    link: "https://www.cat.com/en_GB/products/new/equipment/excavators/medium-excavators/1000032602.html",
  },
];

let index = 0;
let slaytCount = models.length;

var setInterval;

let settings = {
  duration: "2000",
  random: false,
};

init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });
// ----------------Mouse Time---------------
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});
// --------------End Mouse Time-------------
// ---------------Start Slide-------------

function init(settings) {
  let prev;
  interval = setInterval(function () {
    if (settings.random) {
      // random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      // artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}
function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document.querySelector(".card-text").textContent = models[index].text;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
