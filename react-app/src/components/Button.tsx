import React from 'react'
import './Button.css'

interface ButtonProps {
  text?: string
  variant?: 'primary' | 'secondary' | 'danger'
  onClick?: () => void
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  text = 'Click',
  variant = 'primary',
  onClick,
  children
}) => {
  return (
    <button className={`react-button ${variant}`} onClick={onClick}>
      {children || text}
    </button>
  )
}

export default Button 