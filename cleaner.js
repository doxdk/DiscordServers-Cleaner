const { Client } = require('discord.js-selfbot-v13');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input your Discord Token: ', async (token) => {
  const client = new Client();

  client.on('ready', async () => {
    console.log(`Connected as ${client.user.tag}`);

    const guilds = client.guilds.cache.map(guild => guild.name);

    let i = 0;
    function askNextGuild() {
      if (i < guilds.length) {
        rl.question(`Do you want to leave ${guilds[i]}? (y/n): `, async (answer) => {
          if (answer.toLowerCase() === 'y') {
            try {
              const guildId = client.guilds.cache.find(guild => guild.name === guilds[i]).id;
              const guild = await client.guilds.fetch(guildId);
              await guild.leave();
              console.log(`You left ${guilds[i]}`);
            } catch (error) {
              console.error(`Failed to leave ${guilds[i]}:`, error);
            }
          }

          i++;
          askNextGuild();
        });
      } else {
        console.log('Process completed.');
        rl.close();
      }
    }

    askNextGuild();
  });

  client.login(token).catch(err => {
    console.error('Error logging in:', err);
    rl.close();
  });
});
