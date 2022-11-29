<template>
  <q-page padding>
    <!-- Spinner -->
    <div
      v-if="!tachesChargees"
      class="q-pa-lg text-center"
    >
      <q-spinner-radio color="primary" size="4em" />
    </div>
    <q-pull-to-refresh>
      <!-- Liste des tâches -->
      <q-list
        v-if="taches.length && tachesChargees"
        separator
        bordered:false
      >
        <tache
          v-for="tache in taches"
          :key="tache.id"
          :tache="tache"
          class="q-mb-md rounded-borders">
        </tache>
      </q-list>
    </q-pull-to-refresh>
    <q-page-sticky position="bottom" class="q-mb-lg">
      <q-btn @click="afficherFormTache = true"
             v-if="user"
             fab
             icon="add"
             color="primary" />
      <span v-else class="msg-no-connected">Veuillez vous connecter pour accéder à vos tâches</span>
    </q-page-sticky>

    <q-dialog
      v-model="afficherFormTache"
      persistent
    >
      <form-tache
        @fermer="afficherFormTache = false"
        bouton="Ajouter"
      >
        Ajouter une tâche
      </form-tache>
    </q-dialog>
  </q-page>
</template>

<script>
// importation des fonctions utilitaires
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  name: 'PageTaches',
  data () {
    return {
      afficherFormTache: false
    }
  },
  methods: {
    ...mapActions('taches', ['getTachesApi']),
    refresh (done) {
      this.getTachesApi()
      done()
    }
  },
  computed: {
    // Mappage des getters ('nomNamespace', ['nomGetter'])
    ...mapGetters('taches', ['taches']),
    ...mapGetters('auth', ['user']),
    ...mapState('taches', ['tachesChargees'])
  },
  components: {
    tache: require('components/Taches/Tache').default,
    'form-tache': require('components/Taches/Dialog/FormTache').default
  }
}
</script>

<style>
.text-barre {
  text-decoration: line-through;
}

.msg-no-connected {
  color: #9b0000;
  font-size: 150%;
}

</style>
