<template>
	<v-layout fluid>
		<v-expansion-panels
			:dark="dark"
			accordion
			tile
		>
			<v-expansion-panel
				v-for="(item,i) in parts"
				:key="i"
				:dark="dark"
			>
				<v-expansion-panel-header>
					<h3>{{item.text}}</h3>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-container>
						<v-layout
							row
							wrap
						>
							<v-flex
								xs12
								sm12
								md2
								lg2
								xl2
								style="height:55px"
							>
								<app-tooltip
									top
									:tooltip="'Seleccionar todo de ' + item.text"
								>
									<v-checkbox
										v-model="selparts"
										label="[Todos]"
										:value="item.value"
									></v-checkbox>
								</app-tooltip>
							</v-flex>
							<v-flex
								v-for="(parts,pindex) in item.childs"
								:key="parts.value"
								style="height:55px"
								xs12
								sm12
								md2
								lg2
								xl2
							>
								<v-checkbox
									:key="pindex"
									v-model="selparts"
									:label="parts.text"
									:disabled="selparts.indexOf(item.value) != -1 "
									:value="parts.value"
								></v-checkbox>
							</v-flex>
						</v-layout>
					</v-container>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-layout>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    value: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    selparts: [],
    parts: []
  }),
  computed: {
    dark () {
      return this.$store.getters.ui_g_dark;
    }
  },
  watch: {
    selparts () {
      this.parts.forEach((part, index) => {
        this.selparts.forEach(item => {
          if (item == part.value) {
            this.parts[index].childs.forEach(spart => {
              this.selparts.find((pfdata, indexpf) => {
                if (pfdata) {
                  if (pfdata == spart.value) {
                    this.selparts.splice(indexpf, 1);
                  }
                }
              });
            });
          }
        });
      });
      var csp = [];
      var ic = 0;
      this.parts.forEach((sp, i1) => {
        sp.childs.forEach(p => {
          this.selparts.forEach(sp => {
            if (p.value == sp) {
              ic++;
            }
          });
          csp.splice(i1, 1, { max: sp.childs.length, count: ic });
        });
        ic = 0;
      });
      csp.forEach((c, index) => {
        if (c.max == c.count) {
          this.selparts.push(this.parts[index].value);
        }
      });
      this.$emit('input', this.selparts);
    }
  },
  created () {
    this.selparts = this.value;
    this.loadparts();
  },
  methods: {
    loadparts () {
      axios
        .get('ask/notilist/subparts')
        .then(response => {
          const list = response.data.data;
          this.parts = list;
        })
        .catch(error => {
          let message = '';
          if (error.response != undefined) {
            message = error.response.data.error.message;
          } else {
            message = error;
          }
          this.$store.dispatch('ui_a_error', message);
        })
        .then(() => { });
    }
  }
};
</script>

<style>
</style>
