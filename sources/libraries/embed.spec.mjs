/*!
 * Copyright © 2020 Amin NAIRI
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
/*!
 * Copyright © 2020 Amin NAIRI
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import Discord from "discord.js";
import {createEmbed} from "./embed.mjs";

describe("embed", () => {
    describe("createEmbed", () => {
        it("should throw an error if passing one argument", () => {
            expect.assertions(1);

            expect(() => createEmbed("title")).toThrow(new Error("Expected exactly two arguments."));
        });

        it("should throw an error if passing no arguments", () => {
            expect.assertions(1);

            expect(() => createEmbed()).toThrow(new Error("Expected exactly two arguments."));
        });

        it("should throw an error if passing more than two arguments", () => {
            expect.assertions(1);

            expect(() => createEmbed("title", "description", "body")).toThrow(new Error("Expected exactly two arguments."));
        });

        it("should throw an error if not passing a string as first argument", () => {
            expect.assertions(1);

            expect(() => createEmbed(false, "description")).toThrow(new TypeError("Expected first argument to be a string."));
        });

        it("should throw an error if passing an empty string as first argument", () => {
            expect.assertions(1);

            expect(() => createEmbed("", "description")).toThrow(new TypeError("Expected first argument to be a non-empty string."));
        });

        it("should throw an error if not passing a string as second argument", () => {
            expect.assertions(1);

            expect(() => createEmbed("title", false)).toThrow(new TypeError("Expected second argument to be a string."));
        });

        it("should throw an error if passing an empty string as second argument", () => {
            expect.assertions(1);

            expect(() => createEmbed("title", "")).toThrow(new TypeError("Expected second argument to be a non-empty string."));
        });

        it("should return the embed", () => {
            expect.assertions(1);

            expect(createEmbed("Title", "Description")).toStrictEqual(new Discord.MessageEmbed().setTitle("Title").setDescription("Description").setColor("#0099ff"));
        });
    });
});
