// 查询「免费包」VIP 领取记录（抓包接口 /youth/v1/free_package/get_vip_record_list） 需要登录
module.exports = (params, useAxios) => {
  const token = params?.cookie?.token || ''

  return useAxios({
    url: '/youth/v1/free_package/get_vip_record_list',
    encryptType: 'web',
    method: 'get',
    params: {
      clienttoken: token,
      srcappid: 2919,
      latest_limit: 100,
      clienttime: Date.now(),
    },
    cookie: params?.cookie,
  });
};