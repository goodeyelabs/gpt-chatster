'use client'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

function GTM() {
    useEffect(() => {
        TagManager.initialize({ gtmId: "GTM-PTH65K2Q" })
      }, [])

    return null
}

export default GTM