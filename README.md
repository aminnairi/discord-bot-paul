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
paul --question What do you wanna eat --answer Indian --answer Mexican --answer Chinese --answer I don't know
```

*Notes: if there are many "I don't know" answers, it's a trap! Do retreat and throw chocolate at regular interval.*

### Version

*This will display the current version of the bot.*

```console
paul --version
```

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

See [`LICENSE`](./LICENSE).
