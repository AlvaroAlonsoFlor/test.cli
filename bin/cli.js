#!/usr/bin/env node

const { Command } = require("commander");
const greet = require("../src/commands/greet");
const retrieveTime = require("../src/commands/time");

const program = new Command()

program
    .addCommand(greet())
    .addCommand(retrieveTime())

program.parse(process.argv)