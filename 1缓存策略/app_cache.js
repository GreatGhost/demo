const Koa = require("koa");
const Router = require("koa-router");
const Path = require("path");
const fs = require("fs");
const mime = require("mime");
const app = new Koa();
const router = new Router();

router.get(/^\/index(.html)?|(^\/$)/, async (ctx, next) => {
  ctx.type = mime.getType(".html");
  const content = await fs.readFileSync(Path.resolve(__dirname, "./index.html"), "utf-8");
  ctx.body = content;
  await next();
});
router.get(/\S*\.(jpe?g|png)$/, async (ctx, next) => {
  const { path, response } = ctx;
  ctx.type = mime.getType(path);
  response.set("cache-control", "no-cache");

  response.set("expires", new Date(Date.now() + 2 * 60 * 1000).toString());
  const image = await fs.readFileSync(Path.resolve(__dirname, `.${path}`));
  ctx.body = image;
  await next();
});
router.get(/\S*\.css$/, async (ctx, next) => {
  const { path } = ctx;
  ctx.type = mime.getType(path);
  const content = await fs.readFileSync(Path.resolve(__dirname, `.${path}`));
  ctx.body = content;
  await next();
});
app.use(router.routes()).use(router.allowedMethods());

app.listen(8080, () => {
  console.log("启动成功");
});
