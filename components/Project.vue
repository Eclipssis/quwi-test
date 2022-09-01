<template>
  <div class="project">
    <div class="project__logo">
      <img v-if="project.logo_url" :src="project.logo_url" alt="project-image" class="project__image">
      <span class="project__name">{{ project.name }}</span>
    </div>
    <div>
      <span v-if="project.is_active" class="status status--active">Active</span>
      <span v-else class="status status--inactive">Inactive</span>
    </div>
    <div class="project__time">
      total: {{ project.spent_sec_all_time }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectView',

  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
