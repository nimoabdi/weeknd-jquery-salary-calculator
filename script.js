console.log('In script.js');

$(document).ready(onReady);

function onReady() {
    console.log('ready to start'); }

    $(document).on('click', '#submit-Button', onSubmit);

    function onSubmit() {
        let firstName = $('.first-name').val();
        console.log('first name', firstName);

        let lastName = $('.last-name').val();
        console.log('last name', lastName);

        let ID = $('.id-number').val();
        console.log('id-number', ID);

        let Title = $('.job-title').val();
        console.log('job title', Title);

        let annualSalary = $('.annual-salary').val();
        console.log('annual-salary', annualSalary);

    }

    