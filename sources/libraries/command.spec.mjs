/*!
 * Copyright © 2020 Amin NAIRI
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {isHelpCommand, isVersionCommand, isPollCommand} from "./command.mjs";

describe("isHelpCommand", () => {
    it("should throw if the function is called with zero arguments", () => {
        expect.assertions(1);

        expect(() => isHelpCommand()).toThrow(new Error("Expected exactly one argument."));
    });

    it("should throw if the function is called with more than one argument", () => {
        expect.assertions(1);

        expect(() => isHelpCommand("", "")).toThrow(new Error("Expected exactly one argument."));
    });

    it("should throw if the function is called without a string for the first argument", () => {
        expect.assertions(1);

        expect(() => isHelpCommand(false)).toThrow(new TypeError("Expected first argument to be a string."));
    });

    it("should return true if this is a help command", () => {
        expect.assertions(1);

        expect(isHelpCommand("paul --help")).toStrictEqual(true);
    });

    it("should return false if this is not a help command", () => {
        expect.assertions(1);

        expect(isHelpCommand("paul --version")).toStrictEqual(false);
    });
});

describe("isVersionCommand", () => {
    it("should throw if the function is called with zero arguments", () => {
        expect.assertions(1);

        expect(() => isVersionCommand()).toThrow(new Error("Expected exactly one argument."));
    });

    it("should throw if the function is called with more than one argument", () => {
        expect.assertions(1);

        expect(() => isVersionCommand("", "")).toThrow(new Error("Expected exactly one argument."));
    });

    it("should throw if the function is called without a string for the first argument", () => {
        expect.assertions(1);

        expect(() => isVersionCommand(false)).toThrow(new TypeError("Expected first argument to be a string."));
    });

    it("should return true if this is a version command", () => {
        expect.assertions(1);

        expect(isVersionCommand("paul --version")).toStrictEqual(true);
    });

    it("should return false if this is not a version command", () => {
        expect.assertions(1);

        expect(isVersionCommand("paul --help")).toStrictEqual(false);
    });
});

describe("isPollCommand", () => {
    it("should throw if the function is called with zero arguments", () => {
        expect.assertions(1);

        expect(() => isPollCommand()).toThrow(new Error("Expected exactly one argument."));
    });

    it("should throw if the function is called with more than one argument", () => {
        expect.assertions(1);

        expect(() => isPollCommand("", "")).toThrow(new Error("Expected exactly one argument."));
    });

    it("should throw if the function is called without a string for the first argument", () => {
        expect.assertions(1);

        expect(() => isPollCommand(false)).toThrow(new TypeError("Expected first argument to be a string."));
    });

    it("should return true if this is a poll command", () => {
        expect.assertions(1);

        expect(isPollCommand("paul --question question --answer answer --answer answer")).toStrictEqual(true);
    });

    it("should return false if command is missing the answer argument", () => {
        expect.assertions(1);

        expect(isVersionCommand("paul --question question")).toStrictEqual(false);
    });

    it("should return false if command is missing the question argument", () => {
        expect.assertions(1);

        expect(isVersionCommand("paul --answer answer")).toStrictEqual(false);
    });
});
