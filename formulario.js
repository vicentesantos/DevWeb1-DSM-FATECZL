function controle(){
    var rg=cadastro.rg;
    var cpf=cadastro.cpf;
    var senha=cadastro.senha;
    var confirma=cadastro.confirma;

    if(rg.value.lenght != 15){
        alert("RG inválido!");
        rg.focus();
        return false;
    }
    if(cpf.value.length != 11){
        alert("CPF inválido!")
        cpf.focus();
        return false;
    }
    if(senha.value.lenght<8 || senha.value.lenght>12){
        alert("A senha deve conter no mínimo 8 e máximo 12 caracteres!");
        senha.focus();
        return false;
    }
    var regex=/(?=(?:.*?[A-Z]))(?=(?:.*?[0-9]))(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#;$%*(){}_+^&]*$/;
    if (!regex.exec(senha.value)){
        alert("A senha deve ter pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número  e 1 caracteres especiais");
        senha.focus();
        return false;
    }
    /* (?=(?:.*?[A-Z])) mínimo 1 letra maiúscula
    (?=(?:.*?[0-9])) - Mínimo 1 número
    (?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#;$%*(){}_+^&] - Mínimo 1 caractere especial*/
    if(confirma.value != senha.value){
        alert("As senhas devem ser igual!");
        confirma.focus();
        return false;
    }
}