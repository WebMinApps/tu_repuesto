<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    item-key="name"
    group-by="category"
    class="elevation-1"
    show-group-by
  ></v-data-table>
</template>

<script>
/*
Grouped rows
Using the group-by and group-desc props you can group rows on an item property. The show-group-by prop will show a group button in the default header.
*/

export default {
    data () {
        return {
            headers: [
                {
                    text: 'Dessert (100g serving)',
                    align: 'left',
                    value: 'name'
                },
                { text: 'Category', value: 'category' }
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    category: 'Ice cream'
                },
                {
                    name: 'Ice cream sandwich',
                    category: 'Ice cream'
                },
                {
                    name: 'Eclair',
                    category: 'Cookie'
                },
                {
                    name: 'Cupcake',
                    category: 'Pastry'
                },
                {
                    name: 'Gingerbread',
                    category: 'Cookie'
                },
                {
                    name: 'Jelly bean',
                    category: 'Candy'
                },
                {
                    name: 'Lollipop',
                    category: 'Candy'
                },
                {
                    name: 'Honeycomb',
                    category: 'Toffee'
                },
                {
                    name: 'Donut',
                    category: 'Pastry'
                },
                {
                    name: 'KitKat',
                    category: 'Candy'
                }
            ]
        };
    }
};
</script>
