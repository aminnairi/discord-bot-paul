/*!
 * Copyright © 2020 Amin NAIRI
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

"use strict";

module.exports.getQuestion = function getQuestion(string) {
    const parts = string.split(" ");
    const length = parts.length;

    let isQuestion = false;
    let question = "";

    for (let index = 0; index < length; index++) {
        if (parts[index] === "--question") {
            isQuestion = true;
            continue;
        }

        if (parts[index] === "--answer") {
            isQuestion = false;
            continue;
        }

        if (isQuestion) {
            if (question.length !== 0) {
                question += " ";
            }

            question += parts[index];
        }
    }

    return question;
};

module.exports.getAnswers = function getAnswers(string) {
    const parts = string.split(" ");
    const length = parts.length;
    const answers = [];

    let isAnswer = false;

    for (let index = 0; index < length; index++) {
        if (parts[index] === "--answer") {
            answers.push("");
            isAnswer = true;
            continue;
        }

        if (parts[index] === "--question") {
            isAnswer = false;
            continue;
        }

        if (isAnswer) {
            if (answers[answers.length - 1].length !== "") {
                answers[answers.length - 1] += " ";
            }

            answers[answers.length - 1] += parts[index];
        }
    }

    return answers;
};
