"use client";
import React from 'react'

import GameContext, { GameProvider } from '@/contexts/gamecontext';
import GameForms from './gameforms.js';

function GameTable() {

    return (

        <GameProvider>
         
            <GameForms/>
        
          
        </GameProvider>
    )
}

export default GameTable