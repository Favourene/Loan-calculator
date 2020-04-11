// Listen for submit

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
  // Computing values from the HTML file ID of (amount, interest and years)

  const HTMLamount = document.getElementById("amount").value;
  const HTMLinterest = document.getElementById("interest").value;
  const HTMLyears = document.getElementById("years").value;

  //Solving
  const principal = parseFloat(HTMLamount);
  const CalculateInterest = parseFloat(HTMLinterest) / 100 / 12;
  const calculatedPayments = parseFloat(HTMLyears) * 12;

  //solution for  calculation of monthly Payment

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  //solution for  calculation of Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //solution for  calculation of Total Payment

  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  //Display of results

  document.getElementById("monthlyPayment").innerHTML = "₦ " + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "% " + totalInterest;

  document.getElementById("totalPayment").innerHTML = "₦ " + totalPayment;


  e.preventDefault();
}