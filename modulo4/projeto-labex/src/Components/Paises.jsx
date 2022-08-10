import React, { useMemo, useState } from 'react'
import Selected from 'react-select'
import countryList from 'react-select-country-list'

function Paises() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }

    return (
        <Selected placeholder='Escolha um país' options={options} value={value} onChange={changeHandler}></Selected>
    )
}

export default Paises