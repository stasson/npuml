#! /usr/bin/env node

const { spawn } = require('child_process')
const { resolve } = require('path')

const args = process.argv.slice(2)
const jar = resolve(__dirname, '../vendor/plantuml.jar')

spawn('java', ['-jar', jar, ...args], { stdio: 'inherit' })
