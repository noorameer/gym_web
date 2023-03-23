import React from 'react'
import '../css/Add_paricipant.css'

function Add_participant() {
                        return (
                                                <div className="Add_participant">
                                                                        <h1>أضافة أشتراك</h1>
                                                                        <section className="order" id="orderr">
                                                                                                <form action="">
                                                                                                                        <div className="box-container">
                                                                                                                                                <div className="box" id='box'>
                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span>  الاسم </span><br />
                                                                                                                                                                                                <input type="text" placeholder="الاسم " />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> الرسوم</span><br />
                                                                                                                                                                                                <input type="number" placeholder="  الرسوم" />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> المدة </span><br />
                                                                                                                                                                                                <input type="text" placeholder=" المدة " />
                                                                                                                                                                        </div>

                                                                                                                                                                        <div className="inputBox">
                                                                                                                                                                                                <span> الجنس </span>
                                                                                                                                                                                                <div className="inputBox">
                                                                                                                                                                                                                        <input type="radio" placeholder=" أنثى " id='radio' />
                                                                                                                                                                                                                        <span> أنثى </span>
                                                                                                                                                                                                                        <input type="radio" placeholder=" ذكر " id='radio' />
                                                                                                                                                                                                                        <span> ذكر </span>
                                                                                                                                                                                                </div>
                                                                                                                                                                        </div>
                                                                                                                                                </div>


                                                                                                                        </div>

                                                                                                                        <input type="submit" value=" حفظ  " id="btn2" /><br />
                                                                                                </form>

                                                                        </section>

                                                </div>
                        )
}

export default Add_participant
