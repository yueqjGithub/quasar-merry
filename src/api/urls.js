import { dealKey } from 'src/api/dealWith'

const baseUrl = 'https://toyapi.shihuai.tech/v1'
// const baseUrl = ''
const imgHost = process.env.IMG_HOST

const urls = {
  baseUrl,
  imgHost,
  queryIndex: '/api/public/formwork',
  commitMessage: '/api/message/commit',
  queryMessageList: '/api/message/list',
  queryFastMessage: '/api/message/config'
}
dealKey(urls)

export default urls
