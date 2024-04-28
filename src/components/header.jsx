import React from 'react'
import '../components/header.css'

function header() {
    return (
        <>
            <header>

                <div className="headuppart">

                    <p>Depozitdən <b><span>.</span>10%-dək</b> <span>.</span>gəlir əldə etmək üçün son tarix <b><span>.</span>30 apreldir!</b></p>

                    <div className="timer">
                        <div className="lefttimer"></div>
                        <p>:</p>
                        <div className="midtimer"></div>
                        <p>:</p>
                        <div className="righttimer"></div>
                    </div>

        <button className='uppartbtn'>Ətraflı</button>

                </div>

                <div className="headmidpart">



                </div>

                <div className="headlowpart">



                </div>

            </header>
        </>
    )
}

export default header