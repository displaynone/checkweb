import TelegramBot from "node-telegram-bot-api";

const url = process.env.WEBSITE || "";
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN || "";
const telegramChatId = process.env.TELEGRAM_CHAT_ID || "";

async function checkWebsite() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`La página no está accesible: ${response.statusText}`);
    }
  } catch (error: any) {
    await sendTelegramMessage('La página no está accesible');
  }
}

async function sendTelegramMessage(message: string) {
  try {
    const bot = new TelegramBot(telegramBotToken, { polling: true });
    const data = bot.sendMessage(telegramChatId, `${url}\n\n${message}`);
    setTimeout(() => process.exit(), 5000);
  } catch (error) {
    console.error("Error al enviar mensaje:", error);
  }
}

checkWebsite();
