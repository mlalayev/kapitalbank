import React, { useState } from 'react'
import '../home/home.css'
import slider1 from '../../assets/slider1img.png'
import purseicon from '../../assets/healthicons--money-bag.svg'
import birbankicon from '../../assets/birbank-karti.svg'
import deposit from '../../assets/deposit.svg'
import marketicon from '../../assets/micro_business.svg'
import megafon from '../../assets/megafon.svg'
import birbankcard from '../../assets/birbank-cashback-home.png'
import dailyloan from '../../assets/daily-loan3.png'
import cashPayment from '../../assets/cashPayment.webp'
import cashPpayment from '../../assets/cashPpayment.webp'
import { FaArrowRight } from "react-icons/fa";


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

                        <div className="thrdsclft">
                            <img src={dailyloan} className='dailyloan' />
                        </div>

                        <div className="thrdscmd">

                            <div className="thrdscmdlft">

                                <p className='pink one'>50 000 AZN-dək</p>
                                <p className='lvpnk'>Kredit məbləği</p>

                            </div>

                            <div className="thrdscmdrght">

                                <p className='pink two'>59 ayadək</p>
                                <p className='lvpnk'>Kredit müddəti</p>

                            </div>

                        </div>

                        <div className="thrdscrght">

                            <div className="thrdscrghtup">
                                <p className='pink three'>10.9%-dən</p>
                                <p className='lvpnk'>İllik faiz dərəcəsi</p>
                            </div>

                            <div className="thrdscrghtlw">
                                <button className='order talabat'>Sifariş et</button>
                            </div>

                        </div>

                    </div>

                </section>

                <section className="fourth">

                    <div className="frthsclft">

                        <h1 className='frthsch'>Kalkulyator</h1>

                        <div className="frthscbtns">

                            <button className='frthbtnstyle btnone'>Kredit</button>
                            <button className='frthbtnstyle btntwo'>Birbank kartı</button>
                            <button className='frthbtnstyle btnthree'>Depozit</button>

                        </div>

                        <p className='frthscpone'>Gündəlik tələbat krediti</p>
                        <p className='frthscptwo'>Siz müştərilərimizə asanlıqla əldə edə biləcəyiniz nağd kredit təklif edirik.</p>
                        <p className='frthscpthree'>% dərəcəsi rəsmiləşmə zamanı müəyyən olunacaq</p>


                        <div className="inputgroup">


                            <div className="firstinputgrpfrthsc">

                                <div className="inputvaluegroup">
                                    <p className='nptvlgrpup'>Məbləğ</p>
                                    <p className='nptvlgrplw'>300</p>
                                </div>

                                <input type="range" name="firstinputgrp" className='slider' id="firstinputgrp" />

                                <div className='inputfirstfield'>

                                    <p className='frstnptgrpp'>300</p>
                                    <p className='frstnptgrpp'>50 000</p>

                                </div>

                            </div>


                            <div className="secondinputgrpfrthsc">

                                <div className="inputvaluegroup">
                                    <p className='nptvlgrpup'>Faiz</p>
                                    <p className='nptvlgrplw'>15</p>
                                </div>

                                <input type="range" name="firstinputgrp" className='slider' id="firstinputgrp" />

                                <div className='inputfirstfield'>

                                    <p className='frstnptgrpp'>10.9 %</p>
                                    <p className='frstnptgrpp'>20 %</p>

                                </div>

                            </div>


                            <div className="thirdinputgrpfrthsc">

                                <div className="inputvaluegroup">
                                    <p className='nptvlgrpup'>Müddət</p>
                                    <p className='nptvlgrplw'>3</p>
                                </div>

                                <input type="range" name="firstinputgrp" className='slider' id="firstinputgrp" />

                                <div className='inputfirstfield'>

                                    <p className='frstnptgrpp'>3 ay</p>
                                    <p className='frstnptgrpp'>59 ay</p>

                                </div>

                            </div>


                        </div>


                    </div>

                    <div className="frthscrght">

                        <div className="div">
                            <p className='frthscrghtp'>Nağd pul krediti üçün </p>
                            <p className='frthscrghtpd'> aylıq ödəniş</p>
                        </div>

                        <h1 className='pink frthscrghth'>9020.91 ₼</h1>

                        <button className='order'>Sifariş et</button>

                    </div>

                </section>

                <section className="fifth">

                    <div className="fifthleft">

                        <div>

                            <h1 className='ffthlfth'>Onlayn kredit</h1>
                            <p className='ffthlftp'>Banka gəlmədən və növbələrdə vaxt itirmədən kredit əldə et.</p>


                            <button className='ffthbtn'>Sifariş et <FaArrowRight /> </button>

                        </div>

                        <img src={cashPayment} className='cashPayment' />

                    </div>

                    <div className="fifthright">

                        <div>
                            <h1 className='ffthscrghth'>İnsan resursları</h1>
                            <p className='ffthscrghtp'>Kapital Bankın peşəkarlar komandasına qoşulmaq istəyirsinizsə, Sizi müvafiq vakansiyaya müraciət etməyə dəvət edirik. Biz sizə dinamik mühitdə maraqlı və perspektivli iş təklif edirik.</p>

                            <button className='ffthbtn ffthbtnrght'>Daha ətraflı<FaArrowRight /></button>

                        </div>

                        <img src={cashPpayment} className='cashPpayment' />

                    </div>

                </section>

                <section className="sixth">
                    <div className="sxthscdv">

                        <div className="sxthscdvup">
                            <h1 className='scthscdvuph'>Xəbərlər</h1>
                            <button className='ffthbtn sxthscbtn'>Bütün xəbərlər <FaArrowRight /></button>
                        </div>

                        <div className="sxthscdvlw">

                            <div className="sxthscdvlwlft">
                                <div className="sxthscdvlwlftlft">
                                    <div className="divcircle">
                                        03
                                    </div>
                                    <p>May</p>
                                </div>

                                <div className="sxthscdvlwlftrght">
                                    <p> Kapital Bank-ın sponsorluğu ilə ölkəmiz “Türk Dövlətləri İqtisadi Forumu 2024” layihəsinə ev sahibliyi etdi </p>
                                </div>
                            </div>

                            <div className="sxthscdvlwmid">
                                <div className="sxthscdvlwlftlft">
                                    <div className="divcircle">
                                        03
                                    </div>
                                    <p>May</p>
                                </div>

                                <div className="sxthscdvlwlftrght">
                                    <p> Kapital Bank-ın sponsorluğu ilə ölkəmiz “Türk Dövlətləri İqtisadi Forumu 2024” layihəsinə ev sahibliyi etdi </p>
                                </div>
                            </div>

                            <div className="sxthscdvlwrght">
                                <div className="sxthscdvlwlftlft">
                                    <div className="divcircle">
                                        03
                                    </div>
                                    <p>May</p>
                                </div>

                                <div className="sxthscdvlwlftrght">
                                    <p> Kapital Bank-ın sponsorluğu ilə ölkəmiz “Türk Dövlətləri İqtisadi Forumu 2024” layihəsinə ev sahibliyi etdi </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </div>

        </>
    )
}

export default home