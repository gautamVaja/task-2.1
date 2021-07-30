$(document).ready(function () {
    $('#sheet').hide();
});
$("#submit").click(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var age = $('#age').val();
    var gen = $('#gen').val();
    var dob = $('#dob').val();

    $('#innbody').hide();
    $('#sheet').show();

    if (email == '' || name == '' || phone == '' || age == '' || dob == '') {
        alert('Fill the Form!!!');
        console.log('first');
        ac();
    }
    else {
        prints(name, email, phone, age, gen, dob);
        console.log('two');
        ac();
    }
});
function ac() {
    for (let i = 0; i < 3; i++) {
        $("input").eq(i).val("");
    }
}
function prints(name, email, phone, age, gen, dob) {
    $("table.tab").html($('table.tab').html() + "<tr>    <td>" + name + "</td>    <td>" + email + "</td>    <td>" + phone + "</td>    <td>" + age + "</td> <td>" + gen + "</td> <td>" + dob + "</td> </tr>");
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