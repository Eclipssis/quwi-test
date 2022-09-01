export const actions = {
  async fetchProjects () {
    try {
      const response = await this.$axios.$get('projects-manage/index')
      return response
    } catch (error) {
      throw error.response.data
    }
  },

  projectUpdate () {

  }
}
