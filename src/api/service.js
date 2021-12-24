import request from '@/modules/request'

export function getBannerList(data) {
  return request({
    url: '/extension/index',
    method: 'get',
    params: data
  })
}

//观察1列表
export function getInsightsList(data) {
  return request({
    url: '/admin/insights/index',
    method: 'get',
    params: data
  })
}

//观察1详情
export function getInsightsDetail(data) {
  return request({
    url: '/admin/insights/detail',
    method: 'get',
    params: data
  })
}


//观察2列表
export function getInsights2List(data) {
  return request({
    url: '/admin/insights_two/index',
    method: 'get',
    params: data
  })
}

//观察2详情
export function getInsights2Detail(data) {
  return request({
    url: '/admin/insights_two/detail',
    method: 'get',
    params: data
  })
}


// 新闻列表
export function getNewsList(data) {
  return request({
    url: '/admin/news/index',
    method: 'get',
    params: data
  })
}

// 新闻详情
export function getNewsDetail(data) {
  return request({
    url: '/admin/news/detail',
    method: 'get',
    params: data
  })
}

// 新闻2列表
export function getNews2List(data) {
  return request({
    url: '/admin/news_two/index',
    method: 'get',
    params: data
  })
}

// 新闻2详情
export function getNews2Detail(data) {
  return request({
    url: '/admin/news_two/detail',
    method: 'get',
    params: data
  })
}


// 新闻列表
export function getNews3List(data) {
  return request({
    url: '/admin/news_three/index',
    method: 'get',
    params: data
  })
}

// 新闻详情
export function getNews3Detail(data) {
  return request({
    url: '/admin/news_three/detail',
    method: 'get',
    params: data 
  })
}

//发送邮件
export function setMailSend(data) {
  return request({
    url: '/mail/mailer',
    method: 'post',
    data
  })
}
