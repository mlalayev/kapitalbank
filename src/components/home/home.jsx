import React, { useState } from 'react'
import '../home/home.css'
import slider1 from '../../assets/slider1img.png'
import purseicon from '../../assets/healthicons--money-bag.svg'
import birbankicon from '../../assets/birbank-karti.svg'
import deposit from '../../assets/deposit.svg'
import marketicon from '../../assets/micro_business.svg'
import megafon from '../../assets/megafon.svg'
import birbankcard from '../../assets/birbank-cashback-home.png'


function home() {


    return (
        <>

            <div className="container">

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
                            <img src={marketicon} className='marketicon' />
                            <p><b>Mikro kredit</b><span className='transparent'>.</span>sifariş et</p>
                        </div>

                        <div className="divcinco">
                            <img src={megafon} className='megafon' />
                            <p><b>Kampaniyalara</b><span className='transparent'>.</span> bax</p>
                        </div>

                    </div>

                </section>

                <section className="second">

                    <div className="scndsecup">

                        <p className='upp'>Birbank <span className='transparent'>.</span><b>Cashback</b></p>

                        <p className='lwp'> 2 qat ƏDV, şəxsi vəsaitdən pulsuz köçürmə, 30%-dək keşbek, taksit kartı kimi istifadədə isə əlavə olaraq 24 ayadək faizsiz taksit və 63 günədək güzəşt müddəti qazandıran unikal bir kartdır. </p>

                    </div>

                    <div className="scndseclwr">

                        <div className="scndseclwrleft">
                            <p className='pink'>30%-dək keşbek və 2 qat ƏDV</p>

                            <p className='bonus'>Bonus</p>

                            <button className='order'>Sifariş et</button>
                        </div>

                        <div className="scndseclwrmid">
                            <div className="sslwrmdlft">
                                <p className='pink'>pulsuz</p>
                                <p className='bonus'>Kartın qiyməti</p>
                            </div>

                            <div className="sslwrmdrght">
                                <p className='pink'> 63 günədək</p>
                                <p className='bonus'>Güzəşt müddəti</p>
                            </div>
                        </div>

                        <div className="scndseclwrrght">
                            <img src={birbankcard} className='birbankcard' />
                        </div>

                    </div>

                </section>

                <section className="third">

                    <div className="thrdscup">

                        <p className='thrdscp'>Gündəlik<b> tələbat krediti</b></p>

                        <p className='thrdsclp'>30000 AZN-dək, arzularınızı reallaşdırmaq və ya ehtiyaclarınızı ödəmək üçün nağd kredit təklif edirik.</p>
                    </div>

                    <div className="thrdsclwr">

                    </div>

                </section>
            </div>

        </>
    )
}

export default home