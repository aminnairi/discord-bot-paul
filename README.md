# discord-bot-paul

A Discord bot to handle polls.

![Paul le bot](https://i.ibb.co/jGvnmK7/paul-le-bot.png)

## Usage

### Help

*This will bring the help for those who are unknown to the bot's commands.*

```console
paul --help
```

### Poll

*This will delete the command and send a poll as en embed message. If the `--question` or `--answer` arguments are missing, it won't output anything (in a future version, this will send a message in the chat saying that you are missing either of the requirements parameters).*

```console
paul --question What do you wanna eat --answer Indian --answer --answer Mexican --answer Chinese --answer I don't know
```

*Notes: if there are many "I don't know" answers, it's a trap! Do retreat and throw chocolate at regular interval.*

## Development

### Requirements

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU/Make](https://docs.docker.com/compose/)

### Installation

*This will install the repository locally.*

```console
$ git clone https://github.com/aminnairi/discord-bot-paul.git ~/github.com/aminnairi/discord-bot-paul
$ cd ~/github.com/aminnairi/discord/bot-paul
```

### Configuration

*This will configure the environment context.*

```console
$ cp .env.example .env
$ $EDITOR .env
```

*Notes: Where `$EDITOR` is the command for opening your text editor.*

### Start

*This will run the [`sources/main.js`](./sources/main.js) script and thus awake the Bot.*

```console
$ make start
```

### Build

This will build the Docker image defined in [`Dockerfile`](./Dockerfile).

```console
$ make build
```

### Run

*This will run the built Docker image.*

```console
$ make run
```

### Deploy

*This will build the Docker image defined in [`Dockerfile`](./Dockerfile) and push the image to a Heroku app.*

```console
$ make deploy
```
