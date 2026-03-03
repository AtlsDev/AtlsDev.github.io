<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <UPage>
    <UContainer class="flex flex-row gap-2">
      <UColorModeButton />
      <ToggleLanguage class="max-w-42" />
      <span> {{ $t('welcome') }} </span>
    </UContainer>
  </UPage>
</template>
