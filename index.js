const commands = {
    app: require('./src/app'),
    open: require('./src/open'),
    media: require('./src/media')
}

const alias = {
    a: commands.app,
    o: commands.open,
    m: commands.media
}

module.exports = function (argvs) {
    const command = argvs.shift()

    try {
        if (command in commands) {
            commands[command].call(null, argvs)
        } else if (command in alias) {
            alias[command].call(null, argvs)
        } else {
            throw Error(`命令不存在： xsim ${command}`)
        }
    } catch (e) {
        console.log(e)
    }

}