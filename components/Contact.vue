<template>
  <div
    class="
      relative
      flex flex-col
      items-center
      justify-center
      p-5
      h-screen
      w-screen
    "
  >
    <EmailModal v-if="showModal" @close="closeModel" />
    <div class=" h-2/3 w-2/3 flex items-end ">
    <div class=" w-full h-1/2 flex-1 flex flex-col items-center justify-between ">
        <button class="home-btn  " @click="openModal">
        MAIL ME
      </button>
      <div class="text-center">
        <p class="font-normal text-l">pi.emree@gmail.com</p>
        <p class="font-normal text-l">+90 543 966 5169</p>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import EmailModal from '../components/EmailModal.vue'
export default {
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    closeModel(val) {
      this.showModal = val
    },
  },
  components: {
    EmailModal,
  },
}
</script>
