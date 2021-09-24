<template>
  <div class="min-height-vh">
    <header-top></header-top>
    <div class="d-flex font-poppins full-height">
      <side-bar class="side-bar" :selected="1"></side-bar>
      <div class="full-width centralize flex-column px-5 overflow bg-color">
        <div class="max-w-1119 d-flex flex-column">
          <span class="font-s-25 font-w-7 mt-4">Todos os ganhadores</span>
          <div class="d-flex space-between flex-row mt-7">
            <div class="max-w-445 d-flex">
              <v-autocomplete
                label="Selecione a live ao vivo"
                outlined
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
              :headers="headers"
              :items="desserts"
              :items-per-page="8"
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

export default {
  components: {HeaderTop, SideBar},
  data(){
    return{
      footerProps: {
        'items-per-page-text': 'Páginas',
      },
      headers: [
          {
            text: 'Nome',
            align: 'start',
            value: 'name',
          },
          { text: 'Estado', value: 'calories' },
          { text: 'Email', value: 'fat' },
          { text: 'Live', value: 'carbs' },
        ],
      desserts: [
        {
          name: 'Anderson Moura',
          calories: 'Rondonia',
          fat: 'Anderson023am@gmail.com',
          carbs: 'Live 22',
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Anderson Moura',
          calories: 'Rondonia',
          fat: 'Anderson023am@gmail.com',
          carbs: 'Live 22',
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Anderson Moura',
          calories: 'Rondonia',
          fat: 'Anderson023am@gmail.com',
          carbs: 'Live 22',
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Anderson Moura',
          calories: 'Rondonia',
          fat: 'Anderson023am@gmail.com',
          carbs: 'Live 22',
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Anderson Moura',
          calories: 'Rondonia',
          fat: 'Anderson023am@gmail.com',
          carbs: 'Live 22',
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Anderson Moura',
          calories: 'Rondonia',
          fat: 'Anderson023am@gmail.com',
          carbs: 'Live 22',
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Anderson Moura',
          calories: 'Rondonia',
          fat: 'Anderson023am@gmail.com',
          carbs: 'Live 22',
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Anderson Moura',
          calories: 'Rondonia',
          fat: 'Anderson023am@gmail.com',
          carbs: 'Live 22',
          protein: 4.3,
          iron: '1%',
        },
      ],
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