const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

exports.sendMessage = (message, channelId) => {
  bot.sendMessage(channelId, message);
};