<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/pagos">
    <a class="navbar-brand" href="#">Inicio</a>
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/pagos">
            <a class="nav-link" href="#">Pagos</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/respuestas">
            <a class="nav-link" href="#">Respuestas</a>
          </router-link>
        </li>
    </ul>
  </div>
</nav>

</template>

<script>

  export default  {
    name: 'src-components-nav-bar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-nav-bar {

  }
</style>
