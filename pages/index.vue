<template>
  <section class="poject-list">
    <h2 class="page-title">
      Projects list
    </h2>
    <div v-for="project in projects" :key="project.id">
      <Project :project="project" @click.native="openProjectModal(project)" />
    </div>

    <Modal v-model="projectModalOpen">
      <form class="project-edit-form">
        <h3 class="project-edit-title">
          Edit project
        </h3>
        <Input
          v-model="projectName"
          placeholder="Project name"
          label="Project name"
        />

        <button type="submit" class="button button--small button-primary" @click.prevent="onEditProject">
          Update
        </button>
      </form>
    </Modal>
  </section>
</template>

<script>
import Input from '@/components/common/Input.vue'
import Modal from '@/components/common/Modal.vue'
import Project from '@/components/Project.vue'

export default {
  name: 'IndexPage',

  components: {
    Project, Modal, Input
  },

  middleware: 'authenticated',

  async asyncData ({ store }) {
    const { projects } = await store.dispatch('projects/fetchAll')
    return { projects }
  },

  data () {
    return {
      selectedProject: null,
      projectModalOpen: false,
      projectName: ''
    }
  },

  methods: {
    openProjectModal (project) {
      this.selectedProject = project
      this.projectName = project.name
      this.projectModalOpen = true
    },

    onEditProject () {
      // TODO: add loading state
      this.$store.dispatch('projects/update', {
        id: this.selectedProject.id,
        params: { name: this.projectName }
      })

      const index = this.projects.findIndex(project => project.id === this.selectedProject.id)
      const newProject = { ...this.selectedProject, name: this.projectName }
      this.projects.splice(index, 1, newProject)

      this.projectModalOpen = false
      // TODO: catch some errors
    }
  }
}
</script>
