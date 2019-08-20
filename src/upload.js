function upload(path){
    return `xcrun simctl addmedia booted ${path}`
}

module.exports = function(argvs){
    const path = argvs.shift() || ''

    return upload(path)
}