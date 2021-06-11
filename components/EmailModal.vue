<template>
  <div
    @click.self="$emit('close', false)"
    class="
      absolute
      inset-0
      bg-white
      flex
      items-center
      justify-center
      z-50
      tb:z-10
      px-3
    "
  >
    <div
      style="min-height: 385px"
      class="
        w-full
        tb:w-2/3
        h-2/3
        border-solid border border-black
        relative
        flex
        items-center
        justify-center
      "
    >
      <button
        @click="$emit('close', false)"
        class="absolute top-3 right-3 focus:outline-none"
      >
        X
      </button>
      <form
        @submit.prevent="send"
        class="flex flex-col w-full items-center justify-center px-10"
      >
        <input
          required
          v-model="fullname"
          class="input"
          placeholder="Full Name"
          type="text"
        />
        <input
          required
          v-model="sender"
          class="input"
          placeholder="Email"
          type="email"
        />
        <input
          required
          v-model="subject"
          class="input"
          placeholder="Subject"
          type="text"
        />
        <textarea
          required
          v-model="message"
          class="input resize-none"
          rows="5"
          placeholder="Message"
        ></textarea>
        <button
          class="
            home-btn
            mt-3
            flex
            justify-center
            items-center
          "
          type="submit"
        >
          <span v-show="btnText"> SEND</span>
          <i v-show="circle" class="fas fa-circle-notch animate-spin"></i>
          <i v-show="mailOk" class="fas fa-check"></i>
          <i v-show="mailErr" class="fas fa-times"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: '',
      sender: '',
      subject: '',
      message: '',
      btnText: true,
      circle: false,
      mailOk: false,
      mailErr: false,
    }
  },
  methods: {
    send() {
      this.btnText = false
      this.circle = true
      this.$axios
        .post('/mail-me', {
          fullname: this.fullname,
          sender: this.sender,
          subject: this.subject,
          message: this.message,
        })
        .then((res) => {
          this.circle = false
          this.mailOk = true
          setTimeout(() => this.$emit('close', false), 1000)
        })
        .catch((err) => {
          this.circle = false
          this.mailErr = true
           setTimeout(() => this.$emit('close', false), 1000)
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>
.input {
  @apply border-solid border-b  outline-none border-black px-3 py-1 my-2 w-full;
}
</style>
