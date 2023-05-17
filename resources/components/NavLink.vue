<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

const props = defineProps<{
  href: string
  active?: boolean
}>()

const classes = computed(() =>
  props.active
    ? 'flex items-center justify-center gap-3 lg:py-4 lg:px-14 text-3xl lg:text-xl text-center font-medium leading-5 text-gray-700 dark:text-gray-300 rounded-xl focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 transition duration-150 ease-in-out'
    : 'flex items-center justify-center gap-3 lg:py-4 lg:px-14 text-3xl lg:text-xl text-center font-medium leading-5 text-gray-500 dark:text-gray-400 rounded-xl hover:text-gray-700 dark:hover:text-gray-300 dark:hover:bg-slate-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 transition duration-150 ease-in-out'
)
</script>

<template>
  <Link :href="href" :class="classes">
    <slot name="icon" />
    <div class="hidden lg:block"><slot /></div>
  </Link>
</template>
