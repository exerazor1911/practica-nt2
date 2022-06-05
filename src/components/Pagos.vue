<template>

  <section class="src-components-pagos">
    <div class="container-fluid mt-3">
      <div class="jumbotron">
        <vue-form :state="formState" @submit.prevent="onSubmit">
    
        <!-- Nombre -->

        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
          v-model="formData.nombre" 
          required 
          name="nombre" 
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.nombre"
          />
    
          <field-messages name="nombre" show="$dirty">
            <div>Aceptado</div>
            <div slot="required">El nombre es un campo requerido</div>
          </field-messages>
        </validate>

        <!-- DNI -->

        <validate tag="div">
          <label for="dni">DNI</label>
          <input 
          type="number"
          v-model="formData.dni" 
          required 
          name="dni" 
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.dni"
          />
    
          <field-messages name="dni" show="$dirty">
            <div>Aceptado</div>
            <div slot="required">El dni es un campo requerido</div>
          </field-messages>
        </validate>

        <!-- TOTAL -->

        <validate tag="div">
          <label for="deuda">Deuda</label>
          <input 
          type="number"
          v-model="formData.deuda" 
          required 
          name="deuda" 
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.deuda"
          />
    
          <field-messages name="deuda" show="$dirty">
            <div>Aceptado</div>
            <div slot="required">El monto de la deuda es un campo requerido</div>
          </field-messages>
        </validate>

        <!-- PAGO -->

        <validate tag="div">
          <label for="pago">Pago</label>
          <input 
          type="number"
          v-model="formData.pago" 
          required 
          name="pago" 
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.pago"
          />
    
          <field-messages name="pago" show="$dirty">
            <div>Aceptado</div>
            <div slot="required">El monto del pago es un campo requerido</div>
          </field-messages>
        </validate>



        <button @click="pagar()" :disabled="formState.$invalid" class="my-5" type="submit">Pagar</button>
      </vue-form>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">DNI</th>
      <th scope="col">Deuda</th>
      <th scope="col">Pago</th>
      <th scope="col">Fecha</th>
      <th scope="col">Saldo Final</th>
    </tr>
  </thead>
  <tbody v-for="(pago,index) in pagos" :key="index">
  <tr :style="{backgroundColor : pago.estilo}">
      <th scope="col">{{index+1}}</th>
      <th scope="col">{{pago.nombre}}</th>
      <th scope="col">{{pago.dni}}</th>
      <th scope="col">{{pago.deuda}}</th>
      <th scope="col">{{pago.pago}}</th>
      <th scope="col">{{pago.fecha}}</th>
      <th scope="col">{{pago.saldoFinal}}</th>
  </tr>
    <!-- <tr>
      <th scope="row">1</th>
      <td>¿Qué es un componente en Vue.js?</td>
      <td>Son elementos personalizados reutilizables</td>
      
    </tr> -->
    
  </tbody>
</table>
    </div>
  </div>
  </section>

</template>

<script >

  export default  {
    name: 'src-components-pagos',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {

        },
        formData : this.getInicialData(),
        pagos: []
      }
    },
    methods: {
      pagar() {
        this.formData.saldoFinal = this.calcularSaldo(this.formData.deuda, this.formData.pago)
        this.formData.estilo = this.getEstilo()
        this.pagos.push(this.formData)
        this.formData = this.getInicialData()
      },

      getFechaActual() {
        return new Date().toString()
      },

      calcularSaldo(deuda,pago) {
          return deuda - pago
      },

      getEstilo() {
        let estilo = ''
        if (this.formData.saldoFinal > 0) {
          estilo = '#db1d0f'
        } else if (this.formData.saldoFinal < 0) {
          estilo = '#4853f0'
        } else {
          estilo = '#17cf3b'
        }
        return estilo
      },

      getInicialData() {
        return {
          nombre: '',
          dni: '',
          deuda: '',
          pago: '',
          fecha: this.getFechaActual()
        }
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-pagos {

  }

  .jumbotron {
    background-color: rgb(165, 163, 163);
  }
</style>
