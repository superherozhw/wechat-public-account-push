/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '汤圆早上好呀',
    desc: `
      **{{date.DATA}}**

      **在忙也不要忘记多喝水呦~**

      华威来信，爱你爱你~

      课表待补充！！！开学后汤圆会拥有一份专属的每日推送专属课表()
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      预防感冒提醒：{{ganmao.DATA}} 
      
      温馨提示：{{notice.DATA}} 

      
      
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
