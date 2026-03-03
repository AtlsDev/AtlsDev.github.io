<script setup>
import { en, tr } from '@nuxt/ui/locale'

const { setLocale, locale } = useI18n()
</script>

<template>
  <ClientOnly>
    <ULocaleSelect
      v-model="locale"
      :locales="Object.values({ en, tr })"
      class="w-full"
      @update:model-value="(nw) => setLocale(nw)"
    />
  </ClientOnly>
</template>
