const { createApp } = Vue

import showTime from "./cmps/show-time.cmp.js"
import countDown from "./cmps/count-down.cmp.js"

const options = {
  template: `
    <show-time />
    <count-down v-bind:time="Date.now() + 1000 * 15"/>
  `,
  data() {
    return {}
  },
}
const app = createApp(options)
app.component("showTime", showTime)
app.component("countDown", countDown)
app.mount("#app")
