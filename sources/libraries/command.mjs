/*!
 * Copyright © 2020 Amin NAIRI
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Checks if a string is a help command.
 *
 * @param {string} text
 *
 * @throws {Error} When the function gets called without exactly one parameter.
 * @throws {TypeError} When the function gets called without a string for the first parameter.
 *
 * @return {boolean}
 *
 * @example
 * isHelpCommand("paul --help");    // true
 * isHelpCommand("paul --version"); // false
 */
export function isHelpCommand(text) {
    if (arguments.length !== 1) {
        throw new Error("Expected exactly one argument.");
    }

    if (typeof text !== "string") {
        throw new TypeError("Expected first argument to be a string.");
    }

    return text.toLowerCase().trim() === "paul --help";
}

/**
 * Checks if a string is a version command.
 *
 * @param {string} text
 *
 * @throws {Error} When the function gets called without exactly one parameter.
 * @throws {TypeError} When the function gets called without a string for the first parameter.
 *
 * @return {boolean}
 *
 * @example
 * isVersionCommand("paul --version");  // true
 * isVersionCommand("paul --help");     // false
 */
export function isVersionCommand(text) {
    if (arguments.length !== 1) {
        throw new Error("Expected exactly one argument.");
    }

    if (typeof text !== "string") {
        throw new TypeError("Expected first argument to be a string.");
    }

    return text.toLowerCase().trim() === "paul --version";
}

/**
 * Checks if a string is a poll command.
 *
 * @param {string} text
 *
 * @throws {Error} When the function gets called without exactly one parameter.
 * @throws {TypeError} When the function gets called without a string for the first parameter.
 *
 * @return {boolean}
 *
 * @example
 * isPollCommand("paul --question Are you happy?");                             // false
 * isPollCommand("paul --answer Yes --answer No");                              // false
 * isPollCommand("paul --question Are you happy? --answer Yes --answer No");    // false
 */
export function isPollCommand(text) {
    if (arguments.length !== 1) {
        throw new Error("Expected exactly one argument.");
    }

    if (typeof text !== "string") {
        throw new TypeError("Expected first argument to be a string.");
    }

    /** @const {stringl} command */
    const command = text.toLowerCase().trim();

    return command.startsWith("paul")
        && command.includes("--question")
        && command.includes("--answer");
}
