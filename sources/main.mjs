/*!
 * Copyright © 2020 Amin NAIRI
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

"use strict";

import Discord from "discord.js";
import {getQuestion, getAnswers} from "./libraries/poll.mjs";
import {createEmbed} from "./libraries/embed.mjs";
import {isHelpCommand, isVersionCommand, isPollCommand} from "./libraries/command.mjs";

const client = new Discord.Client();

client.on("ready", () => {
    console.log("Bot is logged.");
});

client.on("message", message => {
    const {content} = message;

    if (isVersionCommand(content)) {
        return message
            .channel
            .send(createEmbed("Version", `v0.2.0\n\n[Official documentation](https://github.com/aminnairi/discord-bot-paul#readme)`));
    }

    if (isHelpCommand(content)) {
        return message
            .channel
            .send(createEmbed("Help", "[Official documentation](https://github.com/aminnairi/discord-bot-paul#readme)"));
    }

    if (!isPollCommand(content)) {
        return;
    }

    const question = getQuestion(content); 

    const emojis = [
        "🇦",
        "🇧",
        "🇨",
        "🇩",
        "🇪",
        "🇫",
        "🇬",
        "🇭",
        "🇮",
        "🇯",
        "🇰",
        "🇱",
        "🇲",
        "🇳",
        "🇴",
        "🇵",
        "🇶",
        "🇷",
        "🇸",
        "🇹",
        "🇺",
        "🇻",
        "🇼",
        "🇽",
        "🇾",
        "🇿"
    ];

    const answers = getAnswers(content);
    const answersWithEmoji = answers.slice(0, 26).map((answer, index) => `${emojis[index]} ${answer}`);
    const embed = createEmbed(question, answersWithEmoji.join("\n") + "\n\n[Official documentation](https://github.com/aminnairi/discord-bot-paul#readme)");

    message.channel.send(embed).then(messageSent => {
        answers.forEach((_, index) => {
            messageSent.react(emojis[index]);
        });
    });

    message.delete();
});

client.login(process.env.DISCORD_BOT_TOKEN || "");
