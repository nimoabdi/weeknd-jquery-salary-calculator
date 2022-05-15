console.log('In script.js');

$(document).ready(onReady);

function onReady() {
  console.log('ready to start'); }
  
  $(document).on('click', '#submitButton', addEmployee);
  $(document).on('click', '#deleteButton', onDelete);
  
  function addEmployee() {
    let FirstName = $('#firstName').val();
    console.log('first name', FirstName);
    
    let lastName = $('#lastName').val();
    console.log('last name', lastName);
    
    let ID = $('#idNumber').val();
    console.log('id number', ID);
    
    let Title = $('#jobTitle').val();
    console.log('job title', Title);
    
    let annualSalary = $('#annualSalary').val();
    console.log('annual salary', annualSalary);
    
  }
  // testing to see if i need a function before the append
  function inTable() {
    $('.employeeTable').empty();
    for(let list of employee) {
      $('.employeeTable').append(`
      <tr>
      <td>${list.FirstName}</td>
      <td>${list.lastName}</td>
      <td>${list.ID}</td>
      <td>${list.Title}</td>
      <td>$annualSalary ${annualSalary} </td>
      <td> <input type="button" class="deleteButton" value="Delete"</td>
      
      `);
    }
  }
  
  function onDelete() {
    let  tr= $(this).parent().parent();
    let employee= $(this)
    .parent()
    .siblings()
    .first()
    .text();
    alert('Employee deleted 😓 ${employee}.', employee);
    tr.remove();
  }
  
  // empty array to loop through the empoyees salary
  addSalary(); {

  $("#firstName").val();
  $("#lastName").val();
  $("#idNumber").val();
  $("#jobTitle").val();
  $("#annualSalary").val();
}
  
  
  
  
  // $('#employeeTable').append(`
  //  <tr>
  //    <td>${firstname}</td>
  //   <td>${lastmame}</td>
  // <td>${ID}</td>
  // <td>${annualsalary}</td>
  //  </td>
  // </tr>    
  // `);
  