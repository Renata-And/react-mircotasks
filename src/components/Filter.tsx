import React, { useState } from 'react'
import { FIlterComponent } from './FIlterComponent'

export type BanknoteType = {
  banknote: string
  nominal: number
  number: string
}

type FilterType = 'all' | 'ruble' | 'dollar'

export const Filter = () => {

  const [money, setMoney] = useState([
    { banknote: "dollar", nominal: 100, number: "a123456789" },
    { banknote: "dollar", nominal: 50, number: "b123456789" },
    { banknote: "ruble", nominal: 100, number: "c123456789" },
    { banknote: "dollar", nominal: 100, number: "d123456789" },
    { banknote: "dollar", nominal: 50, number: "e123456789" },
    { banknote: "ruble", nominal: 100, number: "f123456789" },
    { banknote: "dollar", nominal: 50, number: "j123456789" },
    { banknote: "ruble", nominal: 50, number: "h123456789" }
  ])

  const [filterTitle, setfilterTitle] = useState<FilterType>('all');

  let filteredMoney = money;

  if (filterTitle === 'dollar') {
    filteredMoney = money.filter((obj) => obj.banknote === 'dollar');
  } else if (filterTitle === 'ruble') {
    filteredMoney = money.filter((obj) => obj.banknote === 'ruble');
  }

  const onClickFilterHandler = (nameButton: FilterType) => {
    setfilterTitle(nameButton);
  }

  return (
    <FIlterComponent onClickFilterHandler={onClickFilterHandler} filteredMoney={filteredMoney} />
  )
}
