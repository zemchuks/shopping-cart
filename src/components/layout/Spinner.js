import React, { Fragment } from 'react'
import loader from './loading.gif'

const style = {
    display: 'block',
    margin: 'auto',
    width: '90px',
    height: '90px',
    backgroundColor: 'white'
}

const Spinner = () => (
    <Fragment>
        <img src={loader} style={style} alt='Loading...' />
    </Fragment>
)
export default Spinner 