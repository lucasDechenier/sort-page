<template>
  <div class="min-height-vh">
    <header-top></header-top>
    <div class="d-flex font-poppins full-height">
      <side-bar class="side-bar" :selected="selected"></side-bar>
      <div class="full-width centralize flex-column px-5 overflow bg-color">
        <div class="max-w-988 d-flex flex-column">
          <img class="responsive-image mobile" src="../assets/enem.png">
          <span class="font-s-25 font-w-7 mt-4">Sorteio da live</span>
          <div class="max-w-445 d-flex mb-3">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-autocomplete
                v-model="currentLive"
                :rules="[v => !!v || 'Selecione uma live']"
                :items="lives"
                :loading="loading"
                item-text="nome"
                item-value="id"
                label="Selecione a live ao vivo"
                outlined
                background-color="#FFFFFF"
                required
                class="mt-4"
              ></v-autocomplete>
            </v-form>
          </div>
          <div class="b-shadow d-flex flex-column mb-8 max-w-786">
            <tr class="hg-15 color-other b-shadow"></tr>
            <tr v-for="(item, index) in users" :key="index" class="mt-3 hg-31 centralize" :class="index%2 == 0?'color' : 'color-other'">
              <span class="ml-4 font-w-5 font-s-14">
                {{ item.nome }}
              </span>
            </tr>
          </div>
          <div>
            <v-btn
              color="#01048A"
              dark
              min-width="205"
              min-height="48"
              class="mb-5"
              @click="sort"
            >
              <span class="btn-text font-s-16">
                Sortear
              </span>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <v-dialog
      v-model="openDialog"
      persistent
      max-width="569"
    >
      <v-card>
        <div class="d-flex flex-column bg-image">
          <div class="mt-7 mr-7 d-flex justify-content-end">
            <v-btn
              outlined
              fab
              small
              color="red"
              @click="openDialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <div class="d-flex flex-column centralize font-poppins">
            <span class="mt-5 font-w-7 font-s-30 text-color">
            Parabéns!
            </span>
            <div class="mt-5 sort-name font-w-7 font-s-17 centralize flex-column justify-content-center">
              <span class="sort-name-text">
                {{ lastUser.usuario }}
              </span>
            </div>
            <div class="mt-5 font-w-5 font-s-22 text-color">
              Você foi sorteado(a)!
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import HeaderTop from "../components/HeaderTop.vue";
import SideBar from "../components/SideBar.vue";
import HomeService from "../services/public/HomeService"

export default {
  components: {HeaderTop, SideBar},
  data(){
    return{
      lives: [],
      lastUser: {},
      valid:'',
      currentLive: null,
      loading: false,
      users: [],
      openDialog: false,
      selected: 0,
    }
  },
  mounted () {
    this.load()
  },
  methods:{
    load(){
      this.loading = true
      HomeService.list().then(data =>{
        if(data.success){
          this.lives = data.lives
          this.users = data.usuarios
        }
      }).finally(() => this.loading = false)
    },
    sort(){
      if(this.$refs.form.validate()){
        this.openDialog = true
        const sortUser = function({nome, estado, email, id: userId},{nome: liveNome, id: liveId}){
          this.usuario = nome;
          this.estado = estado;
          this.email = email;
          this.usuario_id = userId;
          this.live = liveNome;
          this.live_id = liveId;
        }
        let user = this.users[Math.floor(Math.random() * this.users.length)]
        const selectedUser = new sortUser(user,this.lives.find(element => element.id === this.currentLive));
        this.lastUser = selectedUser
        console.log(this.lastUser)
      }
    }
  }
  
}
</script>

<style>
.bg-image{
  background-image: url("../assets/confeti.png");

}

.sort-name{
  background-color: rgba(188, 190, 255, 0.2);
  border-radius: 25.5px;
  min-width: 424px;
  min-height: 51px;
  color: rgba(45, 45, 45, 1);
}

.btn-text{
  color: #FAFAFD;
  text-transform: none;
}

.text-color{
  color: #01058A
}

.color{
  background: #E6E7FF;
}

.color-other{
  background: #CCCDFF;
}

.b-shadow{
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.bg-color{
  background: #FAFAFD;
}
@media (max-width: 900px) {
  .mobile{
    object-fit: cover !important;
    min-height: 320px !important;
  }
  .side-bar{
    display: none !important;
  }
}
</style>