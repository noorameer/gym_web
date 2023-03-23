import React from 'react'
import '../css/Add_device.css'

function Add_device() {

                        return (
                                                <div className="Add_device">
                                                                        <h1>أضافة جهاز</h1>
                                                                        <img src="img/device.jpg" alt=" " id='img_device' ></img>

                                                                        <section className="order" id="order_device">


                                                                                                <form action="">

                                                                                                                        <div className="box-container">
                                                                                                                                                <div className="box">
                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span>  الاسم الكامل *</span><br />
                                                                                                                                                                                                <input type="text" placeholder=" أدخل الأسم هنا" />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> رقم الهاتف *</span><br />
                                                                                                                                                                                                <input type="phone" placeholder=" " />
                                                                                                                                                                        </div>
                                                                                                                                                </div>

                                                                                                                        </div>
                                                                                                                        <input type="submit" value=" حفظ  " id="btn3" /><br />
                                                                                                </form>

                                                                        </section>
                                                </div>
                        )
}

export default Add_device
