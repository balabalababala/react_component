module.exports = {
  // antife 对应 eslint-config-antife，如果使用其他 config 插件，对应调整即可
  // prettier 对应 eslint-config-prettier，【放数组最后】
  extends: [
    'antife', // Eslint config for Ant international FE team
    'plugin:compat/recommended', // https://www.npmjs.com/package/eslint-plugin-compat
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended', // 需要放到数组最后，如果prettier规则和antife规则有冲突，使用prettier规则
  ],
  settings: {
    // 传给插件的配置
    'import/resolver': 'webpack', // 使用webpack中配置的resolve路径
    polyfills: ['Promise', 'Map', 'Object'], // 告诉plugin:compat/recommended promise和Map已经polyfill
  },
  parser: 'vue-eslint-parser', // 支持lint vue文件
  rules: {
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
