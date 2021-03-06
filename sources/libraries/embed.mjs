/*!
 * Copyright © 2020 Amin NAIRI
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import Discord from "discord.js";

export function createEmbed(title, description) {
    if (arguments.length !== 2) {
        throw new Error("Expected exactly two arguments.");
    }

    if (typeof title !== "string") {
        throw new TypeError("Expected first argument to be a string.");
    }

    if (title.length === 0) {
        throw new Error("Expected first argument to be a non-empty string.");
    }

    if (typeof description !== "string") {
        throw new TypeError("Expected second argument to be a string.");
    }

    if (description.length === 0) {
        throw new Error("Expected second argument to be a non-empty string.");
    }

    return new Discord
        .MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor("#0099ff");
}
