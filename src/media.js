const cp = require('child_process')

function upload(path) {
    const cmd = `xcrun simctl addmedia booted ${path}`
    cp.execSync(cmd)
}

module.exports = function (argvs) {
    const type = argvs.shift() || ''

    switch (type) {
        case 'upload':
            return upload(argvs.shift())
        default:
            throw Error(`命令不存在： xsim media ${type}`)
    }

}