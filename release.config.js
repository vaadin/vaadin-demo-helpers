module.exports = {
  debug: true,
  verifyConditions: [
    '@semantic-release/changelog',
  ],
  prepare: [
    '@semantic-release/changelog',
  ],
  publish: [
    {
      "path": "@semantic-release/exec",
      "cmd": "magi release ${nextRelease.version}",
    }
  ]
}
