<script setup lang="ts">
const students = [
  {
    name: 'Nicko James A. Peñaflor',
    studentId: '241-03057',
    program: 'Information Technology',
    yearLevel: 'Year 3',
    initials: 'NP',
    avatarColor: 'bg-brand text-brand-foreground',
  },
  {
    name: 'Alex Santos',
    studentId: '251-02634',
    program: 'Computer Science',
    yearLevel: 'Year 2',
    initials: 'AS',
    avatarColor: 'bg-cyan text-canvas',
  },
  {
    name: 'Maria Garcia',
    studentId: '261-04062',
    program: 'Information System',
    yearLevel: 'Year 1',
    initials: 'MG',
    avatarColor: 'bg-slate-600 text-white',
  },
]
</script>

<template>
  <div class="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
    <div class="flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.16em] text-brand">People of Northstar</p>
        <h1 class="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Student directory</h1>
        <p class="mt-3 max-w-2xl text-base leading-7 text-muted">
          Meet some of the students who make our community what it is. Each profile is a starting point for a new campus connection.
        </p>
      </div>
      <NuxtLink to="/" class="inline-flex items-center gap-2 self-start text-sm font-semibold text-brand transition hover:text-brand-dark sm:self-auto">
        <span aria-hidden="true">←</span>
        Back to home
      </NuxtLink>
    </div>

    <div class="mt-8 flex items-center justify-between">
      <h2 class="text-sm font-semibold text-ink">Featured students</h2>
      <span class="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted ring-1 ring-border">{{ students.length }} students</span>
    </div>

    <div class="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <StudentCard v-for="student in students" :key="student.studentId" :student="student" />
    </div>
  </div>
</template>
