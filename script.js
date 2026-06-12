const bill = document.getElementById("bill");
const people = document.getElementById("people");
const tipAmount = document.getElementById("tipAmount");
const totalPerson = document.getElementById("totalPerson");
const tipCustomPercent = document.getElementById("tipCustomPercent");
const tipButtons = document.querySelectorAll(".tip-btn");
const reset = document.getElementById("reset-btn");

let selectedTip = 0;

function clearTipSelection() {
  tipButtons.forEach((b) =>
    b.classList.remove("bg-green-400", "text-green-900"),
  );
}

function calculateAll() {
  const billValue = Math.max(0, Number(bill.value) || 0);
  const peopleNbr = Math.max(0, Number(people.value) || 0);
  const tipPercent = selectedTip;

  reset.disabled = billValue === 0 || peopleNbr === 0;

  if (reset.disabled) {
    reset.classList.add("bg-green-800");
    reset.classList.remove("bg-green-400");
  } else {
    reset.classList.remove("bg-green-800");
    reset.classList.add("bg-green-400", "text-green-900");
  }

  if (billValue === 0 || peopleNbr === 0) {
    tipAmount.textContent = "0.00";
    totalPerson.textContent = "0.00";
    return;
  }

  const tipAmountCalcul = (billValue * tipPercent) / peopleNbr;
  const totalCalcul = (billValue + billValue * tipPercent) / peopleNbr;

  tipAmount.textContent = tipAmountCalcul.toFixed(2);
  totalPerson.textContent = totalCalcul.toFixed(2);
}

tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedTip = Number(btn.value) / 100;
    clearTipSelection();
    tipCustomPercent.value = "";
    btn.classList.add("bg-green-400", "text-green-900");
    calculateAll();
  });
});

tipCustomPercent.addEventListener("input", () => {
  const raw = Number(tipCustomPercent.value) || 0;
  selectedTip = Math.max(0, raw) / 100;
  clearTipSelection();
  calculateAll();
});

reset.addEventListener("click", () => {
  bill.value = "0";
  people.value = "0";
  tipCustomPercent.value = "";
  selectedTip = 0;
  clearTipSelection();
  calculateAll();
});

bill.addEventListener("input", calculateAll);
people.addEventListener("input", calculateAll);

document.querySelectorAll(".field").forEach((field) => {
  const input = field.querySelector(".input");
  const errorMessage = field.querySelector(".error");

  input.addEventListener("input", () => {
    if (input.value === "0" || input.value === "") {
      errorMessage.classList.remove("hidden");
      input.classList.remove("ring-2", "ring-green-400");
      input.classList.add("ring-2", "ring-red-500", "text-red-500");
    } else {
      errorMessage.classList.add("hidden");
      input.classList.remove("ring-2", "ring-red-500", "text-red-500");
      input.classList.add("ring-2", "ring-green-400");
    }
  });
});
