<template>
  <q-page class="flex flex-center">
    <q-card class="my-card card">
      <q-card-section>
        <div class="text-h6">{{this.hino.name}}</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section v-if="this.hino != undefined">
        <div v-for="h in rows" :key="h">
          <p>{{h === '' ? '&nbsp;' : h}}</p>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import hinosController from '../../../controllers/Hinos.controller'

export default defineComponent({
  name: 'HinoViewPage',
  data () {
    return {
      hino: {},
      rows: []
    }
  },
  async mounted () {
    const response = await hinosController.getById(this.$route.params.id)
    if (response != null) {
      this.hino = response.data
      // this.hino.text.replaceAll('\n', '<br>')
      this.rows = this.hino.text.split('\n')
    }
  }
})
</script>

<style>
.card {
    min-height: 80vh;
    min-width: 50%;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 20px;
    margin-right: 20px;
}

@media (max-width: 900px)
{
  .card {
    min-width: 90%;
  }

}

p {
  margin: 0 0 0px;
}

</style>
