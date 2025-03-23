// This is the most ass script Ive ever wrote. But it works!!!

function isOperator(value) {
    // TODO:
}

const keys = [
  "AC",
  "C",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  ".",
  "0",
  "EQUALS",
];

let display = document.getElementById("display");
let isEqualPressed = false;

display.textContent = "";

keys.forEach((key) => {
    const btn = document.getElementById(key);
    btn.addEventListener("click", () => {

        // Reset display if equal was pressed
        if (isEqualPressed) {
            if (!isOperator(key)) display.textContent = "";
            isEqualPressed = false;
            display.className = "text-[1.2rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255,255,255,0.5)] justify-end"
        }

        if (key === "AC") {
            // TODO:
        }
        else if (key === "C") {
            // TODO:
        }
        else if (key === "EQUALS") {
            // TODO:
        }
        else if (isOperator(key) || key === ".") {
            // TODO:
        }
        else {
            // TODO:
        }
    });
});
