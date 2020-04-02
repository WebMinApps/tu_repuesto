

<template>
	<span>
		<v-file-input
			v-model="files"
			style="overflow:hidden"
			:accept="accept"
			:prepend-icon="prependIcon"
			:placeholder="placeholder"
			:dark="dark"
			:solo="solo"
			:multiple="multiple"
			:outlined="outlined"
			:required="required"
			:rules='error'
			:disabled="disabled"
			:append-outer-icon="imageicon"
			single-line
			height="32"
			truncate-length="14"
			@click:append-outer="imagelist"
			@input="loadedlist"
		>
			<template slot="selected">
				&nbsp;_
			</template>
		</v-file-input>
		<v-dialog
			v-model="listdialog"
			width="500"
		>
			<app-panel>
				<template slot="title">Lista de imagenes: {{loadedimages}}</template>
				<template slot="buttons">
					<v-btn icon>
						<v-icon @click="closewindow">mdi-close</v-icon>
					</v-btn>
				</template>
				<v-card-text>
					<v-container class="ma-0">
						<v-layout row>
							<v-flex
								v-for="(f,index) in filescoded"
								:key="f.size"
								class="pa-1"
								xs4
							>
								<v-card
									height="80"
									class="ma-1"
									style="overflow:hidden"
								>
									<img
										:src="f.data"
										class="img-responsive"
									>
									<v-badge class="ma-4">{{index + 1 }}</v-badge>
									<v-btn
										icon
										small
										fab
										style="position:absolute; top:1px; right:1px"
										@click="eliminarimagen(index)"
									>
										<v-icon>mdi-close</v-icon>
									</v-btn>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>
			</app-panel>
		</v-dialog>
	</span>
</template>

<script>
/* eslint-disable no-console */


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
    required: { type: Boolean },
    imglimit: { type: String, default: '20000000' },
    disabled: { type: Boolean },
    'prepend-icon': { type: String, default: '' }
  },
  data: () => ({
    files: [],
    filescoded: [],
    error: [],
    listdialog: false
  }),
  computed: {
    loadedimages () {
      return this.filescoded.length;
    },
    loaded () {
      return this.loadedimages > 1;
    },
    imageicon () {
      return this.loaded ? 'mdi-image-edit' : '';
    }
  },
  watch: {
    files () {
      this.filescoded = [];
      if (this.files.length) {
        this.files.forEach((img) => {
          let fname = img.name;
          let fsize = img.size;
          let ftype = img.type;
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
                this.filescoded.push({ name: fname, data: fileread.result, size: fsize, type: ftype });
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
    closewindow () {
      this.listdialog = false;
    },
    eliminarimagen (i) {
      let cei = confirm('eliminar imagen?', 'Tu');
      if (cei) {
        this.filescoded.splice(i, 1);
      }
      this.update();
    },
    update () {
      if (this.base64) {
        this.$emit('input', this.filescoded);
      } else {
        this.$emit('input', this.files);
      }
    },
    loadedlist () {
      alert('Do');
    },
    updateProgress (evt) {
      if (evt.lengthComputable) {
        // evt.loaded and evt.total are ProgressEvent properties
        var loaded = (evt.loaded / evt.total);
        if (loaded < 1) {
          // Increase the prog bar length
          // style.width = (loaded * 200) + "px";
        }
      }
    },
    imagelist () {
      this.listdialog = !this.listdialog;
    }
  }
};
</script>

