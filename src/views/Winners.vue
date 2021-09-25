<template>
  <div class="min-height-vh">
    <header-top></header-top>
    <div class="d-flex font-poppins full-height">
      <side-bar class="side-bar" :selected="selected"></side-bar>
      <div class="full-width centralize flex-column px-5 overflow bg-color">
        <div class="max-w-1119 d-flex flex-column">
          <span class="font-s-25 font-w-7 mt-4">Todos os ganhadores</span>
          <div class="d-flex space-between flex-row mt-7">
            <div class="max-w-445 d-flex">
              <v-autocomplete
                v-model="currentLive"
                label="Selecione a live ao vivo"
                outlined
                :items="lives"
                :loading="loading"
                item-text="nome"
                item-value="id"
                background-color="#FFFFFF"
                clearable
              ></v-autocomplete>
            </div>
            <div class="max-w-445 d-flex">
              <v-text-field
                outlined
                label="Pesquise aqui"
                append-icon="mdi-magnify"
              ></v-text-field>
            </div>
          </div>
          <div class="">
            <v-data-table
              ref="data"
              :headers="headers"
              :items="users"
              :items-per-page="8"
              :loading="loading"
              class="elevation-1"
             :footer-props="footerProps"
            ></v-data-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../components/HeaderTop.vue"
import SideBar from "../components/SideBar.vue"
import WinnerService from "../services/public/WinnerService"
import HomeService from "../services/public/HomeService"

export default {
  components: {HeaderTop, SideBar},
  data(){
    return{
      footerProps: {
        'items-per-page-text': 'Páginas',
      },
      loading: false,
      headers: [
        { text: 'Nome', align: 'start', value: 'usuario' },
        { text: 'Estado', value: 'estado' },
        { text: 'Email', value: 'email' },
        { text: 'Live', value: 'live' },
      ],
      users: [],
      selected: 1,
      lives: [],
      currentLive: null,
    }
  },
  mounted () {
    this.load()
  },
  methods:{
    load(userFilter){
      this.loading = true
      WinnerService.list().then(data =>{
        if(data.success){
          this.users = data.usuarios
        }
      }).finally(() => {
        if(userFilter) {
          this.users = this.users.filter(element => element.live_id === userFilter )
        }
        this.loading = false
      })
      this.loading = true
      HomeService.list().then(data =>{
        if(data.success){
          this.lives = data.lives
        }
      }).finally(() => this.loading = false )
    },
  },
  watch:{
    currentLive: function handler(val){
      this.load(val)
    },
  }
}
</script>

<style>
.v-text-field--outlined fieldset{
  border: 1px solid #E7E7F4 !important;
}
i.mdi-magnify{
  color: #000000 !important;
  
}
.btn-text{
  color: #FAFAFD;
  text-transform: none;
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