/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 请将以下代码按照图示粘贴到对应位置
  USE_PASSAGE: 'push-plus',

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8e4ef1091ba146a0',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e74c91bb0f29170e0d11c1398b837f64',

  PROVINCE: '湖北',
  CITY: '十堰',

  USERS: [
    {
      // 想要发送的人的名字
      name: '汤圆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'df8e6e103c19400fa3b9810942eb97ea',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      // 我们在一起已经有xxxx天了的配置

    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'faEHAOzmBbz-3C-28BLGIJygFG-9jcK5tAHIC0TPCjo',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oUYL66JU8voc5hmu696Mes1vU6rk',
    }
  ],

}

module.exports = USER_CONFIG

