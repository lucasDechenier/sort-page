<template>
  <div class="full-height bg-color">
    <header-top></header-top>
    <div class="d-flex font-poppins">
      <side-bar class="side-bar" :selected="0"></side-bar>
      <div class="full-width centralize flex-column px-5 overflow">
        <div class="max-w-988 d-flex flex-column">
          <img class="responsive-image mobile" src="../assets/enem.png">
          <span class="font-s-25 font-w-7 mt-4">Sorteio da live</span>
          <div class="max-w-445 d-flex">
            <v-autocomplete
              label="Selecione a live ao vivo"
              filled
              solo
              clearable
              class="mt-4"
            ></v-autocomplete>
          </div>
          <div class="b-shadow d-flex flex-column mb-4 max-w-786">
            <tr class="hg-15 color-other b-shadow"></tr>
            <tr v-for="(item, index) in desserts" :key="index" class="mt-3 hg-31 centralize" :class="index%2 == 0?'color' : 'color-other'">
              <span class="ml-4 font-w-5 font-s-14">
                {{ item.name }}
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
            >
              <span class="btn-text font-s-16">
                Sortear
              </span>
            </v-btn>
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