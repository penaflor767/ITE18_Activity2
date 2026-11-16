<template>
  <footer class="border-t border-border bg-surface">
    <div class="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-end md:justify-between">
      <div>
        <NuxtLink to="/" class="text-sm font-bold tracking-tight text-ink">Northstar Student Hub</NuxtLink>
        <p class="mt-2 max-w-md text-sm leading-6 text-muted">
          A welcoming place to discover the people, programs, and community that make our campus special.
        </p>
      </div>
      <p class="text-xs text-muted">© {{ new Date().getFullYear() }} Northstar Student Hub. For learning and community.</p>
    </div>
  </footer>
</template>
