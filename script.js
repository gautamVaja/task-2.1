$(document).ready(function () {
    $('#sheet').hide();
    // $('#show').hide();
    $('#pswauth').hide();
});
$("#claimButt").click(function () {
    console.log('clicked');
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var psw = $('#psw').val();

    // $('#innbody').hide();
    // $('#sheet').show();

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
    $("table.tab").html($('table.tab').html() + "<tr>    <td>" + fname + " " + lname + "</td>    <td>" + email + "</td> ");
    $("table.tab>td").addClass('tab');
}

$('#add').click(function (e) {
    e.preventDefault();
    $('#innbody').show();
    $('#sheet').hide();
});


var password = '19137';

$('#show').click(function (e) {
    e.preventDefault();
    $('#pswauth').show();
    $('#getsheet').click(function (e) {
        e.preventDefault();
        var psw = $('#sheetpsw').val();
        console.log("hi", psw);
        if (psw === password) {
            $('#innbody').hide();
            $('#sheet').show();
            $('#sheetpsw').val('');
            $('#pswauth').hide();
        }
        else {
            alert('incorrect password');
        }
        $('#sheetpsw').val('');
        $('#pswauth').hide();
    });
});
$('#show').mouseover(function () {
    $('#show').text('Show Sheet');
});
$('#show').mouseleave(function () {
    $('#show').text('');
});
