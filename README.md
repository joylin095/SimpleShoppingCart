這是一個簡單的購物網站(尚未完成，像是購物車的頁面)

目前首頁可以點選 5 大類別，也有各類別跟全商品頁面，並且可以加入購物車(需做登入)，也有登入及註冊功能

使用 next.js、postgreSQL，以及 tailwind 做簡易排版

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 問題

一開始想說非常簡陋就也沒丟 git，沒想到東西越加越多，不過最後也還是沒紀錄。

週末身體不舒服就沒有繼續了，但之後來看就發現頁面跳轉似乎出現問題，會一直轉圈圈，看開發者模式那邊好像 API 沒有 Response，但不是一直沒有，可能重整或關掉 server 再從開就有了，但很確定週末前的各種測試都可以(當然是手動的)
