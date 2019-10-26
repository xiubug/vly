module.exports = {
  apps: [
    {
      name: 'vly-dev',
      script: 'yarn.js',
      cwd: './packages/vly/',
      args: 'dev',
    },
    {
      name: 'vly-build',
      script: 'yarn.js',
      cwd: './packages/vly/',
      args: 'watch',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'vly-docs',
      script: 'yarn.js',
      cwd: './packages/docs/',
      args: 'dev',
    },
    {
      name: 'vly-kitchen',
      script: 'yarn.js',
      cwd: './packages/kitchen/',
      args: 'dev',
    },
  ],
}
