const baseUrl = 'https://qtapi.apiself.com/v1'
// const baseUrl = ''
const imgHost = process.env.IMG_HOST

export default {
  baseUrl,
  imgHost,
  queryIndex: '/api/public/formwork',
  commitMessage: '/api/message/commit',
  queryMessageList: '/api/message/list',
  queryFastMessage: '/api/message/config'
}
