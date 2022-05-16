console.log('In script.js');

$(document).ready(onReady);



function onReady() {
  console.log('ready to start'); }
  
  $(document).on('click', '#submitButton', addEmployee);
  $(document).on('click', '.deleteButton', onDelete);
  
  let employees = [];
  function addEmployee() {
    
    let firstNameInputs = $('#firstNameInputs').val();
    let lastNameInputs = $('#lastNameInputs').val();
    let employeeIDNumberInputs = $('#idNumberInputs').val();
    let jobTitleInputs = $('#jobTitleInputs').val();
    let annualSalaryInputs = $('#salaryInputs').val();
    
    
    let newEmployees = {
      firstName: firstNameInputs,
      lastName: lastNameInputs,
      employeeID: employeeIDNumberInputs,
      employeeTitle: jobTitleInputs,
      annualSalary: annualSalaryInputs
      
    }
    // pushing employees into the array
    employees.push(newEmployees);
    
    
    
    
    // testing to see if i need a function before the append
    $('#employeeList').append(`
    <tr>
      <td>${firstNameInputs}</td>
      <td>${lastNameInputs}</td>
      <td>${employeeIDNumberInputs}</td>
      <td>${jobTitleInputs}</td>
      <td>${annualSalaryInputs}</td>
      <td>
      <button class="deleteButton">Delete</button>
      </td>
    </tr>`);
    
    // emptying array
    $("#firstNameInputs").val('');
    $("#lastNameInputs").val('');
    $("#idNumberInputs").val('');
    $("#jobTitleInputs").val('');
    $("#annualSalaryInputs").val('');
    
  }
  
  // delete button is showing up as undefined so i need to figure that out
  function onDelete() {
    let tr = $(this).parents('tr');
    tr.remove();
    alert('Employee deleted 😓 ', employees);
    
  }
  
  
  function calculateSalary() {
    let employeeSalary = 0;
    for (let employeeSalary of employees) {
      employeeSalary += employeeSalary.annualSalary;
    }
    employeeSalary /12;
    if (employeeSalary /12 >= 20000) {
      $('totalMonthlyCost').css('background-color', 'red');
    }
  }
  
  
  
  
  
  