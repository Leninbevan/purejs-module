function exportTableToCSV(tableId, filename) {
    var csv = [];
    var rows = document.getElementById(tableId).querySelectorAll("tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++) {
            var cellValue = cols[j].innerText.trim();
            
          /*   Checking if cell value contains ',' */
            if (cellValue.includes(',')) {
                /* If yes, enclose the value in double quotes to prevent splitting */
                cellValue = '"' + cellValue + '"';
            }
            
            row.push(cellValue);
        }
        
        csv.push(row.join(","));
    }

    /* Download CSV file */
    var csvContent = "data:text/csv;charset=utf-8," + csv.join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
}

function redirectToPage() {
    /* Redirecting to another page */
    window.location.href = "dashboard.html";
}

/* unit-management list screen */
function filterData(category) {
    var rows = document.querySelectorAll('.filterable');
    rows.forEach(function(row) {
        if (category === 'All' || row.getAttribute('data-category') === category) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });

    var tablinks = document.querySelectorAll('.tablink');
    tablinks.forEach(function(tablinks) {
        if (tablinks.textContent.toLowerCase() === category.toLowerCase()) {
            tablinks.classList.add('active');
        } else {
            tablinks.classList.remove('active');
        }
    });
}

// search functionality

$(document).ready(function(){

    $("#SearchInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#userTable tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
      $("#noRecordTR").toggle(!$("#myTable tr:visible").length);
    });
  });