module.exports = {
  client: {
    token: process.env.CLIENT_TOKEN,
    id: process.env.CLIENT_ID,
  },
  handler: {
    prefix: "?",
    deploy: true,
    commands: {
      prefix: true,
      slash: true,
      user: true,
      message: true,
    },
    mongodb: {
      uri: process.env.MONGODB_URI,
      toggle: false,
    },
  },
  users: {
    developers: ["178273444041981952"],
  },
  messageSettings: {
    nsfwMessage: "The current channel is not a NSFW channel.",
    developerMessage: "You are not authorized to use this command.",
    cooldownMessage: "Slow down buddy! You're too fast to use this command.",
    notHasPermissionMessage:
      "You do not have the permission to use this command.",
    missingDevIDsMessage:
      "This is a developer only command, but unable to execute due to missing user IDs in configuration file.",
  },
};
