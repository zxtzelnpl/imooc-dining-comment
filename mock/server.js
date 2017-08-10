const Koa = require('koa');
const Router  = require('koa-router');

const app = new Koa();
const router = new Router()

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// 首页 —— 广告（超值特惠）
const homeAdData = require('./home/ad.js')
router.get('/api/homead',function(ctx,next){
  ctx.body = homeAdData
})

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function(ctx,next) {
  // 参数
  const params = ctx.params
  const paramsCity = params.city
  const paramsPage = params.page

  console.log('当前城市：' + paramsCity)
  console.log('当前页数：' + paramsPage)

  ctx.body = homeListData
});

// 开始服务并生成路由
app.use(router.routes())
   .use(router.allowedMethods())
app
  .listen(3000)