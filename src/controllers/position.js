const positionTpl = require('../views/position.html')
const positionListTpl = require('../views/position.list.html')
const BScroll = require('better-scroll').default
import Router from '../router/'

import fetch from '../models/fetch'

let positionList = []
let currentPage = 1

const gotoPage = id => {
  let router = new Router({mode: 'hash'})
  router.push('/index/details?id=' + id)
}

const render = async() => {
  let result = await fetch.get('/api/listmore.json?pageNo=1&pageSize=15')
  let data = positionList = result.content.data.page.result

  $('main').html(positionTpl)
  
  let renderedPositionListTpl = template.render(positionListTpl, { data })
  $('#position-list').html(renderedPositionListTpl)

  // Better scroll 实例化
  let bScroll = new BScroll('#index-scroll', {
    probeType: 1,
    click: true
  })

  let head = $('.head img'),
    topImgHasClass = head.hasClass('up')
  let foot = $('.foot img'),
    bottomImgHasClass = head.hasClass('down')

  // 初始化位置
  bScroll.scrollTo(0, -40)

  // 绑定滑动事件
  bScroll.on('scroll', function () {
    let y = this.y
    let maxY = this.maxScrollY - y

    // 下拉，当隐藏的loading完全显示的时候触发
    if (y >= 0) {
      !topImgHasClass && head.addClass('up')
      return
    }

    // 上拉，当滚动到最底部时候触发
    if ( maxY >=0 ) {
      !bottomImgHasClass && foot.addClass('down')
      return
    }
  })

  // 绑定手指松开触发的事件
  bScroll.on('scrollEnd', async function() {
    // 下拉刷新处理
    if (this.y >= -40 && this.y < 0) {
      this.scrollTo(0, -40)
      head.removeClass('up')
    } else if (this.y >= 0) {
      head.attr('src', '/images/ajax-loader.gif')

      // 异步加载数据
      let result = await fetch.get(`/api/listmore.json?pageNo=2&pageSize=2`)
      let data = positionList = [...result.content.data.page.result, ...positionList]

      let renderedPositionListTpl = template.render(positionListTpl, { data })
      $('#position-list').html(renderedPositionListTpl)

      this.refresh() // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
      this.scrollTo(0, -40)
      head.removeClass('up')
      head.attr('src', '/images/arrow.png')
    }

    // 下拉加载处理
    let maxY = this.maxScrollY - this.y
    if (maxY > -40 && maxY < 0) {
        this.scrollTo(0, this.maxScrollY + 40);
        foot.removeClass('down')
    } else if (maxY >= 0) {
      foot.attr('src', '/images/ajax-loader.gif')
      // 异步加载数据
      let result = await fetch.get(`/api/listmore.json?pageNo=${++currentPage}&pageSize=15`)
      let data = positionList = [ ...positionList, ...result.content.data.page.result ]

      let renderedPositionListTpl = template.render(positionListTpl, { data })
      $('#position-list').html(renderedPositionListTpl)

      this.refresh() // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
      this.scrollTo(0, this.maxScrollY + 40)
      head.removeClass('down')
      head.attr('src', '/images/arrow.png')
    }
  })

  $('#position-list').on('click', 'li', function() {
    let id = $(this).attr('data-id')
    gotoPage(id)
  })
}

export default {
  render
}