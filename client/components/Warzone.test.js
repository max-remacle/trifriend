import React from 'react'
import { Provider } from 'react-redux'
import { render, screen, waitFor } from '@testing-library/react'
import regeneratorRuntime from "regenerator-runtime"
import store from '../store'

import App from './App'
import { SET_STATS } from '../actions'
import { getWarzoneStats } from '../api' 

jest.spyOn(store, 'getState')
jest.spyOn(store,'dispatch')

jest.mock('../api', () => ({
    getWarzoneStats: jest.fn()
}))

let stats= {
    br:{
        wins:10,
        kills:200
    }
}

beforeEach(()=>{
    store.getState.mockImplementation(()=>({ stats }))
    getWarzoneStats.mockImplementation(() => Promise.resolve(stats))
})

test('Displays a list of Stats',async()=>{
    render(<Provider store={store}><App /></Provider>)
    await waitFor(() => store.dispatch.mock.calls.length == 1)
    let list = screen.getAllByRole('listitem')
    expect(list.length).toBe(9)
    expect(list[0].innerHTML).toMatch(/Wins/)
})

test('fetch a list of stats from api when component mounts',()=>{
    render(<Provider store={store}><App /></Provider>)
    expect(store.dispatch).toHaveBeenCalled()
    expect(store.dispatch.mock.calls[0][0].type).toBe(SET_STATS)
    
})