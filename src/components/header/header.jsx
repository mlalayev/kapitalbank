import React from 'react'
import '../../components/header/header.css'
import headerLogo from '../../assets/kb-logo-main.svg'
import { FaLocationDot } from "react-icons/fa6";
import { SearchSquare } from "@mynaui/icons-react";
import fddimg from '../../assets/firstdropdownimg.png'
import birbankicon from '../../assets/birbank-karti.svg'


function header() {

    

    return (
        <>
            <header>
                    <div className="container">

                <div className="headuppart">

                    <p>Depozitdən <b><span>.</span>10%-dək</b> <span>.</span>gəlir əldə etmək üçün son tarix <b><span>.</span>30 apreldir!</b></p>

                    <div className="timer">
                        <div className="lefttimer">
                            <h1>01</h1>
                            <p>Gün</p>
                        </div>
                        <p>:</p>
                        <div className="midtimer">
                            <h1>14</h1>
                            <p>Saat</p>
                        </div>
                        <p>:</p>
                        <div className="righttimer">
                            <h1>24</h1>
                            <p>Dəqiqə</p>
                        </div>
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
                        <li className='anim'><span className='animspan'>KARTLAR</span>

                            <div className="dropdown">

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

                                            <button className='ddrplrtfirstbtn'>Bir kliklə sifariş et</button>

                                        </div>
                                        <img src={fddimg} className='fddimg' />

                                    </div>
                                </div>
                            </div>

                        </li>

                        <li className='anim'><span className='animspan'>KREDİTLƏR</span>

                            <div className="dropdown">
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

                                            <button className='ddrplrtfirstbtn'>Bir kliklə sifariş et</button>

                                        </div>
                                        <img src={fddimg} className='fddimg' />

                                    </div>
                                </div>
                            </div>

                        </li>

                        <li className='anim'><span className='animspan'>İPOTEKALAR</span></li>
                        
                        <li className='anim'><span className='animspan'>DEPOZİTLƏR</span>

                            <div className="dropdown">
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

                                            <button className='ddrplrtfirstbtn'>Bir kliklə sifariş et</button>

                                        </div>
                                        <img src={fddimg} className='fddimg' />

                                    </div>
                                </div>
                            </div>

                        </li>

                        <li className='anim'><span className='animspan'>PUL KÖÇÜRMƏLƏRİ</span>

                            <div className="dropdown">
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

                                            <button className='ddrplrtfirstbtn'>Bir kliklə sifariş et</button>

                                        </div>
                                        <img src={fddimg} className='fddimg' />

                                    </div>
                                </div>
                            </div>

                        </li>

                        <li className='anim'><span className='animspan'>ONLAYN XİDMƏTLƏR</span>

                            <div className="dropdown">
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

                                            <button className='ddrplrtfirstbtn'>Bir kliklə sifariş et</button>

                                        </div>
                                        <img src={fddimg} className='fddimg' />

                                    </div>
                                </div>
                            </div>

                        </li>

                        <li className='anim'><span className='animspan'>KAMPANİYALAR</span></li>

                        <li className='anim'><span className='animspan'>FƏRDİ BANKÇILIQ</span></li>

                    </ul>

                    <button className='hdlwprtbtn'> <img src={birbankicon} className='birbankicon'/><span className='bbiconspan'>birbank</span></button>

                </div>

                </div>

            </header>

        </>
    )
}

export default header