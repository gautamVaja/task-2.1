$(document).ready(function () {
    $('#sheet').hide();
});
$("#submit").click(function () {
    console.log('clicked');
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var psw = $('#psw').val();

    $('#innbody').hide();
    $('#sheet').show();

    if (email == '' || fname == '' || lname == '' || psw == '') {
        alert('Fill the Form!!!');
        console.log('first');
        ac();
    }
    else {
        prints(fname, lname, email, psw);
        console.log('two');
        ac();
    }
});
function ac() {
    for (let i = 0; i < 3; i++) {
        $("input").eq(i).val("");
    }
}
function prints(fname, lname, email, psw) {
    $("table.tab").html($('table.tab').html() + "<tr>    <td>" + fname+" "+ lname + "</td>    <td>" + email + "</td> ");
    $("table.tab>td").addClass('tab');
}

$('#add').click(function (e) {
    e.preventDefault();
    $('#innbody').show();
    $('#sheet').hide();
});

$('#show').click(function (e) {
    e.preventDefault();
    $('#innbody').hide();
    $('#sheet').show();
});