<template>
	<span>
		<slot
			v-if="onoff"
			name="on"
		></slot>
		<slot
			v-else
			name="off"
		></slot>
		<!-- COMO USAR
          <app-alt v-model="alt" :interval="interval" :max="max" :min="min"></app-alt>
    -->
	</span>
</template>
<script>
export default {
  props: {
    value: { default: 0 }, // Valor asignado en declaracion
    interval: { type: String, defaul: 1000 }, // Velocidad en milesimas de segundo del contador
    max: { type: String, required: false, default: '0' }, // Valor maximo antes de reiniciar el contador [0 = sin limite]
    min: { type: String, required: false, default: '0' } // valor minimo de reinicio del contador
  },
  data: () => ({
    num: 0, // Contador
    onoff: false, // Alternardor [Si o  No]
  }),
  watch: {
    num (value) { // Fuerza al contador a iniciar si max esta definido se reinicia al valor de max
      if (this.max != 0) {
        if (value > this.max) {
          if (this.min != 0) {
            this.num = this.min + 0;
          } else {
            this.num = 0;
          }
        }
      } this.update();
    }
  },
  created () { // Inicia las funciones de inicio
    this.num = this.value;
    this.init();
  },
  methods: {
    update () { // Actualiza la variable de V-Model
      this.$emit('input', this.num);
    },
    init () { // Funcion inicial de carga
      let vm = this;
      setInterval(function () { vm.start(); }, this.interval);
    },
    start () { // Aumenta el contador y alterna el alternador
      this.num++;
      this.onoff = !this.onoff;
    }
  }
};
</script>

<style>
</style>
