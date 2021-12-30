
 
export default {
  methods: {
    gotoPath(path) {
      this.$router.push(path)
    },
    // $date(ts, tpl = 'Y-M-D H:m:s') {
    //   if (!ts) return ''
    //   if (typeof ts === 'string') {
    //     ts = parseInt(ts)
    //   }
    //   if (ts.toString().length === 10) {
    //     ts = ts * 1000
    //   }
    //   const date = new Date(ts)
    //   const dateObj = {
    //     Y: date.getFullYear(),
    //     M: this.leftpad(date.getMonth() + 1),
    //     D: this.leftpad(date.getDate()),
    //     H: this.leftpad(date.getHours()),
    //     m: this.leftpad(date.getMinutes()),
    //     s: this.leftpad(date.getSeconds())
    //   }
    //   for (var key in dateObj) {
    //     tpl = tpl.replace(key, dateObj[key])
    //   }
    //   return tpl
    // },
    $date(ts, tpl = 'MMM D,YYYY') {
      if (!ts) return ''
      if (!ts) return ''
      if (typeof ts === 'string') {
        ts = parseInt(ts)
      }
      if (ts.toString().length === 10) {
        ts = ts * 1000
      }
      let moment = require('moment') 
      return moment(ts).format(tpl)
    },
    leftpad(num) {
      return num < 10 ? '0' + num : '' + num
    },
  }
}