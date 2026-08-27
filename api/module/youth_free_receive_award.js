// 「一键激活使用」领取当天VIP（抓包接口 /youth/v1/free_package/receive_vip_award，receive_day=当天日期，source_id=90137）需要登录
module.exports = (params, useAxios) => {
  return useAxios({
    url: '/youth/v1/free_package/receive_vip_award',
    encryptType: 'web',
    method: 'post',
    params: {
      receive_day: params?.receive_day || '',
      source_id: '90137',
      srcappid: 2919,
    },
    cookie: params?.cookie,
  });
};