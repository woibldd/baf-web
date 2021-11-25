
export default {
  methods: {
    gotoPath(path) {
      this.$router.push(path)
    },
    $date(ts, tpl = 'Y-M-D H:m:s') {
      if (typeof ts === 'string') {
        ts = parseInt(ts)
      }
      const date = new Date(ts)
      const dateObj = {
        Y: date.getFullYear(),
        M: this.leftpad(date.getMonth() + 1),
        D: this.leftpad(date.getDate()),
        H: this.leftpad(date.getHours()),
        m: this.leftpad(date.getMinutes()),
        s: this.leftpad(date.getSeconds())
      }
      for (var key in dateObj) {
        tpl = tpl.replace(key, dateObj[key])
      }
      return tpl
    },
    leftpad(num) {
      return num < 10 ? '0' + num : '' + num
    },
  }
}