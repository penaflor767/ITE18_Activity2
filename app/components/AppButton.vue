<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    color?: 'blue' | 'green' | 'orange'
    to?: string
  }>(),
  {
    color: 'blue',
  },
)

const colorClasses = {
  blue: 'bg-cyan text-canvas hover:bg-cyan/90 focus-visible:outline-cyan',
  green: 'bg-emerald-500 text-canvas hover:bg-emerald-400 focus-visible:outline-emerald-500',
  orange: 'bg-brand text-brand-foreground hover:bg-brand-dark focus-visible:outline-brand',
}
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="colorClasses[color]"
  >
    {{ label }}
    <span aria-hidden="true">→</span>
  </NuxtLink>
  <button
    v-else
    type="button"
    class="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="colorClasses[color]"
  >
    {{ label }}
  </button>
</template>
