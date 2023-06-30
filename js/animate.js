const paragraph1 = document.querySelector(".ml3");
const paragraph2 = document.querySelector(".ml4");
const paragraph3 = document.querySelector(".ml5");

// For Heading
// Wrap every letter in a span

function animate1() {
  let textWrapper = document.querySelector(".ml6 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml6 .letter",
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 1000,
      delay: (el, i) => 50 * i,
    })
    .add({
      targets: ".ml6",
      opacity: 1,
    });
}
animate1();

//For First Paragraphs
const addFirstParagraph = setTimeout(() => {
  paragraph1.classList.remove("hidden");
  animate2();
}, 1200);
const removeFirstParagraph = setTimeout(() => {
  paragraph1.classList.add("hidden");
}, 6700);


//For Second Paragraph
const addSecondParagraph = setTimeout(()=>{
    paragraph2.classList.remove("hidden");
    animate3();
}, 6700)

const removeSecondParagraph = setTimeout(()=>{
    paragraph2.classList.add("hidden");
}, 11700)


//For Third Paragraph

const addThirdParagraph = setTimeout(()=>{
    paragraph3.classList.remove("hidden");
    animate4();
}, 11700)







function animate2() {
  // Wrap every letter in a span
  let textWrapper = document.querySelector(".ml3");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml3 .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: (el, i) => 50 * (i + 1),
    })
    .add({
      targets: ".ml3",
      opacity: 1,
      duration: 500,
    });
}

function animate3(){
    // Wrap every letter in a span
  let textWrapper = document.querySelector(".ml4");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml4 .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: (el, i) => 50 * (i + 1),
    })
    .add({
      targets: ".ml4",
      opacity: 1,
      duration: 500,
    });
}

function animate4(){
    // Wrap every letter in a span
  let textWrapper = document.querySelector(".ml5");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml5 .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: (el, i) => 50 * (i + 1),
    })
    .add({
      targets: ".ml5",
      opacity: 1,
      duration: 500,
    });
}