import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import store from '../store'
import App from './App'
import { SET_USER_ACCOUNTS } from '../actions' 

jest.spyOn(store, 'getState')
jest.spyOn(store,'dispatch')

jest.mock('../api', () => ({
    getUserAccounts: jest.fn()
}))

let accounts= [
    {id:1, user_name:'Bossman', platform:'Battle',user_id:1},
    {id:2, user_name:'Aeollus', platform:'Battle',user_id:1}
]

beforeEach(()=>{
    store.getState.mockImplementation(()=>({ accounts }))
    fetchTasks.mockImplementation(() => Promise.resolve(accounts))
})


test('Displays a list of tasks',()=>{
    render(<Provider store={store}><App /></Provider>)
    let tasks = screen.getAllByRole('listitem')
    expect(tasks.length).toBe(2)
})

test('fetch a list of tasks from api when component mounts',()=>{
    render(<Provider store={store}><App /></Provider>)
    expect(store.dispatch).toHaveBeenCalled()
    expect(store.dispatch.mock.calls[0][0].type).toBe(SET_USER_ACCOUNTS)
    
})