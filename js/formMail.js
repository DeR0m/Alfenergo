$("#sendMail").on("click", function(){
    var name = $("#name").val().trim();
    var tel = $("#tel").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    if(name == ""){
        $("#errorMess").text("Введите имя");
        return false;
    }
    else if(tel == ""){
        $("#errorMess").text("Введите номер телефона");
        return false;
    }
    else if(email == ""){
        $("#errorMess").text("Введите email");
        return false;
    }
    else if(message == ""){
        $("#errorMess").text("Введите сообщение");
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
        url: '../ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name,'tel': tel, 'email': email, 'message': message },
        dateType: 'html',
        beforeSend: function(){
            $("#sendMail").prop("disabled", true);
        },
        success: function(data){
            if(!data)
            {
                alert("Были ошибки, сообщение не отправлено")
            } else
            {
                $("#mailForm").trigger("reset");
                $("#sendMail").prop("disabled", false);
            }
        }
    });
})