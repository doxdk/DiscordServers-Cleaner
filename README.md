
# Discord Server Cleaner (Self-Bot) 🚀

A simple self-bot built with `discord.js-selfbot-v13` that helps users clean up their Discord servers by leaving them automatically. The bot will prompt the user to decide whether to leave each server one by one. This can be used to quickly remove yourself from multiple servers without manually going through each one.

## Features ✨

- Connects to Discord using your user token 🔑.
- Lists all the servers you are a member of 🏠.
- Asks if you want to leave each server with a simple `y/n` prompt ✅❌.
- Leaves the server if you type `y` 🏃‍♂️.
- Automatically processes all servers without needing to see a list in advance ⚡.

## Requirements 📜

Before you start, make sure you have:

- **Node.js** installed (version 14 or higher recommended) ⚙️.
- A valid **Discord user token**. You can get this by using the Discord Developer Tools, but remember, using user tokens is against Discord's Terms of Service. Use at your own risk ⚠️.

## Installation ⚙️

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/doxdk/DiscordServers-Cleaner.git
   cd DiscordServers-Cleaner
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage 🚀

1. After installing the dependencies, run the script:

   ```bash
   node cleaner.js
   ```

2. When prompted, input your Discord token:

   ```plaintext
   Input your Discord Token: [your-token-here]
   ```

3. The bot will connect to Discord and start asking if you want to leave each server you're a member of. For each server, type `y` to leave it or `n` to skip:

   ```plaintext
   Do you want to leave [Server Name]? (y/n):
   ```

4. Once the process is finished, the bot will print:

   ```plaintext
   Process completed.
   ```

## Warning ⚠️

- This script uses a **Discord user token**. Using user tokens is against Discord's [Terms of Service](https://discord.com/terms), and can result in your account being **banned** or **terminated**.
- This script is provided for educational purposes only. Use it at your own risk 🛑.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

💖 **Support**: If you find this tool useful, feel free to give it a ⭐ or contribute to the project!  
📬 **GitHub**: [github.com/doxdk/DiscordServers-Cleaner](https://github.com/doxdk/DiscordServers-Cleaner)
