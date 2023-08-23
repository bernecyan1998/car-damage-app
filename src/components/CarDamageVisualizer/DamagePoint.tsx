import React from 'react'
import './styles.css'

interface Props {
  active: boolean
  onClick: () => void
  style?: React.CSSProperties
}

const DamagePoint: React.FC<Props> = ({ active, onClick, style }) => {
  return (
    <div
      className={`damage-point ${active ? 'active' : ''}`}
      onClick={onClick}
      style={style}
    />
  )
}

export default DamagePoint
