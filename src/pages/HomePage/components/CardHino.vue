<template>
    <q-card flat bordered class="my-card q-mt-md" @click="to(hino)">
        <q-card-section >
            <div class="row">
                <div class="text-h6 title">{{hino.name}}</div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script>
export default {
  props: {
    hino: Object
  },
  methods: {
    to (data) {
      this.$router.push({
        path: `/hino/${data.id}`
      })
    }
  },
  mounted () {
    console.log(this.hino)
  }
}
</script>

<style>
.title {
    font-size: 1rem;
}
</style>
