import React from 'react'
// import '../css/Participant.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
function Participant() {

                        return (
                                                <div className="Participant">
                                                                        <h1 className="heading"> قائمة الأشتراكات </h1>
                                                                        <div className="row">
                                                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                                                        <table className="table_custom_1">

                                                                                                                                                <tbody>
                                                                                                                                                                        <tr>
                                                                                                                                                                                                <td><input type="checkbox" id="vehicle1" name="vehicle1" value=" " /> </td>
                                                                                                                                                                                                <td> ذهبي </td>
                                                                                                                                                                                                <td data-th="رقم الهاتف "> 58 <br /> عدد المشتركين </td>
                                                                                                                                                                                                <td data-th="الجنس"><Icon icon="ph:gender-male-thin" width="20" height="20" /> <br />  ذكر </td>
                                                                                                                                                                                                <td data-th="الوزن"><label htmlFor=""> 40,000</label> <br /> الرسوم </td>
                                                                                                                                                                                                <td data-th="button">
                                                                                                                                                                                                                        <button>< a href='/Edit_home' className='but'>تعديل</ a ></button>
                                                                                                                                                                                                </td>
                                                                                                                                                                        </tr>
                                                                                                                                                                        <tr>
                                                                                                                                                                                                <td><input type="checkbox" id="vehicle1" name="vehicle1" value=" " /> </td>
                                                                                                                                                                                                <td> أسبوعي </td>
                                                                                                                                                                                                <td data-th="رقم الهاتف "> 58 <br /> عدد المشتركين </td>
                                                                                                                                                                                                <td data-th="الجنس"><Icon icon="ph:gender-female-thin" width="20" height="20" /> <br />  أنثى </td>
                                                                                                                                                                                                <td data-th="الوزن"><label htmlFor=""> 40,000</label> <br /> الرسوم </td>
                                                                                                                                                                                                <td data-th="button">
                                                                                                                                                                                                                        <button>< a href='/Edit_home' className='but'>تعديل</ a ></button>
                                                                                                                                                                                                </td>
                                                                                                                                                                        </tr>
                                                                                                                                                                        <tr>
                                                                                                                                                                                                <td><input type="checkbox" id="vehicle1" name="vehicle1" value=" " /> </td>
                                                                                                                                                                                                <td> شهري </td>
                                                                                                                                                                                                <td data-th="رقم الهاتف "> 58 <br /> عدد المشتركين </td>
                                                                                                                                                                                                <td data-th="الجنس"><Icon icon="ph:gender-male-thin" width="20" height="20" /> <br />  ذكر </td>
                                                                                                                                                                                                <td data-th="الوزن"><label htmlFor=""> 40,000</label> <br /> الرسوم </td>
                                                                                                                                                                                                <td data-th="button">
                                                                                                                                                                                                                        <button>< a href='/Edit_home' className='but'>تعديل</ a ></button>
                                                                                                                                                                                                </td>
                                                                                                                                                                        </tr>




                                                                                                                                                </tbody>
                                                                                                                        </table>
                                                                                                                        <br />

                                                                                                                        <a href=" " id='aa'>حذف الأشتراكات المحددة  </a>

                                                                                                </div>
                                                                        </div>


                                                </div>
                        )
}

export default Participant