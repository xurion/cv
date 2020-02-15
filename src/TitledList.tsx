import React from 'react'
import List from './List'

interface TitledListProps {
  title: string
  points: string[]
}

export default (props: TitledListProps) => {
  return (
    <React.Fragment>
      <p>{props.title}</p>
      <List points={props.points}/>
    </React.Fragment>
  )
}
