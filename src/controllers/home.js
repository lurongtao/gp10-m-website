const homeTpl = require('../views/home.html')
export default {
  render() {
    $('#index').html(homeTpl)
  }
}