#!/usr/bin/env node

const { execSync } = require('child_process')

function runCommand(command) {
    try {
        execSync(`${command}`, {stdio: 'inherit'})
    } catch (error) {
        console.error(`Failed to execute ${command}`, error);
        return false;
    }
    return true;
}

const dirName = process.argv[2];
const gitCloneCmd = `git clone --depth 1 https://github.com/jeff-pal/node-typescript-app.git ${dirName}`;
const installDependenciesCmd = `cd ${dirName} && npm install`;

const commands = [gitCloneCmd, installDependenciesCmd]

commands.forEach(command => {
    const commandSucceed = runCommand(command)
    if(!commandSucceed) {
        process.exit(-1)
    }
})

console.log('Successfully done!');

