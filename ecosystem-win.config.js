// PM2 process file
// http://pm2.keymetrics.io/docs/usage/application-declaration/

module.exports = {
  apps: [
    {
      name: 'vly-docs',
      script: 'server.js',
      cwd: './packages/docs/',
    },
  ],
}
