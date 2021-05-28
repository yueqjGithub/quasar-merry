export function setImgList (state, payload) {
  state.imgList = [...payload]
}

export function setInfo (state, payload) {
  state.info = payload
}

export function setUrlKey (state, payload) {
  state.urlKey = payload
}

export function setMusic (state, payload) {
  state.music = payload
}

export function setMessage (state, payload) {
  state.messageList = payload
}

export function setFastList (state, payload) {
  state.fastList = payload
}
