console.log('In script.js');

$(document).ready(onReady);

function onReady() {
    console.log('ready to start'); }

    $(document).on('click', '#submit-Button', onSubmit);

    function onSubmit() {
        let firstName = $('.first-name').val();
        console.log('first name', firstName);





    }
    