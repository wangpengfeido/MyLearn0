const path = require("path");
const Koa = require("koa");
const koaMount = require("koa-mount");
const koaStatic = require("koa-static");
const koaRouter = require("koa-router");
const koaCompress = require("koa-compress");

const app = new Koa();

// static
app.use(koaStatic(path.resolve(__dirname, "./public")));

// api
const router = new koaRouter();
router.get(
  "/api/use-gzip",
  koaCompress({
    gzip: {
      flush: require("zlib").constants.Z_SYNC_FLUSH,
    },
    threshold: 0,
    deflate: false,
    br: false,
  }),
  async (ctx) => {
    ctx.response.body = "use gzip";
  }
);
router.get("/api/only-gzip-heading", async (ctx) => {
  ctx.set("Content-Encoding", "gzip");
  ctx.response.body = "only gzip heading";
});
app.use(router.routes());

// start
const port = 13001;
app.listen(port);
console.log(`listening  ${port}`);
