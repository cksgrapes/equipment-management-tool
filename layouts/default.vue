<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="hidden-md-and-up"
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up" />
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          flat>
          {{item.title}}
        </v-btn>
<!--        <v-btn flat>Link Two</v-btn>-->
<!--        <v-btn flat>Link Three</v-btn>-->
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: '使用状況',
          to: '/'
        },
        {
          icon: 'apps',
          title: '備品登録',
          to: '/items'
        },
        {
          icon: 'bubble_chart',
          title: 'メンバー登録',
          to: '/members'
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: '備品管理ツール'
    }
  }
}
</script>
