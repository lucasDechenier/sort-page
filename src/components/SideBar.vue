<template>
  <div class="max-w-190">
    <v-navigation-drawer
      permanent
      width="190"
    >
      <v-list
      >
      <v-list-item-group
          active-class="bg-active"
          v-model="selected"
          mandatory
          class="container-lucas"
        >
          <v-list-item class="margin" @click="$router.push('/')">
            <v-list-item-icon class="mr-1">
              <img class="item-icon winner" src="../assets/sort.png">
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Sorteio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="$router.push('winners')">
            <v-list-item-icon class="mr-1">
              <img class="item-icon winner" src="../assets/winner.png">
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Ganhadores</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: { 
    selected:{type: Number, default: 0}
    },
  data(){
    return{
    }
  },
}
</script>

<style>
.margin{
  margin-top: 200px;
}

.container-lucas{
  display: flex;
  flex-direction: column;
  row-gap: 45px;
}

.bg-active {
  background-color: #01048A;
  color : white !important;
}

</style>