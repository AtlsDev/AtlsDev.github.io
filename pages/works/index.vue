<script lang="ts" setup>
definePageMeta({
  name: 'works',
  path: '/works',
  validate: route => !!route,
  key: route => route.fullPath
})
</script>

<template>
  <div class="h-[800px] text-center w-full flex justify-center items-center overflow-auto">
    <div class="w-5/12 text-center">
      works
    </div>
  </div>
</template>
