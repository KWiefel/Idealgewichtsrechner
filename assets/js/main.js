// • Formel für Menschen mit einem zierlichen und schmalen Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 0,9

// • Formel für Menschen mit einem eher breiten Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 1,1

const bodyHeight = document.body.querySelector("#bodyheight");
const age = document.body.querySelector("#age");

const broad = document.body.querySelector("#broad");
const narrow = document.body.querySelector("#narrow");

const output = document.body.querySelector(".output");

const check = () => {
  if (broad.checked == true) {
    const result = bodyHeight.value - 100 + (age.value / 10) * 0.9 * 0.9;
    output.textContent = `Dein Idealgewicht ist ${result} kg.`;
  } else if (narrow.checked == true) {
    const result = bodyHeight.value - 100 + (age.value / 10) * 0.9 * 1.1;
    output.textContent = `Dein Idealgewicht ist ${result} kg.`;
  } else {
    output.textContent = "Bitte vervöllständige deine Eingabe";
    output.style.color = "red";
  }
};
