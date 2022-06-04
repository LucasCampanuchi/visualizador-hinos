<template>
  <q-page class="flex flex-center">
    <q-card class="my-card card">
      <q-card-section>
        <div class="text-h6">Hinos Novos</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div v-for="hino in hinos" :key="hino">
          <CardHino :hino="hino" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import hinosController from '../../../controllers/Hinos.controller'
import CardHino from '../components/CardHino.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
  data () {
    return {
      hinos: []
    }
  },
  components: {
    CardHino
  },
  async mounted () {
    const response = await hinosController.get()
    if (response != null) {
      this.hinos = response.data
    }
  }
})
</script>

<style scoped>
.card {
    min-width: 50%;
    height: 80vh;
}

@media (max-width: 900px)
{
  .card {
    min-width: 90%;
    height: 80vh;
  }

}
</style>
