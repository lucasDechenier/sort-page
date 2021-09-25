import Api from '../Api'

export default {
  base: 'sortear-live',
  list(){
    return Api.get(`${this.base}`).then(resp => resp.data)
  }
}