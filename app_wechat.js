const Koa=require('koa');
const Router=require('koa-router');
const router=new Router();

const app= new Koa();
router.get('/index',(ctx)=>{
    ctx.body='hello world';
})

app.use(router.routes());
app.listen(3000,()=>{
    console.log('启动成功')
})