const { createApp } = Vue

import showTime from "./cmps/show-time.cmp.js"

const options = {
  template: `
    <show-time />
  `,
  data() {
    return {}
  },
}
const app = createApp(options)
app.component("showTime", showTime)
app.mount("#app")
