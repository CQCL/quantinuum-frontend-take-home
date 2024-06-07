
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Button, Input, Switch} from '@cqcl/quantinuum-ui'
import '@cqcl/quantinuum-ui/tokens.css'
import './main.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Button variant="outline">Hello</Button>
    <Input placeholder="say something"></Input>
    <Switch ></Switch>
    {/* <div className='bg-red-600 w-20 h-20'> Hello</div> */}
  </React.StrictMode>,
)
