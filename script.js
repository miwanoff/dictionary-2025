const words = {
  mouse: "миша",
  house: "будинок",
  apple: "яблуко",
};

for (const key in words) {
  const element = words[key];
  alert(element);
  const word = prompt("Input translation");
  if (word === key) {
    alert("Correct!");
  } else {
    alert("Error!");
  }
}


for (const key in words) {
  const element = words[key];
  document.writeln(element);
}