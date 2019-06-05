const profileTpl = require('../views/profile.html')
export default {
  render() {
    $('main').html(profileTpl)
  }
}