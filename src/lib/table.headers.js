const imagen = {
  text: 'Imagen',
  align: 'center',
  sortable: false,
  value: 'image',
};

const item = {
  text: 'Item',
  value: 'name'
};

const actions = {
  text: 'Acciones',
  align: 'center',
  value: 'action',
  sortable: false
};

export default {
  users: [
    imagen,
    {
      text: 'Nombre',
      value: 'name'
    },
    {
      text: 'Apellido',
      value: 'last'
    },
    {
      text: 'E-mail',
      value: 'email'
    },
    {
      text: 'Identidad',
      value: 'doc'
    },
    {
      text: 'Tipo',
      value: 'level'
    },
    {
      text: 'Telefono',
      value: 'phone'
    },
    actions
  ],
  brands: [
    imagen,
    item,
    actions
  ],
  models: [
    imagen,
    item,
    actions
  ],
  subparts: [
    imagen,
    item,
    actions
  ],
  parts: [
    imagen,
    item,
    actions
  ]
};
