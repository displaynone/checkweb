import TelegramBot from "node-telegram-bot-api";

const urls = process.env.WEBSITE || "";
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN || "";
const telegramChatId = process.env.TELEGRAM_CHAT_ID || "";

const bot = new TelegramBot(telegramBotToken, { polling: true });

async function checkWebsite() {
	for(const url of urls.split("|")) {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`La página no está accesible: ${response.statusText}`);
			}
		} catch (error: any) {
			await sendTelegramMessage(url, "La página no está accesible");
		}
	}
}

async function sendTelegramMessage(url:string, message: string) {
	try {
		const data = bot.sendMessage(telegramChatId, `${url}\n\n${message}`);
		setTimeout(() => process.exit(), 5000);
	} catch (error) {
		console.error("Error al enviar mensaje:", error);
	}
}

checkWebsite();
