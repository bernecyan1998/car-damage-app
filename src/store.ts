import { createStore, createEffect } from 'effector/compat'
import axios from 'axios'

const fetchActivePositionsFx = createEffect(async () => {
  const response = await fetch('https://myfailemtions.npkn.net/b944ff/')
  const data = await response.json()
  return data
})

const sendActivePositionsFx = createEffect(async (positions: string[]) => {
  const response = await axios.post(
    'https://myfailemtions.npkn.net/b944ff/',
    positions
  )
  return response.data
})

const damagePositionsStore = createStore({
  data: [],
  loading: false,
  error: '',
})

damagePositionsStore
  .on(fetchActivePositionsFx, (state) => ({
    ...state,
    loading: true,
    error: '',
  }))
  .on(fetchActivePositionsFx.done, (state, { result }) => ({
    ...state,
    loading: false,
    data: result,
  }))
  .on(fetchActivePositionsFx.fail, (state, { error }) => ({
    ...state,
    loading: false,
    error: error.toString(),
  }))
  .on(sendActivePositionsFx, (state) => ({
    ...state,
    loading: true,
    error: '',
  }))
  .on(sendActivePositionsFx.done, (state, { result }) => ({
    ...state,
    loading: false,
    data: result,
  }))
  .on(sendActivePositionsFx.fail, (state, { error }) => ({
    ...state,
    loading: false,
    error: error.toString(),
  }))

export { fetchActivePositionsFx, sendActivePositionsFx, damagePositionsStore }
