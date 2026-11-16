<script setup lang="ts">
interface Student {
  name: string
  studentId: string
  program: string
  yearLevel: string
  initials: string
  avatarColor: string
}

defineProps<{
  student: Student
}>()
</script>

<template>
  <article class="group rounded-2xl border border-border bg-surface p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lg">
    <div class="flex items-start gap-4">
      <div
        class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ring-4 ring-surface"
        :class="student.avatarColor"
        :aria-label="`${student.name} avatar`"
        role="img"
      >
        {{ student.initials }}
      </div>
      <div class="min-w-0 pt-1">
        <h2 class="truncate text-base font-bold tracking-tight text-ink">{{ student.name }}</h2>
        <p class="mt-1 text-sm font-medium text-brand">{{ student.program }}</p>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-wide text-muted">Student ID</p>
        <p class="mt-1 text-sm font-semibold text-ink">{{ student.studentId }}</p>
      </div>
      <div>
        <p class="text-xs font-semibold uppercase tracking-wide text-muted">Year level</p>
        <p class="mt-1 text-sm font-semibold text-ink">{{ student.yearLevel }}</p>
      </div>
    </div>
  </article>
</template>
