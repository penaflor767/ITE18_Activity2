<script setup lang="ts">
const highlights = [
  {
    title: 'One connected community',
    description:
      'Get to know the students learning alongside you. Find your place in a supportive campus community.',
  },
  {
    title: 'A clearer campus journey',
    description:
      'Explore programs and student profiles in one simple directory, built to make campus connections easier.',
  },
]
</script>

<template>
  <div>
    <section class="overflow-hidden">
      <div class="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <p class="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-surface px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            <span class="h-2 w-2 rounded-full bg-brand" />
            Your campus, connected
          </p>
          <h1 class="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Find your people.
            <span class="text-brand">Shape your path.</span>
          </h1>
          <p class="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Welcome to the Northstar Student Hub, a friendly starting point to discover our student community and the programs that bring us together.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <AppButton label="Meet our students" color="orange" to="/students" />
            <AppButton label="Explore the community" color="blue" to="/students" />
          </div>
          <div class="mt-10 flex items-center gap-3 text-sm text-muted">
            <span class="flex -space-x-2" aria-hidden="true">
              <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-canvas bg-brand text-[10px] font-bold text-brand-foreground">NP</span>
              <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-canvas bg-cyan text-[10px] font-bold text-canvas">AS</span>
              <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-canvas bg-slate-600 text-[10px] font-bold text-white">MG</span>
            </span>
            <span><strong class="font-semibold text-ink">Every student has a story.</strong> Start with a hello.</span>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-lg">
          <div class="absolute -left-7 top-8 h-28 w-28 rounded-full bg-brand/15 blur-2xl" aria-hidden="true" />
          <div class="absolute -bottom-5 right-4 h-32 w-32 rounded-full bg-cyan/10 blur-2xl" aria-hidden="true" />
          <div class="relative rounded-[2rem] border border-border bg-surface p-5 shadow-card sm:p-7">
            <div class="flex items-center justify-between border-b border-border pb-5">
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-brand">Campus community</p>
                <p class="mt-1 text-lg font-bold text-ink">A place to belong</p>
              </div>
              <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-muted text-brand">
                <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6" aria-hidden="true">
                  <path d="m12 3 2.1 5.9L20 11l-5.9 2.1L12 19l-2.1-5.9L4 11l5.9-2.1L12 3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
                </svg>
              </span>
            </div>
            <div class="space-y-3 py-5">
              <div class="flex items-center gap-4 rounded-xl bg-surface-muted p-4">
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-xs font-bold text-brand-foreground">NP</span>
                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-bold text-ink">Nicko James A. Peñaflor</p>
                  <p class="mt-1 text-xs text-muted">Information Technology</p>
                </div>
                <span class="text-xs font-semibold text-brand">Year 3</span>
              </div>
              <div class="flex items-center gap-4 rounded-xl bg-surface-muted p-4">
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan text-xs font-bold text-canvas">AS</span>
                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-bold text-ink">Alex Santos</p>
                  <p class="mt-1 text-xs text-muted">Computer Science</p>
                </div>
                <span class="text-xs font-semibold text-brand">Year 2</span>
              </div>
              <div class="flex items-center gap-4 rounded-xl bg-surface-muted p-4">
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-600 text-xs font-bold text-white">MG</span>
                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-bold text-ink">Maria Garcia</p>
                  <p class="mt-1 text-xs text-muted">Information System</p>
                </div>
                <span class="text-xs font-semibold text-brand">Year 1</span>
              </div>
            </div>
            <NuxtLink to="/students" class="flex items-center justify-between border-t border-border pt-4 text-sm font-semibold text-brand transition hover:text-brand-dark">
              Browse the student directory
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-border bg-surface">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div class="max-w-2xl">
          <p class="text-xs font-bold uppercase tracking-[0.16em] text-brand">A hub for everyone</p>
          <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">More than a directory</h2>
          <p class="mt-4 text-base leading-7 text-muted">Our student hub makes it easier to learn about the community and feel at home on your campus.</p>
        </div>
        <div class="mt-9 grid gap-5 md:grid-cols-2">
          <InfoCard
            v-for="highlight in highlights"
            :key="highlight.title"
            :title="highlight.title"
            :description="highlight.description"
          />
        </div>
      </div>
    </section>

    <section class="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.16em] text-brand">The student directory</p>
        <h2 class="mt-2 text-2xl font-bold tracking-tight text-ink">Get to know the Northstar community</h2>
        <p class="mt-2 text-sm leading-6 text-muted">Meet students from different programs and find a familiar face.</p>
      </div>
      <AppButton label="View student directory" color="orange" to="/students" />
    </section>
  </div>
</template>
