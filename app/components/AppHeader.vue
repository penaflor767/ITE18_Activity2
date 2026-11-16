<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Students', to: '/students' },
]
</script>

<template>
  <header class="relative z-10 border-b border-border bg-surface">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
      <NuxtLink
        to="/"
        class="flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        aria-label="Northstar Student Hub home"
        @click="isMenuOpen = false"
      >
        <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-brand-foreground">
          <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6" aria-hidden="true">
            <path d="M12 2.8 14.2 9.8 21.2 12l-7 2.2-2.2 7-2.2-7-7-2.2 7-2.2L12 2.8Z" fill="currentColor" />
          </svg>
        </span>
        <span>
          <span class="block text-sm font-bold tracking-tight text-ink sm:text-base">Northstar</span>
          <span class="block text-xs font-medium text-muted">Student Hub</span>
        </span>
      </NuxtLink>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink transition hover:bg-surface-muted md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-navigation"
        :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg v-if="!isMenuOpen" viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
          <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
      </button>

      <nav
        id="primary-navigation"
        class="absolute left-0 right-0 top-full border-b border-border bg-surface px-5 py-3 shadow-card md:static md:flex md:items-center md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none"
        :class="isMenuOpen ? 'block' : 'hidden md:block'"
        aria-label="Main navigation"
      >
        <ul class="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="block rounded-lg px-4 py-2.5 text-sm font-semibold text-muted transition hover:bg-brand/5 hover:text-brand"
              active-class="!bg-brand/10 !text-brand"
              @click="isMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
