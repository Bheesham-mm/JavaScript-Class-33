var parentElement = document.getElementById('container');
// console.log(parentElement)
var table = document.createElement('table');
table.style.width = '100%'
parentElement.appendChild(table)
var tr = document.createElement('tr');
table.appendChild(tr)
var th = document.createElement('th');
th.setAttribute('class', 'tr');
th.textContent = 'No';
tr.appendChild(th)
var th1 = document.createElement('th');
th1.setAttribute('class', 'tr');
th1.textContent = 'Name';
tr.appendChild(th1)
var th2 = document.createElement('th');
th2.setAttribute('class', 'tr');
th2.textContent = 'Father Name';
tr.appendChild(th2)
var th3 = document.createElement('th');
th3.setAttribute('class', 'tr');
th3.textContent = 'Age';
tr.appendChild(th3)
var tr1 = document.createElement('tr');
table.appendChild(tr1)
var td1 = document.createElement('td');
td1.setAttribute('class', 'td');
td1.textContent = '1';
tr1.appendChild(td1)
var td2 = document.createElement('td');
td2.setAttribute('class', 'td');
td2.textContent = 'dummy text';
tr1.appendChild(td2)
var td3 = document.createElement('td');
td3.setAttribute('class', 'td');
td3.textContent = 'This is a dummy text';
tr1.appendChild(td3)
var td4 = document.createElement('td');
td4.setAttribute('class', 'td');
td4.textContent = '14';
tr1.appendChild(td4)