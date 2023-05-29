const Koa = require("koa");
const Router = require("koa-router");
const Path = require("path");
const fs = require("fs");
const mime = require("mime");
const crypto = require("crypto");
const app = new Koa();
const router = new Router();

router.get(/^\/index(.html)?|(^\/$)/, async (ctx, next) => {
  ctx.type = mime.getType(".html");
  const content = await fs.readFileSync(Path.resolve(__dirname, "./index.html"), "utf-8");
  ctx.body = content;
  await next();
});
router.get(/\S*\.(jpe?g|png)$/, async (ctx, next) => {
  const { path, response, request } = ctx;
  ctx.type = mime.getType(path);

  //强缓存
  //   response.set("cache-control", "no-cache");

  //   response.set("expires", new Date(Date.now() + 2 * 60 * 1000).toString());

  //   const image = await fs.readFileSync(Path.resolve(__dirname, `.${path}`));
  //   ctx.body = image;

  // 协商缓存
  //   response.set("last-modified", new Date().toUTCString());
  //   console.log(Date.now());
  //   console.log(new Date(request.headers["if-modified-since"]).getTime() + 3 * 1000, new Date(request.headers["if-modified-since"]).getTime() + 3 * 1000 > Date.now());
  //   if (new Date(request.headers["if-modified-since"]).getTime() + 3 * 1000 > Date.now()) {
  //     response.status = 304;
  //   } else {
  //     const image = await fs.readFileSync(Path.resolve(__dirname, `.${path}`));
  //     ctx.body = image;
  //     ctx.body = image;
  //   }
  const image = await fs.readFileSync(Path.resolve(__dirname, `.${path}`));
  const hash = crypto.createHash("sha1").update(image).digest("hex");
  response.set("Etag", hash);
  if (request.headers["if-none-match"] === hash) {
    response.status = 304;
  } else {
    ctx.body = image;
  }
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
