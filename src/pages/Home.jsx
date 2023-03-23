import React from 'react'
import { TiPhoneOutline } from "react-icons/ti"
import { AiOutlineCheckCircle } from "react-icons/ai"
import '../css/Home.css'
function Home() {

                        return (

                                                <div className="Home">
                                                                        <h1>قائمة الزبائن</h1>
                                                                        <div className="row">
                                                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                                                        <table className="table_custom_1">

                                                                                                                                                <tbody>
                                                                                                                                                                        <tr>
                                                                                                                                                                                                <td><input type="checkbox" name="vehicle1" value=" " /> <img src="img/img_avatar.png" alt=" " ></img>  مصطفى </td>
                                                                                                                                                                                                <td data-th="رقم الهاتف "> < TiPhoneOutline /> <br /> 0780000000 </td>
                                                                                                                                                                                                <td data-th="النشاط"> <AiOutlineCheckCircle /> <br /> النشاط</td>
                                                                                                                                                                                                <td data-th="الوزن"><label htmlFor="" id='size'> BMI</label> <br /> 19.9 </td>
                                                                                                                                                                                                <td data-th="button">
                                                                                                                                                                                                                        <button>
                                                                                                                                                                                                                                                < a href='/adduser' className='but'>تعديل</ a ></button>
                                                                                                                                                                                                                        <br />
                                                                                                                                                                                                                        <button>< a herf='/adduser ' className='but'>تفاصيل</ a  ></button>
                                                                                                                                                                                                </td>
                                                                                                                                                                        </tr>
                                                                                                                                                                        <tr>
                                                                                                                                                                                                <td><input type="checkbox" name="vehicle1" value=" " /> <img src="img/img_avatar.png" alt=" " ></img>  مصطفى </td>
                                                                                                                                                                                                <td data-th="رقم الهاتف "> < TiPhoneOutline /> <br /> 0780000000 </td>
                                                                                                                                                                                                <td data-th="النشاط"> <AiOutlineCheckCircle /> <br /> النشاط</td>
                                                                                                                                                                                                <td data-th="الوزن"><label htmlFor="" id='size'> BMI</label> <br /> 19.9 </td>
                                                                                                                                                                                                <td data-th="button">
                                                                                                                                                                                                                        <button>
                                                                                                                                                                                                                                                < a href='/adduser' className='but'>تعديل</ a ></button>
                                                                                                                                                                                                                        <br />
                                                                                                                                                                                                                        <button>< a herf='/adduser ' className='but'>تفاصيل</ a  ></button>
                                                                                                                                                                                                </td>
                                                                                                                                                                        </tr>
                                                                                                                                                                        <tr>
                                                                                                                                                                                                <td><input type="checkbox" name="vehicle1" value=" " /> <img src="img/img_avatar.png" alt=" " ></img>  مصطفى </td>
                                                                                                                                                                                                <td data-th="رقم الهاتف "> < TiPhoneOutline /> <br /> 0780000000 </td>
                                                                                                                                                                                                <td data-th="النشاط"> <AiOutlineCheckCircle /> <br /> النشاط</td>
                                                                                                                                                                                                <td data-th="الوزن"><label htmlFor="" id='size'> BMI</label> <br /> 19.9 </td>
                                                                                                                                                                                                <td data-th="button">
                                                                                                                                                                                                                        <button>
                                                                                                                                                                                                                                                < a href='/edit' className='but'>تعديل</ a ></button>
                                                                                                                                                                                                                        <br />
                                                                                                                                                                                                                        <button>< a herf='/edit ' className='but'>تفاصيل</ a  ></button>
                                                                                                                                                                                                </td>
                                                                                                                                                                        </tr>
                                                                                                                                                                        <tr>
                                                                                                                                                                                                <td><input type="checkbox" name="vehicle1" value=" " /> <img src="img/img_avatar.png" alt=" " ></img>  مصطفى </td>
                                                                                                                                                                                                <td data-th="رقم الهاتف "> < TiPhoneOutline /> <br /> 0780000000 </td>
                                                                                                                                                                                                <td data-th="النشاط"> <AiOutlineCheckCircle /> <br /> النشاط</td>
                                                                                                                                                                                                <td data-th="الوزن"><label htmlFor="" id='size'> BMI</label> <br /> 19.9 </td>
                                                                                                                                                                                                <td data-th="button">
                                                                                                                                                                                                                        <button>< a href='/Edit_home' className='but'>تعديل</ a ></button>
                                                                                                                                                                                                                        <br />
                                                                                                                                                                                                                        <button>< a herf='/adduser ' className='but'>تفاصيل</ a  ></button>
                                                                                                                                                                                                </td>
                                                                                                                                                                        </tr>





                                                                                                                                                </tbody>
                                                                                                                        </table>
                                                                                                                        <br />
                                                                                                                        <a href=" " id='aa'>حذف العملاء المحديين </a>

                                                                                                </div>
                                                                        </div>


                                                </div>
                        )
}

export default Home
