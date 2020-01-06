// Archivos Comunes de Vue

import Vue from 'vue';

// Importar Objetos VUE
import panel from '@/components/shared/container/panel.vue';
import tooltip from '@/components/shared/container/tooltip.vue';
import dialog from '@/components/shared/container/dialog.vue';


// Panel para mostrar contenido
Vue.component('app-panel', panel);

// Tooltip
Vue.component('app-tooltip', tooltip);

// Ventana de dialogo [depende de Panel, Tooltip]
Vue.component('app-dialog', dialog);
