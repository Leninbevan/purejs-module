function switchActive(index) {
  const switchtitles = document.querySelectorAll('.eventdetails-switchtitle');
  // const switchform = document.querySelectorAll('.createnewevent-form');
  // console.log('switchtitles',switchform[0] , switchform);
  switchtitles.forEach((switchtitle, i) => {
    if (i === index) {
      switchtitle.classList.add('eventdetails-activebottom');
      // switchform[index].classList.add('visible');
    } else {
      switchtitle.classList.remove('eventdetails-activebottom');
      // switchform[index].style.display.add('hidden');
    }
  });

  // switchform.forEach((switchform, i) => {
  //   if (i === index) {
  //     switchtitle.classList.add('eventdetails-activebottom');
  //     // switchform[index].classList.add('visible');
  //   } else {
  //     switchtitle.classList.remove('eventdetails-activebottom');
  //     // switchform[index].style.display.add('hidden');
  //   }
  // });
}


function addNewPoint() {
  const pointsContainer = document.getElementById("pointsContainer");
  const deleteButton = document.getElementById("deleteButton");
  const iFeild = document.createElement("input");
  iFeild.setAttribute("type", "text");
  iFeild.setAttribute("placeholder", "Enter your point here");
  iFeild.setAttribute("class", "form-control eventdetails-addkeypoint");
  pointsContainer.appendChild(iFeild);
  deleteButton.style.display = "inline-block";
}

function deleteLastPoint() {
  const deleteButton = document.getElementById("deleteButton");
  let allInputs = document
    .getElementById("pointsContainer")
    .querySelectorAll('input[type="text"]');

  allInputs[allInputs.length - 1].parentNode.removeChild(
    allInputs[allInputs.length - 1]
  );

  if (allInputs.length < 3) {
    deleteButton.style.display = "none";
  }
}


function showDropdown() {
  document.getElementById("optionsfield").classList.add("show");
}

function hideDropdown() {
  setTimeout(function() {
      document.getElementById("dropdown-content").classList.remove("show");
  }, 200); 
}

function filterFunction() {
  var input, filter, div, labels, i, txtValue;
  input = document.getElementById("filterInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("dropdown-content");
  labels = div.getElementsByTagName("label");
  for (i = 0; i < labels.length; i++) {
      txtValue = labels[i].textContent || labels[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          labels[i].style.display = "";
      } else {
          labels[i].style.display = "none";
      }
  }
}

function updateSelected() {
  var checkboxes = document.getElementsByClassName('option');
  var selectedOptionsDiv = document.getElementById('selected-options');

  // Clear all dynamically added children
  selectedOptionsDiv.innerHTML = '';

  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          (function(checkbox) {
              var optionDiv = document.createElement('div');
              optionDiv.className = 'selected-option';
              optionDiv.textContent = checkbox.value;

              optionDiv.style.color = '#ffffff';

              var removeIconDiv = document.createElement('div');
              removeIconDiv.className = 'remove-icon';
              removeIconDiv.textContent = 'X';
              
              removeIconDiv.style.color = '#ffffff';
              removeIconDiv.style.cursor = 'pointer';
              removeIconDiv.style.marginLeft = '10px';
              
              // Add onclick event to remove the selected option and uncheck the checkbox
              removeIconDiv.onclick = function() {
                  optionDiv.remove();
                  checkbox.checked = false;
              };

              optionDiv.appendChild(removeIconDiv);
              selectedOptionsDiv.appendChild(optionDiv);
          })(checkboxes[i]);
      }
  }
}

window.onclick = function(event) {
  if (!event.target.matches('#filterInput') && !event.target.closest('.dropdown-content')) {
      document.getElementById("optionsfield").classList.remove("show");
  }
}

document.getElementById('paymentAllToggle').addEventListener('change', function() {
  const checkboxes = document.querySelectorAll('.eventsdetails-paymentswitch');
  checkboxes.forEach(checkbox => {
    checkbox.checked = this.checked;
  });
});

function selectAllSignature(checkbox) {
  const checkboxes = document.querySelectorAll('.eventdetails-signatureswitch');
  checkboxes.forEach(currentCheckbox => {
    currentCheckbox.checked = checkbox.checked;
  });
}

function scheduleForm(property) {
  document.getElementById('eventscheduleform').style.display = property;
}

function createEventForm(property) {
  document.getElementById('eventdetailsform').style.display = property;
}

function addSalesForm(property){
  document.getElementById('eventaddagentform').style.display = property;
}

// form 1 
document.getElementById("eventdetailsform").addEventListener("submit", function(event) {
  event.preventDefault(); 
  scheduleForm('block');
  createEventForm('none');
  switchActive(1);
})

//form 2 
document.getElementById("eventscheduleform").addEventListener("submit", function(event) {
  event.preventDefault(); 
  scheduleForm('none');
  addSalesForm('block');
  switchActive(2);
})

//  function openModel(event){
//   event.preventDefault();
//     var modal = document.getElementById("Addusermodal");
//     // Get the button that opens the modal
//   var btn = document.getElementById("Adduser");
//   // When the user clicks the button, open the modal 
//   btn.onclick = function() {
//     modal.style.display = "flex";
//   }
//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
//  }

function addNewAgent() {
  const tableBody = document.getElementById('EventAddSalesAgent').getElementsByTagName('tbody')[0];
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td><input type="text" class="form-control" value="New Desk" disabled></td>
    <td>
      <select class="form-select templateselect salesAgent mb-3">
        <option selected>Ayesha Alramsi</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </td>
    <td>
      <select class="form-select templateselect mb-3">
        <option selected>4</option>
        <option value="1">3</option>
        <option value="2">2</option>
        <option value="3">1</option>
      </select>
    </td>
    <td>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="AllowWalkin" checked>
      </div>
    </td>
    <td><span><img src="images/Bin.png" alt="Bin Icon"></span></td>
  `;
  tableBody.appendChild(newRow);

  const deleteButton = document.getElementById('deleteSalesButton');
  deleteButton.style.display = 'inline-block';
}

function deleteLastPoint() {
  const tableBody = document.getElementById('EventAddSalesAgent').getElementsByTagName('tbody')[0];
  if (tableBody.rows.length > 1) {
    tableBody.deleteRow(tableBody.rows.length - 1);
    if (tableBody.rows.length === 1) {
      document.getElementById('deleteSalesButton').style.display = 'none';
    }
  }
}

 

  // Get the modal
  var modal = document.getElementById("Addusermodal");
    // Get the button that opens the modal
  var btn = document.getElementById("Adduser");
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "flex";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }