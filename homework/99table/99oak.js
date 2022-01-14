import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { table99 } from "./99table.js";


const app = new Application();
const router = new Router();
router.get("/", (context) => {
    context.response.body =`
    <html>
      <head>
        <link rel="stylesheet" href="99table.css">
      </head>
      <body>
      <h1>99 multiplication table web output</h1>
      ${table99()}
  </body>
    </html>`;
  })
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (ctx) => {
  console.log('path=', ctx.request.url.pathname) 
  await send(ctx, ctx.request.url.pathname, { 
    root: Deno.cwd()+"/css/",
    index: "99table.css",
  });

});
console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
