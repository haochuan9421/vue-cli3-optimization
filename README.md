# vue-cli3-optimization

> 基于 `vue-cli@3` 做的关于 `CDN` + `Gzip` + `Prerender` + `Sass` 的优化。在基于 `vue-cli@2` 的项目 [vue-optimization](https://github.com/HaoChuan9421/vue-optimization) 里已经对这些优化方案做了详细说明。你也可以阅读我的这篇[博客](https://juejin.im/post/5b97b84ee51d450e6c7492f6)。这个仓库旨在展示最终的优化结果，细节可以通过查看 `git` 历史了解，相应的地方也有详细注释。

### 创建时的预设，详情参见`.vuerc`

```json
{
  "packageManager": "npm",
  "useTaobaoRegistry": false,
  "presets": {
    "vue-optimization": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-eslint": {
          "config": "standard",
          "lintOn": [
            "save"
          ]
        }
      },
      "router": true,
      "routerHistoryMode": true,
      "vuex": true,
      "cssPreprocessor": "sass"
    }
  }
}
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
