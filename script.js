document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.data.gov.sg/v1/environment/psi')
        .then(response => response.json())
        .then(data => {
            const readings = data.items[0].readings;
            const psiTable = document.getElementById('psi-table');

            // Create table headers
            const headers = Object.keys(readings);
            const headerRow = document.createElement('tr');
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header.toUpperCase();
                headerRow.appendChild(th);
            });
            psiTable.appendChild(headerRow);

            // Populate table with data
            const dataRow = document.createElement('tr');
            headers.forEach(header => {
                const td = document.createElement('td');
                td.textContent = readings[header].value;
                dataRow.appendChild(td);
            });
            psiTable.appendChild(dataRow);
        })
        .catch(error => console.log('Error fetching data:', error));
});
