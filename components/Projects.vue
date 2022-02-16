<template>
  <div
    id="projectsPage"
    class="flex flex-col justify-center items-center min-h-screen w-screen py-5"
  >
    <ul
      class="grid normal:grid-cols-4 laptop:grid-cols-3 tb:grid-cols-2 grid-cols-1 gap-y-10 center w-full justify-items-center mb-10"
    >
      <li
        class="w-96 h-56 block bg-white border border-black bg-cover bg-no-repeat"
        v-for="repo in repos.slice(start, end)"
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
    <pagination
      :records="repos.length"
      v-model="page"
      :per-page="4"
      @paginate="onPaginate"
    >
    </pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Pagination from 'vue-pagination-2'
export default {
  data() {
    return {
      showLess: true,
      page: 1,
      start: 0,
      end: 4,
    }
  },

  computed: {
    ...mapState({
      repos: (state) => state.repositories,
    }),
  },
  methods: {
    onPaginate(e) {
      this.start = e * 4 - 4
      this.end = e * 4
    },
  },
  components: {
    Pagination,
  },
}
</script>
<style>
.VuePagination nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
}
.VuePagination nav p {
  display: none;
}
.VuePagination > nav > ul > li {
  display: inline-block;
  margin: 0 5px;
}
.VuePagination > nav > ul > li > a {
  cursor: pointer;
}
.VuePagination > nav > ul > li > a[disabled] {
  display:none;
}
</style>
