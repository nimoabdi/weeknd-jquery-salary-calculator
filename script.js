console.log('In script.js');

$(document).ready(onReady);

function onReady() {
    console.log('ready to start'); }

    $(document).on('click', '#submitButton', addEmployee);

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
    
    
    
    `);
      }
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
    