// Archivos Comunes de Vue

import Vue from 'vue';

// Panel para mostrar contenido
import panel from '@/components/shared/container/panel.vue';
Vue.component('app-panel', panel);

// Tooltip
import tooltip from '@/components/shared/container/tooltip.vue';
Vue.component('app-tooltip', tooltip);

// Ventana de dialogo [depende de Panel, Tooltip]
import dialog from '@/components/shared/container/dialog.vue';
Vue.component('app-dialog', dialog);
