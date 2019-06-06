const errorTpl = require('../views/error.html')
export default {
  render() {
    $('#index').html(errorTpl)
  }
}