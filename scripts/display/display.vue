<template>
  <span>
    <span>
      Display
      The display helpers allow you to control the display of content. This includes being conditionally visible based upon the current viewport, or the actual element display type.
    </span>
    <v-card>
      <v-card-title>Material Design Viewport Breakpoints</v-card-title>
    </v-card>
  </span>
</template>

<script>
export default {
  data: () => ({
    table1: {
      headers: [
        { name: "Icon", value: "icon" },
        { name: "Device", value: "device" },
        { name: "Code", value: "code" },
        { name: "Types", value: "types" },
        { name: "Range", value: "range" }
      ],
      data: [
        {
          icon: "mdi-cellphone-iphone",
          device: "Extra small",
          code: "xs",
          types: "small to large handset",
          range: "< 600px"
        },
        {
          icon: "mdi-tablet",
          device: "Small",
          code: "sm",
          types: "small to medium tablet",
          range: "600px > < 960px"
        },
        {
          icon: "mdi-laptop",
          device: "Medium",
          code: "md",
          types: "large tablet to laptop",
          range: "960px > < 1264px*"
        },
        {
          icon: "mdi-monitor",
          device: "Large",
          code: "lg",
          types: "desktop",
          range: "1264px* > < 1904px*"
        },
        {
          icon: "mdi-television",
          device: "Extra large",
          code: "xl",
          types: "4k and ultra-wides",
          range: "> 1904px*"
        }
      ]
    },
    table2: {
      headers: [
        { name: "Screen Size", value: "nsize" },
        { name: "Class", value: "nclass" }
      ],
      data: [
        { nsize: "Hidden on all", nclass: ".d-none" },
        { nsize: "Hidden only on xs", nclass: ".d-none .d-sm-flex" },
        { nsize: "Hidden only on sm", nclass: ".d-sm-none .d-md-flex" },
        { nsize: "Hidden only on md", nclass: ".d-md-none .d-lg-flex" },
        { nsize: "Hidden only on lg", nclass: ".d-lg-none .d-xl-flex" },
        { nsize: "Hidden only on xl", nclass: ".d-xl-none" },
        { nsize: "Visible on all", nclass: ".d-flex" },
        { nsize: "Visible only on xs", nclass: ".d-flex .d-sm-none" },
        {
          nsize: "Visible only on sm",
          nclass: ".d-none .d-sm-flex .d-md-none"
        },
        {
          nsize: "Visible only on md",
          nclass: ".d-none .d-md-flex .d-lg-none"
        },
        {
          nsize: "Visible only on lg",
          nclass: ".d-none .d-lg-flex .d-xl-none"
        },
        { nsize: "Visible only on xl", nclass: ".d-none .d-xl-flex" }
      ]
    }
  })
};
</script>

<style>
</style>

