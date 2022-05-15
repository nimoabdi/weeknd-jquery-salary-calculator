console.log('In script.js');

$(document).ready(onReady);

function onReady() {
    console.log('ready to start'); }

    $(document).on('click', '#submit-Button', onSubmit);

    function onSubmit() {
        let FirstName = $('.first-name').val();
        console.log('first name', FirstName);

        let lastName = $('.last-name').val();
        console.log('last name', lastName);

        let ID = $('.id-number').val();
        console.log('id number', ID);

        let Title = $('.job-title').val();
        console.log('job title', Title);

        let annualSalary = $('.annual-salary').val();
        console.log('annual salary', annualSalary);

    }

    $('#employeeTable').append(`
    <tr>
       <td>${FirstName}</td>
       <td>${lastName}</td>
       <td>${ID}</td>
       <td>${Title}</td>
       <td>$annualSalary ${annualSalary} </td>
    
    
    
    `);




  // $('#employeeTable').append(`
      //  <tr>
        //    <td>${firstname}</td>
         //   <td>${lastmame}</td>
           // <td>${ID}</td>
           // <td>${annualsalary}</td>
          //  </td>
       // </tr>    
       // `);
    