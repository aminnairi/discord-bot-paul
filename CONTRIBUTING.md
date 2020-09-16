# Contributing

## Users

### Open an issue

If you want to report a bug or request a new feature, you can make this happen [here](./issues).

## Contributors & Maintainers

### Requirements

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [GNU/Make](https://docs.docker.com/compose/)

### Create a Discord application

See [Discord Developer Portal](https://discord.com/developers/applications).

### Create a Discord bot

See [Discord Developer Portal](https://discord.com/developers/applications).

### Create a Discord server

See [How do I create a server?](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-).

### Invite the Discord bot to the created server

See [Discord Developer Portal](https://discord.com/developers/applications).

### Choose an issue

See [issues](./issues).

### Fork the project

See [Fork a repo](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-).

### Install the project locally

```console
$ git clone https://github.com/$USER/discord-bot-paul.git ~/github.com/$USER/discord-bot-paul
$ cd ~/github.com/$USER/discord-bot-paul
```

*Where `$USER` is your GitHub's user name.*

### Configure the environment context

```console
$ cp .env.example .env
$ $EDITOR .env
```

*Where `$EDITOR` is the command to launch your text editor.*

### Install the dependencies

```console
$ make install
```

### Append changes

Changes the project's sources until the issue is resolved.

### Start the bot

```console
$ make start
```

### Test the bot

Issue command in a chanel to see if the bot is behaving correctly. See [here](../) for a help on all the available commands.

### Create a branch

```console
$ git checkout -b fix-for-issue
```

*Where `fix-for-issue` is a relevant branch name.*

### Commit the changes

```console
$ git commit -am "fix for issue"
```

*Where `fix for issue` is a relevant commit message.*

### Push the changes

```console
$ git push --set-upstream origin fix-for-issue
```

*Where `fix-for-issue` is the name of the branch you are working on.*

### Open a pull request

See [Creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

### Deployment

*Only for maintainers of the Heroku application.*

```console
$ make deploy
```
