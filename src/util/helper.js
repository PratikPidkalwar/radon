const print = function() {
    let date = new Date()
    let week = new Date(date.getFullYear())
    let prntDate = date.getDate()
    let prntMonth = date.getMonth()
    console.log('Radon:week' + week + 'date' + prntDate + 'month' + prntMonth + ' the topic being taught today is')
}
module.exports.print = print