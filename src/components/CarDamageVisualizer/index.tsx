import React, { memo } from 'react'
import DamagePoint from './DamagePoint'
import './styles.css'
import carImg from '../../assets/car-img.png'

interface Props {
  damagePoints: string[]
  handleUpdatePoints: (positions: string[]) => void
  onComplete: (positions: string[]) => void
}

const CarDamageVisualizer: React.FC<Props> = memo(
  ({ damagePoints, handleUpdatePoints, onComplete }) => {
    const handleDamagePointClick = (label: string) => {
      const updatedDamagePoints = damagePoints.includes(label)
        ? damagePoints.filter((point) => point !== label)
        : [...damagePoints, label]

      handleUpdatePoints(updatedDamagePoints)

      if (updatedDamagePoints.includes(label)) {
        onComplete(updatedDamagePoints)
      }
    }

    const damagePointsConfig = [
      { label: 'A1', style: { top: '-5%', left: '0' } },
      { label: 'A2', style: { top: '-5%', left: '33%' } },
      { label: 'A3', style: { top: '-5%', left: '66%' } },
      { label: 'A4', style: { top: '-5%', left: '99%' } },
      { label: 'B1', style: { top: `calc(50% - 20px)`, left: '-5%' } },
      { label: 'B2', style: { top: `calc(50% - 20px)`, left: '13%' } },
      { label: 'B3', style: { top: `calc(50% - 20px)`, left: '55%' } },
      { label: 'B4', style: { top: `calc(50% - 20px)`, left: '93%' } },
      { label: 'B5', style: { top: `calc(50% - 20px)`, left: '105%' } },
      { label: 'C1', style: { top: '100%', left: '0' } },
      { label: 'C2', style: { top: '100%', left: '33%' } },
      { label: 'C3', style: { top: '100%', left: '66%' } },
      { label: 'C4', style: { top: '100%', left: '99%' } },
    ]
    return (
      <div className="car-image-container">
        <img src={carImg} className="car-image" />
        {damagePointsConfig.map(({ label, style }) => (
          <DamagePoint
            key={label}
            active={damagePoints.includes(label)}
            onClick={() => handleDamagePointClick(label)}
            style={style}
          />
        ))}
      </div>
    )
  }
)

export default CarDamageVisualizer
