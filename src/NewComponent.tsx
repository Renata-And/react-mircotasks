import React from 'react'

export const NewComponent = () => {
  const topCars = [
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' }
  ]

  return (
    <table className='table'>
      <tr>
        <th>№</th>
        <th>Manufacturer</th>
        <th>Model</th>
      </tr>
      {topCars.map((car, index) => {
        return (
          <tr>
            <td className='table-cell'>{index + 1}</td>
            <td className='table-cell'>{car.manufacturer}</td>
            <td className='table-cell'>{car.model}</td>
          </tr>
        )
      })}

    </table>
  )
}
