import React from 'react'
// import '../css/Edit.css'

function Edit() {

                        return (
                                                <div className="Edit">
                                                                        {/* <Sidebar /> */}

                                                                        <section className="order" id="order">


                                                                                                <form action="">

                                                                                                                        <div className="box-container">
                                                                                                                                                <h1 className="heading"> تعديل </h1>
                                                                                                                                                <img src="img/img_avatar.png" alt=" " ></img>
                                                                                                                                                <div className="box">
                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span>  الاسم الكامل *</span>
                                                                                                                                                                                                <input type="text" placeholder=" أدخل الأسم هنا" />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> رقم الهاتف *</span>
                                                                                                                                                                                                <input type="phone" placeholder=" " />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> العمر *</span>
                                                                                                                                                                                                <input type="number" placeholder=" " />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span>تاريخ  الأنظمام * </span>
                                                                                                                                                                                                <input type="date" placeholder=" " />
                                                                                                                                                                        </div>
                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> النشاط *</span>
                                                                                                                                                                                                <input type="text" placeholder=" " />
                                                                                                                                                                        </div>
                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> رسوم التسجيل * </span>
                                                                                                                                                                                                <input type="text" placeholder=" " />
                                                                                                                                                                        </div>

                                                                                                                                                </div>

                                                                                                                                                <div className="box">
                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span>نوع الأشتراك *  </span>
                                                                                                                                                                                                <input type="number" placeholder=" " />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span>الطول</span>
                                                                                                                                                                                                <input type="number" placeholder=" " />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> الوزن</span>
                                                                                                                                                                                                <input type="number" />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> العنوان</span>
                                                                                                                                                                                                <input type="text" placeholder=" " />
                                                                                                                                                                        </div>
                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> الملاحظات</span>
                                                                                                                                                                                                <input type="text" />
                                                                                                                                                                        </div>

                                                                                                                                                </div>

                                                                                                                        </div>
                                                                                                                        <input type="submit" value=" حفظ التغييرات " className="btn" /><br />
                                                                                                                        <a href="./pages/Home.jsx">الغاء جميع التغييرات</a>
                                                                                                </form>

                                                                        </section>
                                                </div>
                        )
}

export default Edit
