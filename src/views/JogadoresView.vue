<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_jogador: "",
      novos_nomes: "",
      novas_acoes: "",
      jogadores: [
        {id:"54d12bf6-b2c8-4f30-9b1d-0b3ab4e3b2c7",name: "Time 1",nomes:"jogador1",actions:"ação1"},
        {id:"cb663175-1350-4d40-a57e-ca2adb42e643",name: "Time 2",nomes:"jogador2",actions:"ação2"},
        {id:"567e5f7a-7676-4c5f-a36b-5a766927e81a",name: "Time 3",nomes:"jogador3",actions:"ação3"},
        {id:"64df1589-8bad-4083-9c44-618774ee3a9f",name: "Time 4",nomes:"jogador4",actions:"ação4"},
      ],
    };
  },
  methods: {
    salvar() {
      const jogador_id = uuid();
      this.jogadores.push({
        id: jogador_id,
        name: this.novo_jogador,
        nomes: this.novos_nomes,
        actions: this.novas_acoes,
      });
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de jogadores</h2>
    </div>
  </div>
  <div class="form-input">
    <input type="text" placeholder="Insira os times" v-model="novo_jogador" />
    <input type="text" placeholder="Isira nomes" v-model="novos_nomes" >
    <input type="text" placeholder="Isira acões" v-model="novas_acoes">
    <button @click="salvar">Salvar</button>
  </div>
  <div class="list-items">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Time</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="jogador in jogadores" :key="jogador.id">
          <td>{{ jogador.id }}</td>
          <td>{{ jogador.name }}</td>
          <td>{{ jogador.nomes }}</td>
          <td>{{ jogador.actions }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
