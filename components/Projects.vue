<template>
  <div
    id="projects"
    class="flex flex-col justify-center items-center min-h-screen w-screen py-5"
  >
    <ul
      class="
        grid
        normal:grid-cols-4
        laptop:grid-cols-3
        tb:grid-cols-2
        grid-cols-1
        gap-y-10
        center
        w-full
        justify-items-center
      "
    >
      <li
        :class="`w-96  h-56  block bg-white border border-black bg-cover bg-no-repeat  `"
        v-for="repo in repos"
        :key="repo.id"
      >
        <div class="w-full h-full flex flex-col justify-evenly items-center">
          <p>{{ repo.name.toUpperCase() }}</p>
          <p>
            {{
              new Date(repo.created_at).toLocaleString('en-US', {
                hour12: false,
              })
            }}
          </p>
          <div>
            <a v-if="repo.homepage" :href="repo.homepage" target="_blank">
              <button class="home-btn">OPEN</button>
            </a>

            <a :href="repo.html_url" target="_blank">
              <button class="home-btn">CODE</button>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repos: [],
    }
  },
  mounted() {
    this.$axios
      .get('https://api.github.com/users/piemree/repos')
      .then((result) => {
        let data = result.data.filter((el) => {
          if (el.id == 370508586 || el.id == 359844627) {
            return false
          }

          return true
        })
        this.repos = [...data]
          .sort(
            (a, b) =>
              new Date(a.created_at).getTime() -
              new Date(b.created_at).getTime()
          )
          .reverse()

        this.repos.filter((el) => el.id != 370508586)
      })
      .catch((err) => console.log(err))
  },
}
</script>
