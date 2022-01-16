const root = document.querySelector(":root");
console.log(root);
const checkBox = document.querySelector(".checkbox");

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    root.style.setProperty("--cardBg", "hsl(228, 28%, 20%)");
    root.style.setProperty("--topBg", "hsl(232, 19%, 15%)");
    root.style.setProperty("--text-color", "hsl(228, 34%, 66%)");
    root.style.setProperty("--mainHeading--color", "hsl(0, 0%, 100%)");
    root.style.setProperty("--Bg", "hsl(230, 17%, 14%)");
  } else {
    root.style.setProperty("--topBg", "hsl(225, 100%, 98%)");
    root.style.setProperty("--text-color", "hsl(228, 12%, 44%)");
    root.style.setProperty("--mainHeading--color", "hsl(230, 17%, 14%)");
    root.style.setProperty("--cardBg", "hsl(227, 47%, 96%)");
    root.style.setProperty("--Bg", "hsl(0, 0%, 100%)");
  }
});
