<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

defineProps<{
  title?: string
}>()
</script>

<template>
  <Head :title="title" />

  <div class="grid grid-cols-5 max-w-screen-2xl mx-auto min-h-screen">
    <LeftSidebar />

    <div class="bg-gray-100 dark:bg-gray-900 col-span-5 md:col-span-4 lg:col-span-3 px-12 pt-8 overflow-y-auto">
      <header v-if="$slots.header" class="mb-8">
        <slot name="header" />
      </header>

      <main>
        <slot />
      </main>
    </div>

    <RightSidebar />
  </div>
</template>
