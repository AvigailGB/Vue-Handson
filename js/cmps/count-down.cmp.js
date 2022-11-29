export default {
  props: ["time"],
  template: `
  <section class="count-down-container">
      <h1>count down</h1>
      <section class="count-down">
          <span>{{minutes}}:</span>
          <span v-bind:class="timerStyle">{{seconds}}</span>
      </section>
  </section>
`,
  data() {
    return {
      interval: null,
      timeDiff: this.time - Date.now()
    }
  },
  created() {
    this.interval = setInterval(() => {
      this.timeDiff -= 1000
      if(this.timeDiff < 1000)
      clearInterval(this.interval)
      this.$emit('time-out')
    }, 1000)
  },
  methods: {},
  computed: {
    minutes() {
        let date = new Date(this.timeDiff)
      return ('' + date.getMinutes()).padStart(2,0)
    },
    seconds() {
        let date = new Date(this.timeDiff)
      return ('' + date.getSeconds()).padStart(2,0)
    },
    timerStyle() {
        return { low: this.timeDiff <= 10000 }
    },
    destroyed() {},
  },
}
