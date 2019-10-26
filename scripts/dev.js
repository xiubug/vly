const spawn = require('cross-spawn')

let target = process.argv[2]
const alias = {
  docs: 'vlyjs.com',
  kitchen: '@vly/kitchen',
}
target = alias[target] || target

if (!target) {
  spawn('yarn', ['lerna', 'run', 'dev', '--scope', 'vly', '--stream'], { stdio: 'inherit' })
} else {
  spawn('yarn', ['lerna', 'run', 'dev', '--scope', target, '--stream'], { stdio: 'inherit' })
}
