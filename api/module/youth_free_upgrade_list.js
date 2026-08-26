// 查询「免费包」广告升级 VIP 是否可领取（抓包接口 /youth/v1/free_package/upgrade_ad_list） 需要登录
module.exports = (params, useAxios) => {
  const token = params?.cookie?.token || ''

  return useAxios({
    url: '/youth/v1/free_package/upgrade_ad_list',
    encryptType: 'web',
    method: 'get',
    params: {
      clienttoken: token,
      srcappid: 2919,
      clienttime: Date.now(),
    },
    cookie: params?.cookie,
  });
};