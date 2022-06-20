<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      new_player: "",
      news_names: "",
      news_actions: "",
      players: [
        {id:"54d12bf6-b2c8-4f30-9b1d-0b3ab4e3b2c7" ,name: "Time 1",names:"jogador1",actions:"ação1"},
        {id:"cb663175-1350-4d40-a57e-ca2adb42e643",name: "Time 2",names:"jogador2",actions:"ação2"},
        {id:"567e5f7a-7676-4c5f-a36b-5a766927e81a",name: "Time 3",names:"jogador3",actions:"ação3"},
        {id:"64df1589-8bad-4083-9c44-618774ee3a9f",name: "Time 4",names:"jogador4",actions:"ação4"},
      ],
    };
  },
  methods: {
    save() {
      const player_id = uuid();
      this.players.push({
        id: player_id,
        name: this.new_player,
        names: this.news_names,
        actions: this.news_actions,
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
    <input type="text" placeholder="Insira os times" v-model="new_player" />
    <input type="text" placeholder="Isira nomes" v-model="news_names" />
    <input type="text" placeholder="Isira acões" v-model="news_actions" />
    <button @click="save">Salvar</button>
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
        <tr v-for="player in players" :key="player.id">
          <td>{{ player.id }}</td>
          <td>{{ player.name }}</td>
          <td>{{ player.names }}</td>
          <td>{{ player.actions }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
