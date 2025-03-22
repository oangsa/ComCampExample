// This is the most ass script Ive ever wrote. But it works!!!

function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/" || value === "%";
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
let isEqual = false;

display.textContent = "";

keys.forEach((key) => {
    const btn = document.getElementById(key);
    btn.addEventListener("click", () => {

        // Reset display if equal was pressed
        if (isEqual) {
            if (!isOperator(key)) display.textContent = "";
            isEqual = false;
            display.className = "text-[1.2rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255,255,255,0.5)] justify-end"
        }

        if (key === "AC") {
            display.textContent = "";
        }
        else if (key === "C") {
            display.textContent = display.textContent.slice(0, -1);
        }
        else if (key === "EQUALS") {
            // Just use Eval :)
            try {
                display.textContent = eval(display.textContent);
            }
            catch (error) {
                display.textContent = "Error";
                display.className = "text-[1.2rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255,255,255,0.5)] justify-end text-red-400"
                isEqual = true;
                return;
            }
            // Make things better
            display.className = "text-[1.2rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255,255,255,0.5)] justify-end text-[1.7rem] text-white"
            isEqual = true;
        }
        else if (isOperator(key) || key === ".") {
            // Prevent multiple operators
            if (isOperator(display.textContent.slice(-1)) || display.textContent.slice(-1) === ".") {
                display.textContent = display.textContent.slice(0, -1) + key;
                return;
            }
            if (display.textContent === "" && key === '.') display.textContent += '0';
            display.textContent += key;
        }
        else {
            // Prevent multiple zeros
            if (display.textContent === '0' && key === '0') return;
            display.textContent += key;
        }
    });
});
