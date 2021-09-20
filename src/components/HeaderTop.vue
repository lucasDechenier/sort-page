<template>
  <div>
    <div class="nav-bar">
      <div class="mobile-menu centralize mr-4">
        <v-btn
          icon
          color="#01048A"
          fab
          elevation="24"
          @click.stop="drawer = !drawer"
        >
          <v-icon>
            mdi-format-list-bulleted-square
          </v-icon>
        </v-btn>
      </div>
      <div class="centralize ml-5">
        <img class="logo" src="../assets/grupo.png">
      </div>
      <div class="exit centralize px-4">
        <div class="pointer">
          <span class="mr-3">Sair da plataforma</span>
          <img src="../assets/exit.png">
        </div>
      </div>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        left
        width="207"
      >
        <v-list>
          <v-list-item-group
            active-class="bg-active"
            color="indigo"
          >
            <v-list-item>
              <v-list-item-icon class="mr-3">
                <img class="item-icon" src="../assets/sort.png">
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Sorteio</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <img class="item-icon winner" src="../assets/winner.png">
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Ganhadores</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon class="mr-3">
                <img class="item-icon" src="../assets/exit.png">
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Sair da plataforma</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerTop",
    data() {
      return {
        drawer: false,
        mensagem: "Isso vai aparecer no slot.",

      };
    }
}
</script>

<style>
.bg-active {
  background-color: black;
  color : white !important;
}

.winner{
  width: 25px !important;
  height: 25px !important;
  margin-right: 14px;
}

.item-icon{
  width: 20px;
  height: 20px;
}

div.bg-active .item-icon{
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(63deg) brightness(104%) contrast(103%) !important;
}

.text{
  color: #FFFFFF;
}

.mobile-menu{
  display: none !important;
}

.logo{
  height: 34px;
  width: 67px;
}

.nav-bar{
  border-bottom: 1px solid #E7E8F2;
  height: 70px;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}

.exit{
  border-left: 1px solid #E7E8F2;
}

@media (max-width: 800px) {
  .mobile-menu{
    display: flex !important;
    margin-left: 10px;
  }
  .exit{
    display: none !important;
  }
  .logo{
    margin-right: 30px;
  }
}
</style>