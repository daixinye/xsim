function open(uri) {
    return `xcrun simctl openurl booted ${uri}`
}

module.exports = function (argvs) {
    const uri = argvs.shift()

    return open(uri)
}