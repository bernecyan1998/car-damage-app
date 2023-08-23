import React, { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import CarDamageVisualizer from './components/CarDamageVisualizer'
import './App.css'

import {
  fetchActivePositionsFx,
  sendActivePositionsFx,
  damagePositionsStore,
} from './store'

const App: React.FC = () => {
  const { data, loading } = useStore(damagePositionsStore)
  const [damagePointsData, setDamagePointsData] = useState<string[]>([])

  const handleSendActivePositions = async () => {
    sendActivePositionsFx(damagePointsData)
  }

  const handleUpdatePoints = (positions: string[]) => {
    setDamagePointsData(positions)
  }

  const handleComplete = (positions: string[]) => {
    console.log('Completed positions:', positions)
  }

  useEffect(() => {
    fetchActivePositionsFx()
  }, [])

  useEffect(() => {
    setDamagePointsData(data)
  }, [data])

  return (
    <div className="app">
      <h1>Car Damage App</h1>
      <CarDamageVisualizer
        damagePoints={damagePointsData}
        handleUpdatePoints={handleUpdatePoints}
        onComplete={handleComplete}
      />
      <div className="action-bar">
        <button onClick={handleSendActivePositions} disabled={loading}>
          {loading ? 'Updating positions...' : 'Confirm'}
        </button>
      </div>
    </div>
  )
}

export default App
