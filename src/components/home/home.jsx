import React, { useState } from 'react'
import '../home/home.css'
import slider1 from '../../assets/slider1img.png'
import purseicon from '../../assets/healthicons--money-bag.svg'
import birbankicon from '../../assets/birbank-karti.svg'
import deposit from '../../assets/deposit.svg'
import marketicon from '../../assets/micro_business.svg'
import megafon from '../../assets/megafon.svg'


function home() {


    return (
        <>

            <section className="first">

                <div className="firstscuppart">
                    <div className="firstsclft">
                        <h1>Yüksək faizlə qazandıran kampaniyanı uzatdıq!</h1>

                        <button className='firstscbtn'>Daha ətraflı</button>
                    </div>

                    <img src={slider1} className='sliderone' />

                </div>

                <div className="firstsclwpart">

                    <div className="divuno">
                        <img src={purseicon} className='purseicon' />
                        <p><b>Kredit</b> <span className='transparent'>.</span>sifariş et</p>
                    </div>

                    <div className="divdos">
                        <img src={birbankicon} className='birbankicontwo' />
                        <p><b>Taksit kartı</b><span className='transparent'>.</span> sifariş et</p>
                    </div>

                    <div className="divtres">
                        <img src={deposit} className='deposit' />
                        <p><b>Depozit</b><span className='transparent'>.</span> sifariş et</p>
                    </div>

                    <div className="divcuatro">
                        <img src={marketicon} className='marketicon'/>
                        <p><b>Mikro kredit</b><span className='transparent'>.</span>sifariş et</p>
                    </div>

                    <div className="divcinco">
                        <img src={megafon} className='megafon' />
                        <p><b>Kampaniyalara</b><span className='transparent'>.</span> bax</p>
                    </div>

                </div>

            </section>

            <section className="second">

            </section>

        </>
    )
}

export default home