<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="hidden md:block bg-white dark:bg-gray-800 px-2 lg:px-6">
    <Link :href="route('home')">
      <ApplicationLogo class="w-12 lg:w-28 mx-auto mt-10 mb-10 lg:mb-16" />
    </Link>

    <nav class="space-y-4">
      <NavLink :href="route('home')" :active="route().current('home')">
        <template #icon>
          <HomeIcon />
        </template>

        Home
      </NavLink>
    </nav>

    <ButtonPrimary @click="toggleDark()">
      {{ isDark ? 'Toggle Light Mode' : 'Toggle Dark Mode' }}
    </ButtonPrimary>
  </div>
</template>
