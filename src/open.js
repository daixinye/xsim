const cp = require("child_process")

function open(uri) {
    const cmd = `xcrun simctl openurl booted ${uri}`
    cp.execSync(cmd)
}

module.exports = function (argvs) {
    const type = argvs.shift()

    switch(type){
        case 'open':
            return open(argvs.shift())
        default:
            throw Error(`命令不存在： xsim ${type}`)
    }

}