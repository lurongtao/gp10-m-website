// const indexTpl = require('../views/index.html')
// const BScroll = require('better-scroll').default

exports.loadData = () => {
  return $.ajax({
    url: '/api/listmore.json?pageNo=1&pageSize=15',
    type: 'get',
    success(result) {
      return result
    }
  })
}

exports.renderList = () => {
  // let result = await this.loadData()
  // let data = result.content.data.page.result
  // let renderedIndexTpl = template.render(indexTpl, { data })
  // $('#app').html(renderedIndexTpl)

  // // Better scroll 实例化
  // let bScroll = new BScroll('#index-scroll', {
  //   probeType: 1
  // })

  // let head = $('.head img'),
  //   topImgHasClass = head.hasClass('up')
  // let foot = $('.foot img'),
  //   bottomImgHasClass = head.hasClass('down')

  // // 初始化位置
  // bScroll.scrollTo(0, 40)

  // // 绑定滑动事件
  // bScroll.on('scroll', function () {
  //   let y = this.y
  //   let maxY = this.maxScrollY - y

  //   // 下拉，当隐藏的loading完全显示的时候触发
  //   if (y >= 0) {
  //     !topImgHasClass && head.addClass('up')
  //     return
  //   }

  //   // 上拉，当滚动到最底部时候触发
  //   if ( maxY >=0 ) {
  //     !bottomImgHasClass && foot.addClass('down')
  //     return
  //   }
  // })

  // // 绑定手指松开触发的事件
  // bScroll.on('scrollEnd', function() {
  //   // 下拉刷新处理
  //   if (this.y >= -40 && this.y < 0) {
  //     this.scrollTo(0, -40)
  //     head.removeClass('up')
  //   } else if (this.y >= 0) {
  //     head.attr('src', '/images/ajax-loader.gif')

  //     // 异步加载数据
      
  //   }

  //   // 下拉加载处理
  //   let maxY = this.maxScrollY - this.y
  //   if (maxY > -40 && maxY < 0) {
  //       this.scrollTo(0, this.maxScrollY + 40);
  //       foot.removeClass('down')
  //   } else if (maxY >= 0) {
  //       foot.attr('src', '/images/ajax-loader.gif')
  //   }
  // })
}

// module.exports = {
//   renderList,
//   loadData
// }