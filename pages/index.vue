<template>
  <section class="poject-list">
    <h2 class="page-title">
      Projects list
    </h2>
    <div v-for="project in projects" :key="project.id">
      <Project :project="project" />
    </div>
  </section>
</template>

<script>
import Project from '@/components/Project.vue'

export default {
  name: 'IndexPage',

  components: {
    Project
  },

  middleware: 'authenticated',

  async asyncData ({ store }) {
    // const response = await store.dispatch('projects/fetchProjects')
    // console.log('response', response)
    // return { response }
  },

  data () {
    return {
      projects: []
    }
  },

  async mounted () {
    const { projects } = await this.$store.dispatch('projects/fetchProjects')
    this.projects = projects
  }
}
</script>
