export const actions = {
  async fetchAll () {
    try {
      const response = await this.$axios.$get('projects-manage/index')
      return response
    } catch (error) {
      throw error.response.data
    }
  },

  async update (context, { id, params }) {
    const response = await this.$axios.$post(`projects-manage/update?id=${id}`, params)
    return response
  }
}
