import { describe, it, expect, beforeEach } from 'vitest'
import{ render, screen, cleanup } from '@testing-library/react'
import { Router } from './Router'

describe('Router', ()=>{
    beforeEach(()=>{
        cleanup()
    })
})

describe('Router', ()=>{
    it ("should render  without problmes",()=>{
        render(<Router routes={[]}/>)
        expect(true).toBeTruthy()
    })
    it("should render 404 if not routes matches",()=>{
        render(<Router routes={[]} defaultComponent={()=> <h1>404</h1>}/>)
        // console.log(screen.debug())
        expect(screen.getByText('404')).toBeTruthy()
    })
})
