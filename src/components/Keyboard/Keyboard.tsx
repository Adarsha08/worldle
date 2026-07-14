import React from 'react'
import { GAME_CONFIG } from '../../utils/constant'

const Keyboard = () => {
  return (
    <div>
        {GAME_CONFIG.KEYBOARD_ROWS.map((row,rowIndex)=>
        (
            <div key={rowIndex}>
                {row.map((key)=>(

                ))}
            </div>

        ))}
    </div>
  )
}

export default Keyboard