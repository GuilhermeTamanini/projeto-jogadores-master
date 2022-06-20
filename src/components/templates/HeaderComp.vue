<template>
  <header class="menu-superior">
    <div class="menu-esquerdo">
      <span> <RouterLink to="/"> Home</RouterLink></span>
      <span>|</span>

      <span><RouterLink to="/cadastros"> Cadastro</RouterLink> </span>

      <span>|</span>

      <span><RouterLink to="/historico">Histórico</RouterLink> </span>

      <span>|</span>

      <span><RouterLink to="/cume">Cume</RouterLink></span>
    </div>
    <div class="menu-direito">
      <span>sair</span>
    </div>
  </header>
</template>
<style>
header span {
  padding: 0 20px;
}

.menu-superior {
  justify-content: space-between;
  text-decoration: none;
  color: white;
}

.menu-esquerdo .botao {
  text-decoration: none;
  color: white;
}
.menu-direito {
  padding-right: 40px;
}
</style>
