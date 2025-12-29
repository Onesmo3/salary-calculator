const incomeInput = document.getElementById("income");
const nssfEl = document.getElementById("nssf");
const taxEl = document.getElementById("tax");
const netEl = document.getElementById("net");

incomeInput.addEventListener("input", calculate);

function calculate() {
  const income = Number(incomeInput.value);
  if (income <= 0) {
    resetValues();
    return;
  }

  // NSSF 10%
  const nssf = income * 0.1;
  const netBeforeTax = income - nssf;

  // TAX calculation (IFS logic)
  let tax = 0;

  if (netBeforeTax <= 270000) {
    tax = 0;
  } else if (netBeforeTax <= 520000) {
    tax = (netBeforeTax - 270000) * 0.08;
  } else if (netBeforeTax <= 760000) {
    tax = 20000 + (netBeforeTax - 520000) * 0.2;
  } else if (netBeforeTax <= 1000000) {
    tax = 68000 + (netBeforeTax - 760000) * 0.25;
  } else {
    tax = 128000 + (netBeforeTax - 1000000) * 0.3;
  }

  const netPay = income - nssf - tax;

  nssfEl.textContent = nssf.toFixed(0);
  taxEl.textContent = tax.toFixed(0);
  netEl.textContent = netPay.toFixed(0);
}

function resetValues() {
  nssfEl.textContent = "0";
  taxEl.textContent = "0";
  netEl.textContent = "0";
}

function resetCalc() {
  incomeInput.value = "";
  resetValues();
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("Service Worker.js")
      .then(() => console.log("Service Worker registered"))
      .catch(err => console.log("SW registration failed:", err));
  });
}