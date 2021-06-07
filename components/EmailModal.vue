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
        <input class="input " placeholder="email" type="email" />
        <input class="input " placeholder="subject" type="text" />
        <textarea class="input resize-none" rows="5"  placeholder="message"></textarea>
        <button class="home-btn mt-3 focus:outline-none" @click="send">
          SEND
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
   
  methods: {
    send() {
      this.$axios
        .post('http://localhost:3000/api/mail-me', {
          sender: 'pi.emree@gmail.com',
          subject: 'hello abey merhaba',
          message: "helle it's test message",
        })
        .catch((err) => {
          console.log(err)
        })
    },
    closeModel(){

    }
  },
}
</script>

<style scoped>
.input {
  @apply border-solid border-b  outline-none border-black px-3 py-1 my-2 w-full
}
</style>
