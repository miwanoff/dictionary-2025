const words = {
  mouse: "миша",
  house: "будинок",
  apple: "яблуко",
};

const lang = prompt(
  "Введіть enUa або uaEn \nпереклад з англійської на українську або з української на англійську"
);

const n = prompt("Input a number");

label1: for (let i = 0; i < n; i++) {
  for (const key in words) {
    const element = key;
    alert(element);
    const word = prompt("Input translation or !");
    if (word === "!") {
      alert("Bye!");
      break label1;
    }
    if (word === words[key]) {
      alert("Correct!");
    } else {
      alert("Error!");
    }
  }
}

for (const key in words) {
  const element = words[key];
  document.writeln(`${key}: ${element} <br>`);
}
