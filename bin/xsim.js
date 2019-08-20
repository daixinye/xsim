#!/usr/bin/env node
const process = require('process')
const xsim = require('../index')

const argvs = process.argv.slice(2)

xsim(argvs)