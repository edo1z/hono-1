# hono-1

## D1 の DB 作成

```shell
npx wrangler d1 create hoge-db
```

## Migration

- drizzle で migration ファイルを出力して、D1 のコマンドで反映する。
- 下記の wrangler コマンドは、node 19 だとエラーでて、18 だと出来た。

```shell
npx drizzle-kit generate:sqlite --schema=src/models/schema.ts --out=migrations
wrangler d1 migrations apply hoge-db --local
```
