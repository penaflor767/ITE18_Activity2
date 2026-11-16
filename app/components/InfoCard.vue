<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <article class="rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-7">
    <span class="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
      <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true">
        <path d="M12 3.5 20 7.8v8.4L12 20.5l-8-4.3V7.8l8-4.3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
        <path d="m4.5 7.7 7.5 4.1 7.5-4.1M12 12v8" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
      </svg>
    </span>
    <h2 class="text-lg font-bold tracking-tight text-ink">{{ title }}</h2>
    <p class="mt-3 text-sm leading-6 text-muted">{{ description }}</p>
  </article>
</template>
