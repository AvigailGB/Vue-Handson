const { createApp } = Vue

const options = {
  data() {
    return {
      message: "Hello Vue!",
    }
  },
}
const app = createApp(options)
app.mount("#app")
