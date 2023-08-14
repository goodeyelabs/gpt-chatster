'use client'
import { useEffect, useState } from 'react'

export default function ChatInput() {    
    return (
        <form className='bg-none'>
            <input type='text' placeholder='How can I help?' className='font-semibold text-5xl text-left bg-transparent border-none appearance-none outline-none'></input>
        </form>
    ) 
}