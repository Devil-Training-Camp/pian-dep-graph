#!/usr/bin/env node
//  告诉操作系统用node解释器去执行这个文件，而不是显式地调用 node 命令

require('sucrase/register/ts')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { main } = require('../src/index')

main()
