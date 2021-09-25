import Api from '../Api'

export default {
  base: 'ganhadores',
  list(){
    return Api.get(`${this.base}`).then(resp => resp.data)
  }
}