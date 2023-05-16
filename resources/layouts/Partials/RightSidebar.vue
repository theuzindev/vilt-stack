<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <div class="hidden lg:block bg-white dark:bg-gray-800 px-8 pt-8 pb-12">
    <Link
      :href="route('login')"
      class="flex justify-center p-4 rounded-xl font-semibold bg-gray-900 text-white tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150"
    >
      Sign in
    </Link>
  </div>
</template>
