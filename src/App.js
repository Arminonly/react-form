import React from 'react'
import NameForm from './Examples/nameForm'
import Reservation from './Examples/reservation'
import Select from './Examples/select'
import TextArea from './Examples/textArea'
import UnManagedComponent from './Examples/unmanagedComponent'

export default function App() {
  return (
    <div>
      <NameForm />
      <br />
      <TextArea />
      <br />
      <Select />
      <br />
      <Reservation/>
      <br />
      <UnManagedComponent/>
    </div>
  )
}
