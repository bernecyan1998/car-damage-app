import React, { memo } from 'react'
import './styles.css'

interface Props {
  active: boolean
  onClick: () => void
  style?: React.CSSProperties
}

const DamagePoint: React.FC<Props> = memo(({ active, onClick, style }) => {
  return (
    <div
      className={`damage-point ${active ? 'active' : ''}`}
      onClick={onClick}
      style={style}
    ></div>
  )
})

export default DamagePoint
