let row = 10; 
let col = 10; 
let body = document.querySelector("body");

let html = `<table border='1'>`;

// Creating table headers
html += "<thead><tr>";
for (let a = 1; a <= col; a++) {
    html += `<th>${a}</th>`;
}
html += "</thead></tr>";


for (let b = 1; b <= row; b++) {
    html += "<tr>";
    for (let c = 1; c <= col; c++) {
        html += `<td>${c} * ${b} = ${c*b}</td>`;
    }
    html += "</tr>";
}

html += `</table>`;
body.innerHTML = html;
console.log(html);
