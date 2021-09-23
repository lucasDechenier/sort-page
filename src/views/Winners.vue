<template>
  <div class="full-height-vh bg-color">
    <header-top></header-top>
    <div class="d-flex font-poppins full-height">
      <side-bar class="side-bar" :selected="1"></side-bar>
      <div class="full-width centralize flex-column px-5 overflow">
        <div class="max-w-1119 d-flex flex-column">
          <span class="font-s-25 font-w-7 mt-4">Todos os ganhadores</span>
          <div class="d-flex space-between flex-row">
            <div class="max-w-445 d-flex">
              <v-autocomplete
                label="Selecione a live ao vivo"
                filled
                solo
                clearable
                class="mt-4"
              ></v-autocomplete>
            </div>
            <div class="max-w-445 d-flex">
              <v-autocomplete
                label="Selecione a live ao vivo"
                filled
                solo
                clearable
                class="mt-4"
              ></v-autocomplete>
            </div>
          </div>
          <div class="wd-1000">
            <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="3"
            class="elevation-1"
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
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  }
}
</script>

<style>
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