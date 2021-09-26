<template>
  <div class="min-height-vh">
    <header-top :selected="selected"></header-top>
    <div class="d-flex font-poppins full-height">
      <side-bar class="side-bar" :selected="selected"></side-bar>
      <div class="full-width centralize flex-column px-15 overflow bg-color">
        <div class="max-w-1119 d-flex flex-column full-width">
          <span class="font-s-25 font-w-7 mt-4">Todos os ganhadores</span>
          <div class="d-flex space-between search mt-7">
            <v-autocomplete
              v-model="currentLive"
              label="Selecione a live ao vivo"
              outlined
              full-width
              :items="lives"
              :loading="loading"
              item-text="nome"
              item-value="id"
              background-color="#FFFFFF"
              class="max-w-445 search-input"
              clearable
            ></v-autocomplete>
            <v-text-field
              outlined
              v-model="textFilter"
              label="Pesquise aqui"
              append-icon="mdi-magnify"
              class="max-w-332 d-flex search-input"
            ></v-text-field>
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
        { text: 'Nome', align: 'start', value: 'usuario', sortable:false },
        { text: 'Estado', value: 'estado', sortable:false },
        { text: 'Email', value: 'email', sortable:false },
        { text: 'Live', value: 'live', sortable:false },
      ],
      users: [],
      selected: 1,
      lives: [],
      currentLive: null,
      textFilter: null,
    }
  },
  mounted () {
    this.load()
  },
  methods:{
    load(userFilter, filterText){
      this.loading = true
      WinnerService.list().then(data =>{
        if(data.success){
          this.users = data.usuarios
        }
      }).finally(() => {
        if(userFilter) {
          this.users = this.users.filter(element => element.live_id === userFilter )
        }
        if(filterText){
          this.users = this.users.filter(element => {
            return(
              element.usuario.toLowerCase().indexOf(filterText.toLowerCase()) > - 1
            )
          })
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
      this.load(val,this.textFilter)
    },
    textFilter: function handler(val){
      this.load(this.currentLive,val)
    }
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

.bg-color{
  background: #FAFAFD;
}

@media (max-width: 1150px) {
  .search-input{
    max-width: 300px !important;
  }
}

@media (max-width: 900px) {
  .side-bar{
    display: none !important;
  }
}

@media (max-width: 700px) {
  .search{
    flex-direction: column !important;
  }
  .search-input{
    max-width: none !important;
  }
}
</style>