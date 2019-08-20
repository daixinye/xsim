const child_process = require('child_process')

const commands = {
    open: require('./src/open'),
    upload: require('./src/upload')
}

function exec(command){
    console.log(`执行命令：${command}`)
    child_process.execSync(command)
}

module.exports = function (argvs) {
    const command = argvs.shift()
    try {
        if(command in commands){
            exec(commands[command](argvs))
        }else{
            throw Error('没有此子命令')
        }
    }catch(e){
        console.log(`error: ${e.message}`)
    }
    
}