
import store from 'store'
import {
  showLoader,
  hideLoader
} from 'models/loading'

const invokeService = ({ serviceUrl, method = 'GET', requestData }) => {
  console.log('serviceName is ', serviceUrl)
  console.log('requestData is ', requestData)
  const body = requestData ? JSON.stringify(requestData) : {}
  store.dispatch(showLoader())
  return fetch(serviceUrl, // eslint-disable-line
    {
      method,
      headers: {
        'Accept': 'application/json'
      },
      ...body
    })
    .then(response => {
      store.dispatch(hideLoader())
      console.log('response :::: ', response)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .catch(error => {
      store.dispatch(hideLoader())
      console.log('fetch error ::: ', error)
    }
    )
}
export default invokeService
