//your code here
// Get all price elements
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

// Calculate total price
let total = 0;
priceElements.forEach(priceEl => {
    total += parseFloat(priceEl.innerText);
});

// Create a new table row
const table = document.querySelector("table");
const totalRow = document.createElement("tr");

// Create a single cell for total
const totalCell = document.createElement("td");
totalCell.setAttribute("data-ns-test", "grandTotal");
totalCell.innerText = total;

// Append cell to row and row to table
totalRow.appendChild(totalCell);
table.appendChild(totalRow);