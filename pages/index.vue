<template>
  <v-layout row wrap justify-center reverse align-center>
    <v-flex xs12 sm6 md6>
      <h1 class="display-1">[SOTM001] Microphone - BOSE</h1>
      <p class="title">早乙女学園所有備品</p>
      <v-layout row wrap align-center>
        <v-flex xs12 sm6 md6>
          <v-layout row wrap>
            <v-flex xs6 sm12 md12>
              <v-select
                :items="items"
                label="借りるひと"
              ></v-select>
            </v-flex>
            <v-flex xs6 sm12 md12>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="返却予定日"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-btn color="primary" large block dark>借りる</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 sm6 md6>
      <div>items area</div>
    </v-flex>
  </v-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
//
export default {
  // components: {
  //   Logo,
  //   VuetifyLogo
  // }
  data: () => ({
    items: ['七海春歌','渋谷友千香','一ノ瀬トキヤ', '一十木音也', '四ノ宮那月'],
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false
  })
}
</script>
