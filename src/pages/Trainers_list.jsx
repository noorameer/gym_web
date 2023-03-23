import React from 'react'
// import Sidebar from './Sidebar'
import '../css/Trainers_list.css'
// import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
function Trainers_list() {

                        return (

                                                <div className="Trainers_list">
                                                                        <h1>قائمة المدربين</h1>                                                                        <div className="row">
                                                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                                                                        <table className="table_custom_1">

                                                                                                                                                <tbody>
                                                                                                                                                                        <tr>
                                                                                                                                                                                                <td><input type="checkbox" name="vehicle1" value=" " /> <img src="img/img_avatar.png" alt=" " ></img>  مصطفى </td>
                                                                                                                                                                                                <td data-th="رقم الهاتف "> <Icon icon="ph:phone" width="20" height="20" /> <br /> 0780000000 </td>
                                                                                                                                                                                                <td data-th="النشاط"> <Icon icon="material-symbols:check-circle-outline-rounded" color="green" width="20" height="20" /> <br /> النشاط</td>
                                                                                                                                                                                                <td data-th="الراتب"><label htmlFor=""> الراتب</label> <br /> 40,000 </td>
                                                                                                                                                                                                <td data-th="button">
                                                                                                                                                                                                                        <button>< a href='/Edit_home' className='but'>تعديل</ a ></button>
                                                                                                                                                                                                </td>
                                                                                                                                                                        </tr>
                                                                                                                                                                        <tr>
                                                                                                                                                                                                <td><input type="checkbox" name="vehicle1" value=" " /> <img src="img/img_avatar.png" alt=" " ></img>  مصطفى </td>
                                                                                                                                                                                                <td data-th="رقم الهاتف "> <Icon icon="ph:phone" width="20" height="20" /> <br /> 0780000000 </td>
                                                                                                                                                                                                <td data-th="النشاط"> <Icon icon="material-symbols:check-circle-outline-rounded" color="green" width="20" height="20" /> <br /> النشاط</td>
                                                                                                                                                                                                <td data-th="الراتب"><label htmlFor=""> الراتب</label> <br /> 40,000 </td>
                                                                                                                                                                                                <td data-th="button">
                                                                                                                                                                                                                        <button>< a href='/Edit_home' className='but'>تعديل</ a ></button>
                                                                                                                                                                                                </td>
                                                                                                                                                                        </tr>
                                                                                                                                                                        <tr>
                                                                                                                                                                                                <td><input type="checkbox" name="vehicle1" value=" " /> <img src="img/img_avatar.png" alt=" " ></img>  مصطفى </td>
                                                                                                                                                                                                <td data-th="رقم الهاتف "> <Icon icon="ph:phone" width="20" height="20" /> <br /> 0780000000 </td>
                                                                                                                                                                                                <td data-th="النشاط"> <Icon icon="material-symbols:check-circle-outline-rounded" color="green" width="20" height="20" /> <br /> النشاط</td>
                                                                                                                                                                                                <td data-th="الراتب"><label htmlFor=""> الراتب</label> <br /> 40,000 </td>
                                                                                                                                                                                                <td data-th="button">
                                                                                                                                                                                                                        <button>< a href='/Edit_home' className='but'>تعديل</ a ></button>
                                                                                                                                                                                                </td>
                                                                                                                                                                        </tr>
                                                                                                                                                                        <tr>
                                                                                                                                                                                                <td><input type="checkbox" name="vehicle1" value=" " /> <img src="img/img_avatar.png" alt=" " ></img>  مصطفى </td>
                                                                                                                                                                                                <td data-th="رقم الهاتف "> <Icon icon="ph:phone" width="20" height="20" /> <br /> 0780000000 </td>
                                                                                                                                                                                                <td data-th="النشاط"> <Icon icon="material-symbols:check-circle-outline-rounded" color="green" width="20" height="20" /> <br /> النشاط</td>
                                                                                                                                                                                                <td data-th="الراتب"><label htmlFor=""> الراتب</label> <br /> 40,000 </td>
                                                                                                                                                                                                <td data-th="button">
                                                                                                                                                                                                                        <button>< a href='/Edit_home' className='but'>تعديل</ a ></button>
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

export default Trainers_list