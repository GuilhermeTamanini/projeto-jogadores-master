<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_time: "",
      times: [
        { id: "64df1589-8bad-4083-9c44-618774ee3a9f", nome: "time 1" },
        { id: "567e5f7a-7676-4c5f-a36b-5a766927e81a", nome: "time 2" },
        { id: "cb663175-1350-4d40-a57e-ca2adb42e643", nome: "time 3" },
        { id: "54d12bf6-b2c8-4f30-9b1d-0b3ab4e3b2c7", nome: "time 4" },
      ],
    };
  },
  methods: {
    salvar() {
      if (this.novo_time !== "") {
        const novo_id = uuid();
        this.times.push({
          id: novo_id,
          nome: this.novo_time,
        });
        this.novo_time = "";
      }
    },
    excluir(time) {
      const indice = this.times.indexOf(time);
      this.times.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de times</h2>
    </div>
  </div>
  <div class="form-input">
    <input type="text" placeholder="Insira os nomes" v-model="novo_time"  @keyup.enter="salvar" />
    <button @click="salvar">salvar</button>
  </div>
  <div class="list-items">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="time in times" :key="time.id">
          <td>{{ time.id }}</td>
          <td>{{ time.nome }}</td>
          <td>
            <button>Editar</button>
            <button @click="excluir(time)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
