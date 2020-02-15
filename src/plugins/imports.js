// Archivos Comunes de Vue

import Vue from 'vue';

// Importar Objetos VUE
import panel from '@/components/shared/container/panel.vue';
import tooltip from '@/components/shared/container/tooltip.vue';
import dialog from '@/components/shared/container/dialog.vue';
import section from '@/components/shared/container/section.vue';
import list from '@/components/shared/container/list.vue';
import listcards from '@/components/shared/container/listcards.vue';
import fileinput from '@/components/shared/input/input_file.vue';
import alert from '@/components/shared/container/alert.vue';
import registeruserdata from '@/components/shared/input/register_user_data.vue';
import registeruserbrands from '@/components/shared/input/register_user_brands.vue';
import registeruserparts from '@/components/shared/input/register_user_parts.vue';
import registeruserseller from '@/components/shared/input/register_user_seller.vue';

//Alertas del sistema
Vue.component('app-alert', alert);

// Panel para mostrar contenido
Vue.component('app-panel', panel);

// Tooltip
Vue.component('app-tooltip', tooltip);

// Listas
Vue.component('app-list', list);

// Listas en cartas
Vue.component('app-list-card', listcards);

// Section [Depende de Panel]
Vue.component('app-section', section);

// Ventana de dialogo [depende de Panel, Tooltip]
Vue.component('app-dialog', dialog);

// Ventana de dialogo [depende de Panel, Tooltip]
Vue.component('app-fileinput', fileinput);

// Formulario de datos del usuario
Vue.component('app-register-user-data', registeruserdata);

// Formulario de datos de empresa Vendedora
Vue.component('app-register-user-seller', registeruserseller);

// Formulario de perfil de Marcas
Vue.component('app-register-user-brands', registeruserbrands);

// Formulario de perfil de partes
Vue.component('app-register-user-parts', registeruserparts);
