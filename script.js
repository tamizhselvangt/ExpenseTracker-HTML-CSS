document.getElementById("expForm").addEventListener("submit", addExpense);

function addExpense(event) {
  event.preventDefault();

  const type = document.getElementById("type").value;
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const amount = document.getElementById("amount").value;

  if (type && name && date && amount) {
    const expenseTable = document.getElementById("expenseTable");

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${type}</td>
      <td>${name}</td>
      <td>${date}</td>
      <td>${amount}</td>
      <td><button class="delete">Delete</button></td>
    `;

    tr.querySelector(".delete").addEventListener("click", () => {
      tr.remove();
    });

    expenseTable.appendChild(tr);

    // Clear form inputs
    document.getElementById("expForm").reset();
  }
}
