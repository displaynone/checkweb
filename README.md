# Check Web

This script checks if a website is online and, in that case, sends a Telegram message.

## Environment Variables

- Create a `.env` file with the following content:
```
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
WEBSITE=your_website_url
```


- `TELEGRAM_BOT_TOKEN`: Your Telegram bot's access token. You can create a bot by talking to [@BotFather](https://t.me/botfather) on Telegram.
- `TELEGRAM_CHAT_ID`: The chat ID where you want to receive messages. To get this ID:
  - Send a message from your user to the bot.
  - Open the `https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/getUpdates` page.
  - Find your message and navigate to the `result->message->chat->id` key.
- `WEBSITE`: The URL of the website you want to check.

## Installation

To install dependencies, run:

```bash
bun install
```

## Usage

To run the script, execute:

```
bun run index.ts
```

#### Additional Information

This project was created using bun init in bun v1.0.0. [Bun](https://bun.sh/) is a fast all-in-one JavaScript runtime.
