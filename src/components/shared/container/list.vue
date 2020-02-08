<template>
	<span>
		<v-skeleton-loader
			v-if="!nitems"
			:loading="true"
			type=" table-thead, table-tbody, table-tfoot"
		>
		</v-skeleton-loader>
		<v-data-table
			v-model="selected"
			:search="search"
			:dense="dense"
			:headers="headers"
			:items="items"
			:single-select="singleSelect"
			item-key="name"
			:show-select="showselect"
		>
			<template v-slot:top>
			</template>
			<template v-slot:item.image="{item}">
				<td>
					<v-avatar
						v-if="item.image"
						size="48"
						style="margin:3px"
					>
						<img
							:src="baseurl + item.image"
							:alt="item.name + ' ' + item.last"
							class="img-responsive"
						/>
					</v-avatar>
					<v-avatar
						v-else
						size="48"
						style="margin:3px"
					>
						<img
							src="@/assets/img/sin_foto.png"
							:alt="props.item.name + ' ' + props.item.last"
							class="img-responsive"
						/>
					</v-avatar>
				</td>
			</template>
			<template v-slot:item.action="{item}">
				<v-icon
					small
					class="mr-2"
					@click="editItem(item)"
				>
					mdi-edit
				</v-icon>
				<v-icon
					small
					@click="deleteItem(item)"
				>
					mdi-delete
				</v-icon>
			</template>
			<template v-slot:no-data>
				No se encuentran Elementos
			</template>
		</v-data-table>
	</span>
</template>


<script>
import Axios from 'axios';
export default {
  props: {
    showselect: { type: Boolean },
    dense: { type: Boolean },
    search: { required: false, type: String, default: '' },
    headers: { required: true, type: Array, default () { return []; } },
    singleselect: { type: Boolean },
    items: {
      required: false,
      type: Array,
      default () {
        return [
          {
            'ID': '100000000000000000000000000001',
            'email': 'admin@turepuesto.com',
            'name': 'Admin',
            'last': 'System',
            'doc': '00000000',
            'doctype': 'C',
            'nac': 'V',
            'phone': '00000000001',
            'level': '5',
            'birth': '0000-00-00',
            'created': '2019-07-19 04:03:03',
            'active': '1',
            'verified': '1',
            'image': 'images/storefiles/users/100000000000000000000000000001.png'
          },
          {
            'ID': '289a2a336cf00d52be8532876095ea',
            'email': 'andres@turepuesto.com',
            'name': 'Andres',
            'last': 'Salinas',
            'doc': '15879382',
            'doctype': 'C',
            'nac': 'V',
            'phone': '04163231120',
            'level': '0',
            'birth': '2001-12-16',
            'created': '2019-12-17 01:24:19',
            'active': '1',
            'verified': '0',
            'image': 'images/storefiles/users/289a2a336cf00d52be8532876095ea.jpeg'
          },
          {
            'ID': 'a81d82bd3aa5137eb3ff1f044c7713',
            'email': 'saotand@gmail.com',
            'name': 'David',
            'last': 'Salinas',
            'doc': '15879381',
            'doctype': 'C',
            'nac': 'V',
            'phone': '04163231120',
            'level': '1',
            'birth': '2001-12-16',
            'created': '2019-12-17 00:34:11',
            'active': '1',
            'verified': '0',
            'image': 'images/storefiles/users/a81d82bd3aa5137eb3ff1f044c7713.jpeg'
          }
        ];			}		},
    pagination: {			required: false, type: Object, default () { return {}; }
    }
  },
  data: () => ({
    singleSelect: true,
    selected: []
  }),
  computed: {
    baseurl () {
      return Axios.defaults.baseURL;
    },
    nitems () {
      return this.items.length;
    }
  }
};

/*
A string delimited list of skeleton components to create such as type="text@3" or type="card, list-item". Will recursively generate a corresponding skeleton from the provided string. Also supports short-hand for multiple elements such as article@3 and paragraph@2 which will generate 3 article skeletons and 2 paragraph skeletons. Please see below for a list of available pre-defined options.

{
  "actions": "button@2",
  "article": "heading, paragraph",
  "avatar": "avatar",
  "button": "button",
  "card": "image, card-heading",
  "card-avatar": "image, list-item-avatar",
  "card-heading": "heading",
  "chip": "chip",
  "date-picker": "list-item, card-heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  "heading": "heading",
  "image": "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  "paragraph": "text@3",
  "sentences": "text@2",
  "table": "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "heading, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "table-cell@6",
  "table-cell": "text",
  "table-tfoot": "text@2, avatar@2",
  "text": "text"
}
*/

</script>

<style>
</style>
