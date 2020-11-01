# Adding bot to the server
[Link](https://discord.com/oauth2/authorize?client_id=772241102417559602&scope=bot&permissions=268590081) to add bot to your server

To generate a different invite link with different permisions you can  
use [this site](https://discordapi.com/permissions.html) or view the official Discord.Js docs [here](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links).

# Auth key
If you want to use this bot in a different application, then you need
to change the auth key which is currently in the gitignore for this app.

The auth key goes in the `auth.json` filein the repo's root directory. 

An example json file looks like this:

```json
{
    "token" : "<your-token-here>"
}

```