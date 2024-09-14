import React from 'react'
import { BanknoteType } from './Filter'

type FIlterComponentProps = {
  onClickFilterHandler: Function
  filteredMoney: Array<BanknoteType>
}

export const FIlterComponent = (props: FIlterComponentProps) => {
  return (
    <div className='banknoteList'>
      <h3>Banknote list</h3>
      <ul>
        {props.filteredMoney.map((obj: BanknoteType, i: number) => {
          return (
            <li key={i}>
              <span>{obj.banknote}</span>
              <span>{obj.nominal}</span>
              <span>{obj.number}</span>
            </li>

          )
        })}
      </ul>
      <button onClick={() => props.onClickFilterHandler('all')}>All</button>
      <button onClick={() => props.onClickFilterHandler('ruble')}>Ruble</button>
      <button onClick={() => props.onClickFilterHandler('dollar')}>Dollar</button>
    </div>
  )
}
