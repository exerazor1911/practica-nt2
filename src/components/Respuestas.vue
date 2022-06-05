<template>

  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Preguntas</th>
      <th scope="col">Respuestas</th>
 
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>¿Qué es un componente en Vue.js?</td>
      <td>Son elementos personalizados reutilizables</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>¿Que función cumple el modificador number aplicado a v-model?</td>
      <td>Es un validador HTML5</td>
    
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>vue create se utiliza para:</td>
      <td>Crear un proyecto base Vue basado en Vue CLI</td>
     
    </tr>
  </tbody>
</table>

</template>

<script>

  export default  {
    name: 'src-components-respuestas',
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
  .src-components-respuestas {

  }
</style>
