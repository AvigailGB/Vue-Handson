export default {
  props: ["text"],
  template: `
  <section class="show-time-container">
  <h2>Show time</h2>
      <section v-on:click="isDark = !isDark" class="show-time" v-bind:class="{dark:isDark}" >
          <img :src="imgUrl" alt="">
          <h3>{{ currTime }}</h3>
        </section>
    </section>
`,
  data() {
    return {
      time: new Date(),
      imgUrl: this.currImg(),
      isDark: false,
    }
},
created() {
    setInterval(() => {
        this.time = new Date()
    }, 1000)
},
methods: {
    currImg() {
        const month = new Date().getMonth()
      if (month > 10 && month < 2) return "/imgs/winter.png"
      if (month > 1 && month < 5) return "/imgs/spring.png"
      if (month > 4 && month < 8) return "/imgs/summer.png"
      return "/imgs/autumn.png"
    },
  },
  computed: {
    currMonth() {
      return this.time.getMonth()
    },
    currTime() {
      return this.time.toLocaleTimeString()
    },
  },
  destroyed() {},
}
