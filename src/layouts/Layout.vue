<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      breakpoint="767"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu de navigation
        </q-item-label>

        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Tâche</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/params" exact>
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Paramètres</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/connexion" exact>
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>

          <q-item-section v-if="!user">
            <q-item-label>Se connecter</q-item-label>
          </q-item-section>
          <q-item-section v-else @click="deconnecterUtilisateur">
            <q-item-label>Se déconnecter</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          to="/"
          icon="list"
          label="Tâches"
          exact
        />
        <q-route-tab
          to="/params"
          icon="settings"
          label="Paramètres"
          exact
        />
      </q-tabs>

      <q-btn
        v-if="!user"
        to="/connexion"
        flat
        icon-right="account_circle"
        label="Se connecter"
        class="absolute-right"
      />

      <q-btn
        v-else
        @click="deconnecterUtilisateur"
        flat
        icon-right="account_circle"
        label="Se déconnecter"
        class="absolute-right"
      />
    </q-footer>
  </q-layout>
</template>

<script>

/*
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
  */

import { mapState, mapActions } from 'vuex'

export default {
  name: 'MainLayout',
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['deconnecterUtilisateur'])
  }
}
</script>
