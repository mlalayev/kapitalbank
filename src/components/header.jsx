import React from 'react'
import '../components/header.css'
import headerLogo from '../assets/kb-logo-main.svg'
import { FaLocationDot } from "react-icons/fa6";
import { SearchSquare } from "@mynaui/icons-react";
import fddimg from '../assets/firstdropdownimg.png'


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

                    <a href="#"><img src={headerLogo} className='headerlogo' /></a>

                    <div className="headmidright">

                        <ul className='hmrul'>
                            <li><a href="#"><b>Fiziki şəxslər üçün</b></a></li>
                            <li><a href="#">Biznes üçün</a></li>
                            <li><a href="#"> <FaLocationDot color='rgb(182, 29, 41)' /> Xidmət şəbəkəsi</a></li>
                            <li><a href="#">EN</a></li>
                            <li><a href="#">RU</a></li>
                        </ul>

                        <button className='hmrbtn'><SearchSquare size={34} strokeWidth={0.9} color='rgb(182, 29, 41)' /></button>

                    </div>

                </div>

                <div className="headlowpart">

                    <ul className='mainul'>
                        <li className='anim'>KARTLAR

                            <div className="dropdownn">

                                <div className="dropdowncontent">
                                    <div className="dropdownleft">
                                        <div className="ddll">
                                            <ul>
                                                <li><a href="#"><b>Birbank kartları</b></a></li>
                                                <li><a href="#"><b>Premium kartlar</b></a></li>
                                                <li><a href="#"><b>Hədiyyə kartı</b></a></li>
                                                <li><a href="#">Kartlar üzrə xidmətlər</a></li>
                                            </ul>
                                        </div>

                                        <div className="ddlr">
                                            <ul>
                                                <li><a href="#">Təhlükəsizlik qaydaları</a></li>
                                                <li><a href="#">3D secure</a></li>
                                                <li><a href="#">Kart sifarişi</a></li>
                                                <li><a href="#">Birbank kartının eyniləşdirilməsi</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropdownright">
                                        <div className="ddrlprt">
                                            <div className="txtprt">
                                                <h1>Birbank Cashback</h1>

                                                <p>2 qat ƏDV, şəxsi vəsaitdən pulsuz köçürmə, 30%-dək keşbek, taksit kartı kimi istifadədə isə əlavə olaraq 24 ayadək faizsiz taksit və 63 günədək güzəşt müddəti qazandıran unikal bir kartdır.</p>
                                            </div>

                                            <button className='ddrplrtfirstbtn'></button>
                                        
                                        </div>
                                        <img src={fddimg} className='fddimg' />

                                    </div>
                                </div>
                            </div>

                        </li>

                        <li className='anim'>KREDİTLƏR

                            <div className="dropdown">

                            </div>

                        </li>

                        <li className='anim'>İPOTEKALAR

                            <div className="dropdown">

                            </div>

                        </li>
                        <li className='anim'>DEPOZİTLƏR

                            <div className="dropdown">

                            </div>

                        </li>

                        <li className='anim'>PUL KÖÇÜRMƏLƏRİ

                            <div className="dropdown">

                            </div>

                        </li>

                        <li className='anim'>ONLAYN XİDMƏTLƏR

                            <div className="dropdown">

                            </div>

                        </li>

                        <li className='anim'>KAMPANİYALAR

                            <div className="dropdown">

                            </div>

                        </li>

                        <li className='anim'>FƏRDİ BANKÇILIQ

                            <div className="dropdown">

                            </div>

                        </li>

                    </ul>

                </div>

            </header>
        </>
    )
}

export default header