import request from '@/utils/request'

// project

export function list(data) {
  return request({
    url: '/v1/cs/tenant/query/page',
    method: 'post',
    data
  })
}

export function updated(data) {
  return request({
    url: '/v1/cs/tenant/update',
    method: 'post',
    data
  })
}

export function created(data) {
  return request({
    url: '/v1/cs/tenant/save',
    method: 'post',
    data
  })
}

export function deleted(data) {
  return request({
    url: '/v1/cs/tenant/delete/' + data,
    method: 'delete'
  })
}

