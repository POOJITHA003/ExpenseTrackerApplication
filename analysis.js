document.addEventListener("DOMContentLoaded", function () {
    const pieChartCanvas = document.getElementById("pieChart");
    const totalIncomeElement = document.getElementById("totalIncome");
    const totalExpensesElement = document.getElementById("totalExpenses");
    const budgetSpentElement = document.getElementById("budgetSpent");
    const budgetPercentageElement = document.getElementById("budgetPercentage");
  
    // Extract data from localStorage or initialize if empty
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    
    // Calculate total income and expenses
    const totalIncome = transactions
      .filter((trx) => trx.type === "income")
      .reduce((total, trx) => total + trx.amount, 0);
  
    const totalExpenses = transactions
      .filter((trx) => trx.type === "expense")
      .reduce((total, trx) => total + trx.amount, 0);
  
    const budgetSpent = totalExpenses;
    const budgetPercentage = (budgetSpent / totalIncome) * 100;
  
    // Display total income and expenses
    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalExpensesElement.textContent = totalExpenses.toFixed(2);
    budgetSpentElement.textContent = budgetSpent.toFixed(2);
    budgetPercentageElement.textContent = budgetPercentage.toFixed(2) + "%";
  
    // Create pie chart
    new Chart(pieChartCanvas, {
      type: "line",
      data: {
        labels: ["Income", "Expenses"],
        datasets: [{
          data: [totalIncome, totalExpenses],
          backgroundColor: ["#3a3dbe", "#f00"]
        }]
      },
      options: {
        title: {
          display: false,
          is3D: true,
          text: "Income vs Expenses"
        
        }
      }
    });
  });
