const spawn = require('cross-spawn')

let target = process.argv[2]
const alias = {
  api: '@vly/api-generator',
  docs: 'vlyjs.com',
  kitchen: '@vly/kitchen',
  dev: 'vly',
}
target = alias[target] || target

if (!target) {
  spawn('yarn', ['lerna', 'run', 'build', '--stream'], { stdio: 'inherit' })
} else {
  spawn('yarn', ['lerna', 'run', 'build', '--scope', target, '--stream'], { stdio: 'inherit' })
}
