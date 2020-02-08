/* eslint-disable no-console */
<template><span>
		<v-file-input
			v-model="files"
			:accept="accept"
			:prepend-icon="prependIcon"
			:placeholder="placeholder"
			:dark="dark"
			:solo="solo"
			:multiple="multiple"
			:outlined="outlined"
			required
			:rules='error'
		>
			<template v-slot:selection="{text}">
				{{ text }}
			</template>
		</v-file-input>
	</span>
</template>

<script>
export default {
  props: {
    value: { type: Array, required: true, default: () => ([]) },
    base64: { type: Boolean },
    accept: { type: String, required: false, default: 'image/*' },
    placeholder: { type: String, default: '' },
    multiple: { type: Boolean },
    showicons: { type: Boolean },
    dark: { type: Boolean },
    solo: { type: Boolean },
    outlined: { type: Boolean },
    imglimit: { type: String, default: '20000000' },
    'prepend-icon': { type: String, default: '' }
  },
  data: () => ({
    files: [],
    filescoded: [],
    error: []
  }),
  computed: {},
  watch: {
    files () {
      this.filescoded = [];
      if (this.files.length) {
        this.files.forEach((img) => {
          let fname = img.name;
          let fsize = img.size;
          if (fname.lastIndexOf('.') <= 0) {
            this.error.push('Tipo de imagen no valida');
            return;
          } else {
            if (fsize >= this.imglimit) {
              this.error.push('La imagen es demasiado grande');
              return;
            } else {
              const fileread = new FileReader();
              fileread.readAsDataURL(img);
              fileread.addEventListener('load', () => {
                this.filescoded.push({ name: fname, data: fileread.result, size: fsize });
              });
            }
          }
        });
      } else {
        this.filescoded = [];
      }
      this.update();
    }
  },
  methods: {
    msg () {
      alert('cleared');
    },
    update () {
      if (this.base64) {
        this.$emit('input', this.filescoded);
      } else {
        this.$emit('input', this.files);
      }
    }
  }
};
</script>

<style>
</style>
