import React from 'react'
// import Sidebar from './Sidebar'
import '../css/report.css'
// import { Link } from 'react-router-dom'
// import '../js/Report'
import { Icon } from '@iconify/react';
function Report() {
                        function myFunction() {
                                                var x = document.getElementById("myTopnav");
                                                if (x.className === "topnav") {
                                                                        x.className += " responsive";
                                                } else {
                                                                        x.className = "topnav";
                                                }
                        }
                        return (

                                                <div className="Report">
                                                                        <h1> التقارير </h1>
                                                                        <div class="topnav" id="myTopnav">
                                                                                                <a href="#home" class="active">المشتركين</a>
                                                                                                <a href="#contact">ألأجهزة الرياضية </a>
                                                                                                <a href="#about">المدربين</a>
                                                                                                <a href="#about" className='fillter'> فلتر <Icon icon="mi:filter" width="20" height="20" /></a>
                                                                                                <a href="#about">استخراج</a>
                                                                                                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                                                                                                        <i class="fa fa-bars"></i>
                                                                                                </a>
                                                                        </div>
                                                                        {/* <hr /> */}

                                                                        <div className="row">

                                                                                                <section className="order" id="order">


                                                                                                                        <form action="">


                                                                                                                                                <div className="box-container">

                                                                                                                                                                        <div className="box">
                                                                                                                                                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                                                                                                                                                        <table className="table_custom_2">

                                                                                                                                                                                                                                                <tbody>
                                                                                                                                                                                                                                                                        <tr>
                                                                                                                                                                                                                                                                                                <td><input type="checkbox" id="vehicle1" name="vehicle1" value=" " />  مصطفى </td>
                                                                                                                                                                                                                                                                                                <td data-th="رقم الهاتف "> <Icon icon="ph:phone" width="20" height="20" /> <br /> 0780000000 </td>
                                                                                                                                                                                                                                                                                                <td data-th="النشاط"> <Icon icon="material-symbols:check-circle-outline-rounded" color="green" width="20" height="20" /> <br /> النشاط</td>

                                                                                                                                                                                                                                                                        </tr>
                                                                                                                                                                                                                                                                        <tr>
                                                                                                                                                                                                                                                                                                <td><input type="checkbox" id="vehicle1" name="vehicle1" value=" " />  مصطفى </td>
                                                                                                                                                                                                                                                                                                <td data-th="رقم الهاتف "> <Icon icon="ph:phone" width="20" height="20" /> <br /> 0780000000 </td>
                                                                                                                                                                                                                                                                                                <td data-th="النشاط"> <Icon icon="material-symbols:check-circle-outline-rounded" color="green" width="20" height="20" /> <br /> النشاط</td>

                                                                                                                                                                                                                                                                        </tr>

                                                                                                                                                                                                                                                                        <tr>
                                                                                                                                                                                                                                                                                                <td><input type="checkbox" id="vehicle1" name="vehicle1" value=" " />  مصطفى </td>
                                                                                                                                                                                                                                                                                                <td data-th="رقم الهاتف "> <Icon icon="ph:phone" width="20" height="20" /> <br /> 0780000000 </td>
                                                                                                                                                                                                                                                                                                <td data-th="النشاط"> <Icon icon="material-symbols:check-circle-outline-rounded" color="green" width="20" height="20" /> <br /> النشاط</td>

                                                                                                                                                                                                                                                                        </tr>




                                                                                                                                                                                                                                                </tbody>
                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                </div>

                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="box">

                                                                                                                                                                                                <div className="inputBox">
                                                                                                                                                                                                                        <label htmlFor=""> التاريخ من : </label><br />
                                                                                                                                                                                                                        <input type="Date" placeholder=" التاريخ من " />
                                                                                                                                                                                                </div>

                                                                                                                                                                                                <div className="inputBox">
                                                                                                                                                                                                                        <label htmlFor=""> التاريخ الى : </label><br />
                                                                                                                                                                                                                        <input type="Date" placeholder=" التاريخ الى  " />
                                                                                                                                                                                                </div>
                                                                                                                                                                                                <input type="submit" value=" فلتر  " className="btnn" id="btnn" /><br />

                                                                                                                                                                        </div>
                                                                                                                                                                        <div className="box">
                                                                                                                                                                                                <label htmlFor="" id='lab'> استخراج </label> <br />
                                                                                                                                                                                                <input type="submit" value=" XL  " className="btn" id='sbtn' /><br />
                                                                                                                                                                                                <input type="submit" value=" W  " className="btn" id='sbtn' />

                                                                                                                                                                        </div>

                                                                                                                                                </div>

                                                                                                                        </form>

                                                                                                </section>

                                                                        </div>
                                                </div>
                        )
}

export default Report 