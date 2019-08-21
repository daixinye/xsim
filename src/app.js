const path = require("path")
const cp = require("child_process")

function getbi(pathToApp) {
    const p = path.resolve(pathToApp, 'Info.plist')
    const cmd = `defaults read "${p}" "CFBundleIdentifier"`
    const bundleIdentifier = cp.execSync(cmd).toString()
    return bundleIdentifier
}

// @param: string 模拟器包所在 path 或 App Bundle Identifier
function terminate(param) {
    const bundleIdentifierPattern = /^([a-zA-Z0-9]+\.)+([a-zA-Z0-9]+)$/
    const isbundleIdentifier = bundleIdentifierPattern.test(param)

    const bi = isbundleIdentifier ? param : getbi(param)
    const cmd = `xcrun simctl terminate booted ${bi}`
    cp.execSync(cmd)
}
// @param: string 模拟器包所在 path 或 App Bundle Identifier
function launch(param) {
    const bundleIdentifierPattern = /^([a-zA-Z0-9]+\.)+([a-zA-Z0-9]+)$/
    const isbundleIdentifier = bundleIdentifierPattern.test(param)

    const bi = isbundleIdentifier ? param : getbi(param)
    const cmd = `xcrun simctl launch booted ${bi}`
    cp.execSync(cmd)
}

module.exports = function (argvs) {
    const type = argvs.shift()
    switch (type) {
        case 'getbi':
            const bi = getbi(argvs.shift())
            return console.info(bi)
        case 'terminate':
            return terminate(argvs.shift())
        case 'launch':
            return launch(argvs.shift())
        default:
            throw Error(`命令不存在：xsim app ${type}`)
    }

}