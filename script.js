console.log('In script.js');

$(document).ready(onReady);

let employees = [];

function onReady() {
  console.log('ready to start'); }
  
  $(document).on('click', '#submitButton', addEmployee);
  $(document).on('click', '.deleteButton', onDelete);
  
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
  }



  // testing to see if i need a function before the append
 
      $('.employeeTable').append(`
      <tr>
        <td>${firstNameInputs}</td>
        <td>${lastNameInputs}</td>
        <td>${employeeIDNumberInputs}</td>
        <td>${jobTitleInputs}</td>
        <td>${ annualSalaryInputs} </td>
        <td> 
          <button class="deleteButton">Delete</button>
        </td>  
      </tr>  
      `);


      $("#firstName").val('');
      $("#lastName").val('');
      $("#idNumber").val('');
      $("#jobTitle").val('');
      $("#annualSalary").val('');
    
  

  
  function onDelete() {
    let  tr= $(this).parent().parent();
    let employees= $(this)
    .parent()
    .siblings()
    .first()
    .text();
    alert('Employee deleted 😓 ', employees);
    tr.remove();
  }
  

function calculateSalary(employee) {
  let employeeSalary = 0;
  for (let employeeSalary of employee) {
    employeeSalary += employeeSalary.annualSalary;
  }
  employeeSalary /12;
  if (employeeSalary > 20000) {
    $('totalMonthlyCost').css('background-color', 'red');
  }
}


  // empty array to loop through the empoyees salary
  //annualSalary(); {


