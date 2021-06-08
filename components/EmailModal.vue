<template>
  <div @click.self="$emit('close',false)"  class="absolute inset-0 bg-white flex items-center justify-center z-10">
    <div
      class="
        w-2/3
        h-2/3
        border-solid border border-black
        relative
        flex
        items-center
        justify-center
        z-30
      "
    >
    <button @click="$emit('close',false)" class="absolute top-3 right-3 focus:outline-none">X</button>
      <form @submit.prevent="send" class="flex flex-col w-full items-center justify-center px-10">
        <input v-model="fullname" class="input " placeholder="Full Name" type="text" />
        <input v-model="sender" class="input " placeholder="Email" type="email" />
        <input v-model="subject" class="input " placeholder="Subject" type="text" />
        <textarea v-model="message" class="input resize-none" rows="5"  placeholder="Message"></textarea>
        <button class="home-btn mt-3 focus:outline-none" type="submit">
          SEND
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
   data() {
     return {
       fullname:"",
       sender:"",
       subject:"",
       message:""
     }
   },
  methods: {
    send() {
      this.$axios
        .post('/mail-me', {
          fullname:this.fullname,
          sender: this.sender,
          subject: this.subject,
          message: this.message,
        }).then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
   
  },
}
</script>

<style scoped>
.input {
  @apply border-solid border-b  outline-none border-black px-3 py-1 my-2 w-full
}
</style>
