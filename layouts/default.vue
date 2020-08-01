<template>
  <div class="wrap">
    <Navbar />
    <main>
      <div class="container">
        <nuxt />
      </div>
    </main>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="scss">
.wrap {
  margin: 60px 70px;
}
@media screen and (max-width: 960px) {
  .wrap {
    margin: 20px 15px;
  }
}
</style>
