App({
  onLaunch() {
    const storage = require('./utils/storage.js');
    storage.init();

    // 头像修改统一在"编辑资料"里进行（上传本地照片 / 恢复默认）。
    // 微信已不允许静默读取头像（getUserInfo / getUserProfile 均不再返回真实头像），
    // 所以这里不再自动拉取微信头像；未设置时界面回落到当前等级的卡通形象即可。
    // 顺手清掉旧版本缓存过的远程微信头像链接，避免显示失效图片。
    try { wx.removeStorageSync('wm_wx_avatar'); } catch (e) {}
  },
  globalData: {
    reviewPlan: [3, 5, 7],
    dailyNewLimit: 10,
    dailyReviewLimit: 10,
    pendingReviewStage: null   // 首页点"复习"时传递 stage 给 review tab
  }
});
