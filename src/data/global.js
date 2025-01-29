export const siteName = 'Undead Orion'
export const siteSub = "Blogging like it's 2002"
export const siteDesc = 'Art, tech, and all things internet'

export function formatTime(timestamp) {
    if (!timestamp) return
    let getHour = timestamp.getHours()
    let getMinutes = timestamp.getMinutes()

    return {
        hour: getHour > 12 ? getHour - 12 : getHour === 0 ? 12 : getHour,
        minute: getMinutes < 10 ? '0' + getMinutes : getMinutes,
        seconds: timestamp.getSeconds(),
        AMPM: getHour > 11 ? 'P.M.' : 'A.M.',
    }
}

export function parseData(data) {
    let newData = <div dangerouslySetInnerHTML={{ __html: data }}></div>
    return newData
}

export function getDateData(timestamp) {
    if (!timestamp) return
    let d = new Date(timestamp)
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    var months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]
    let getHours = d.getHours()
    let getMinutes = d.getMinutes()
    let hours = getHours > 12 ? getHours - 12 : getHours === 0 ? 12 : getHours
    let minutes = getMinutes < 10 ? '0' + getMinutes : getMinutes
    let amPm = getHours < 12 ? 'AM' : 'PM'
    let time = `${hours}:${minutes} ${amPm}`
    let fullDate =
        days[d.getDay()] +
        ' ' +
        months[d.getMonth()] +
        ' ' +
        d.getDate() +
        ', ' +
        d.getFullYear()
    let fullTime = `${hours}:${minutes} ${amPm}`
    let dateData = {
        hours,
        minutes,
        amPm,
        time,
        fullDate,
        fullTime,
        full: `${fullDate} ${fullTime}`,
    }
    return dateData
}
