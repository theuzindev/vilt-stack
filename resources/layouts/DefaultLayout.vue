<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

defineProps<{
  title?: string
}>()
</script>

<template>
  <Head :title="title" />

  <div class="flex max-w-screen-xl mx-auto min-h-screen">
    <LeftSidebar />

    <div class="flex-1 bg-gray-100 dark:bg-gray-900 lg:col-span-3 px-12 pt-8 overflow-y-auto">
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
