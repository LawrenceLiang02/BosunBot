require('dotenv').config();

// console.log(process.env.DISCORD_JS_TOKEN);

const { Client, GatewayIntentBits, Message  } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages]
  })

  const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_JS_TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  }); 

client.on('messageCreate', async message => {
    console.log(message.content);
    if (message.content.toLowerCase() === "kartvelian"){
        message.channel.send("FUCK THAT GUY HE GAY");
    }
    else if (message.content.toLowerCase() === "boo"){
      message.channel.send("AHHHH");
  }
  else{
    console.log(message.content);
  }
    
})

client.login(process.env.DISCORD_JS_TOKEN);