# Copyright © 2020 Amin NAIRI
# Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
# The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
# THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

.PHONY: deploy start install test

DOCKER_COMPOSE_RUN_OPTIONS=--rm

ifeq (${CI},true)
	DOCKER_COMPOSE_RUN_OPTIONS=--rm --user root -T
endif

install:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn install

test:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn test

start:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) yarn start

deploy:
	docker-compose run $(DOCKER_COMPOSE_RUN_OPTIONS) heroku sh -c 'docker build --build-arg DISCORD_BOT_TOKEN=$$DISCORD_BOT_TOKEN -t discord-bot-paul . && heroku container:login && heroku container:push --app discord-bot-paul discord-bot-paul && heroku container:release --app discord-bot-paul discord-bot-paul && heroku ps:scale --app discord-bot-paul discord-bot-paul=1'
