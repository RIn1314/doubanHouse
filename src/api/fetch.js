const axios = require('axios');
export const getHousData = async (arg = {}) => {
  // 从数据库中获取已经爬取到的数据
  let respones = await axios.get('/api/doubanList', {
    params: arg
  })
  return respones.data
}
export const spiderData = async (arg = {}) => {
  // 向爬取数据
  let respones = await axios.get('/api/getDataFromDouBan', {
    params: arg
  })
  return respones.data
}
 
export const updateIps = async (arg = {}) => {
  // 更新ip池
  let respones = await axios.get('/api/updateIps/', {
    params: arg
  })
  return respones.data
}
 
export const getIps = async (arg = {}) => {
  // 获取ip池
  let respones = await axios.post('/api/getIps/', {
    params: arg
  })
  return respones.data
}
export const searchRecord = async (arg = {}) => {
  // 搜索
  let respones = await axios.get('/api/searchRecord/', {
    params: arg
  })
  return respones.data
}
export const deleteRecord = async (arg = {}) => {
  let respones = await axios.get('/api/deleteRecord/', {
    params: arg
  })
  return respones.data
}
 