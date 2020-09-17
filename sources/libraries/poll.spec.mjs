/*!
 * Copyright © 2020 Amin NAIRI
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

"use strict";

import {getQuestion, getAnswers} from "./poll.mjs";

describe("poll", () => {
    describe("getQuestion", () => {
        it("should throw an error if passing less than one arguments", () => {
            expect.assertions(1);

            expect(() => getQuestion()).toThrow(new Error("Expected exactly one argument."));
        });

        it("shoud throw an error if not passing a string as first argument", () => {
            expect.assertions(1);

            expect(() => getQuestion(false)).toThrow(new TypeError("Expected first argument to be a string."));
        });

        it("should throw an error if passing an empty string", () => {
            expect.assertions(1);

            expect(() => getQuestion("")).toThrow(new Error("Expected first argument to be a non-empty string."));
        });

        it("should return the question", () => {
            expect.assertions(1);

            expect(getQuestion("poll --question question --answer answer")).toStrictEqual("question");
        });

        it("should return empty", () => {
            expect.assertions(1);

            expect(getQuestion("poll --answer answer")).toStrictEqual("");
        });

        it("should return the last question", () => {
            expect.assertions(1);

            expect(getQuestion("poll --question first --question second")).toStrictEqual("first second");
        });
    });

    describe("getAnswers", () => {
        it("should throw an error if passing less than one arguments", () => {
            expect.assertions(1);

            expect(() => getAnswers()).toThrow(new Error("Expected exactly one argument."));
        });

        it("shoud throw an error if not passing a string as first argument", () => {
            expect.assertions(1);

            expect(() => getAnswers(false)).toThrow(new TypeError("Expected first argument to be a string."));
        });

        it("should throw an error if passing an empty string", () => {
            expect.assertions(1);

            expect(() => getAnswers("")).toThrow(new Error("Expected first argument to be a non-empty string."));
        });

        it("should return the answer", () => {
            expect.assertions(1);

            expect(getAnswers("poll --question question --answer answer")).toStrictEqual(["answer"]);
        });

        it("should return the answers", () => {
            expect.assertions(1);

            expect(getAnswers("poll --question question --answer first --answer second")).toStrictEqual(["first", "second"]);
        });

        it("should return no answer", () => {
            expect.assertions(1);

            expect(getAnswers("poll --question question")).toStrictEqual([]);
        });
    });
});

