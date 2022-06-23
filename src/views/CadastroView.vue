<template>
<div class="formulario">
<form action="login">
    <p>Cadastro</p>
    <input type="text" placeholder="Nome Completo">
    <input type="email" placeholder="E-mail">
    <input type="number" placeholder="Senha">
    <input type="text" placeholder="numero do cartão">
    <input type="text" placeholder="senha do cartão">
    <input type="text" placeholder="nome da mãe">
    <input type="text" placeholder="nome do pai">
    <input type="text" placeholder="data de nascimento">
    <input type="url" placeholder="comprovante de residencia">
    <button>Enviar</button>
</form>
</div>
</template>
<style>
.formulario {
    display: flex;
    justify-content: center;
    margin:1px;
    padding-top:10px;
    padding: ;
}
form {
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    padding: 20px;
}
.formulario input {
    margin: 10px;
}
</style>