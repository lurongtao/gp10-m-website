const detailsTpl = require('../views/details.html')
const queryString = require('query-string');

export default {
  render() {
    let query = queryString.parse(location.hash.split('?')[1])
    let renderedDetailTpl = template.render(detailsTpl, {id: query.id})
    $('#index').html(renderedDetailTpl)
  }
}