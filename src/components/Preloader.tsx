import React from 'react'
import loader from './../Assets/loader.svg'
//import styles from "./MoviePage.module.scss"

const Preloader = () => {
    return (
        <div style={{height: 500, width: 500, display: 'flex', justifyContent:'center', alignItems: 'center' }}>
             <img src={loader} alt="loader"/> 
        </div>
    )
}
export default Preloader