<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_cadastro: "",
      nova_categoria: "",
      novo_autor:"",
      cadastros: [
      { id: "64df1589-8bad-4083-9c44-618774ee3a9f", nome: "cadastro 1", categoria: "Isekai", autor:"" },
      { id: "567e5f7a-7676-4c5f-a36b-5a766927e81a", nome: "cadastro 2", categoria: "Fantasia", autor:"" },
      { id: "cb663175-1350-4d40-a57e-ca2adb42e643", nome: "cadastro 3", categoria: "Game", autor:"" },
      { id: "54d12bf6-b2c8-4f30-9b1d-0b3ab4e3b2c7", nome: "cadastro 4", categoria: "???", autor:"" },
      ],
    };
  },
  methods: {
    salvar() {
      if (this.novo_cadastro !== "") {
        const novo_id = uuid();
        this.cadastros.push({
          id: novo_id,
          nome: this.novo_cadastro,
          categoria: this.nova_categoria,
          autor: this.novo_autor,
        });
        this.novo_cadastro = "";
        this.nova_categoria = "";
        this.novo_autor = "";
      }
    },
    excluir(cadastro) {
      const indice = this.cadastros.indexOf(cadastro);
      this.cadastros.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de cadastros</h2>
    </div>
  </div>
  <div class="form-input">
    <input type="text" placeholder="Insira os nomes" v-model="novo_cadastro" />
    <input type="text" placeholder="Insira a categoria" v-model="nova_categoria"  >
    <input type="text" placeholder="Insira o autor" v-model="novo_autor"> 
    <button @click="salvar">salvar</button>
  </div>
  <div class="list-items">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Categoria</th>
          <th>Autor</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cadastro in cadastros" :key="cadastro.id">
          <td>{{ cadastro.id }}</td>
          <td>{{ cadastro.nome }}</td>
          <td>{{ cadastro.categoria }}</td>
          <td>{{ cadastro.autor }}</td>
          <td>
            <button @click="excluir(cadastro)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
