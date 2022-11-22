<template>
  <q-page padding>
    <!-- Spinner -->
    <div
      v-if="!tachesChargees"
      class="q-pa-lg text-center"
    >
      <q-spinner-radio color="primary" size="4em" />
    </div>
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

    <q-page-sticky position="bottom" class="q-mb-lg">
      <q-btn @click="afficherFormTache = true"
             fab
             icon="add"
             color="primary" />
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
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'PageTaches',
  data () {
    return {
      afficherFormTache: false
    }
  },
  computed: {
    // Mappage des getters ('nomNamespace', ['nomGetter'])
    ...mapGetters('taches', ['taches']),
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

</style>
