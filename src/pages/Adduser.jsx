import React from 'react'
import '../css/Adduser.css'

function Add_user() {

                        return (
                                                <div className="Add_user">
                                                                        <h1 className="heading"> أضافة مشترك </h1>
                                                                        <img src="img/img_avatar.png" alt=" " id='img'></img>
                                                                        <section className="order" id="order">
                                                                                                <form action="">


                                                                                                                        <div className="box-container">

                                                                                                                                                <div className="box">
                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span>  الاسم الكامل * </span>
                                                                                                                                                                                                <input type="text" placeholder=" أدخل الأسم هنا" />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> رقم الهاتف * </span>
                                                                                                                                                                                                <input type="phone" placeholder=" " />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> العمر * </span>
                                                                                                                                                                                                <input type="number" placeholder=" " />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span>تاريخ  الأنظمام *  </span>
                                                                                                                                                                                                <input type="date" placeholder=" " />
                                                                                                                                                                        </div>
                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> النشاط * </span>
                                                                                                                                                                                                <input type="text" placeholder=" " />
                                                                                                                                                                        </div>
                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> رسوم التسجيل *  </span>
                                                                                                                                                                                                <input type="text" placeholder=" " />
                                                                                                                                                                        </div>

                                                                                                                                                </div>

                                                                                                                                                <div className="box">
                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span>نوع الأشتراك *   </span>
                                                                                                                                                                                                <input type="number" placeholder=" " />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span>الطول </span>
                                                                                                                                                                                                <input type="number" placeholder=" " />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> الوزن </span>
                                                                                                                                                                                                <input type="number" />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> العنوان </span>
                                                                                                                                                                                                <input type="text" placeholder=" " />
                                                                                                                                                                        </div>
                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> الملاحظات </span>
                                                                                                                                                                                                <input type="text" />
                                                                                                                                                                        </div>

                                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                        <input type="submit" value=" حفظ  " id="btn" />

                                                                                                </form>

                                                                        </section>
                                                </div>
                        )
}

export default Add_user
