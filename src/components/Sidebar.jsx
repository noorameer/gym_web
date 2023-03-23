import React from 'react';
import { FaRegFileAlt, } from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri"
import { GrAdd } from "react-icons/gr"
import { TbReport, TbLogout } from "react-icons/tb"
import { NavLink } from 'react-router-dom';
import '../js/sidebar'
const Sidebar = ({ children }) => {

                        const menuItem = [
                                                {
                                                                        path: "/home",
                                                                        name: "قائمة المشتركين",
                                                                        icon: <FaRegFileAlt />
                                                }, {
                                                                        path: "/adduser",
                                                                        name: "أضافة مشترك",
                                                                        icon: <GrAdd />
                                                },
                                                {
                                                                        path: "/participant",
                                                                        name: "قائمة الأشتراكات",
                                                                        icon: <FaRegFileAlt />
                                                }, {
                                                                        path: "/add_participant",
                                                                        name: "أضافة أشتراك",
                                                                        icon: <GrAdd />
                                                },
                                                {
                                                                        path: "/trainers_list",
                                                                        name: "قائمة المدربين",
                                                                        icon: <FaRegFileAlt />
                                                }, {
                                                                        path: "/add_trainers",
                                                                        name: "أضافة مدرب",
                                                                        icon: < GrAdd />
                                                },
                                                {
                                                                        path: "/device",
                                                                        name: "قائمة الأجهزة الرياضية",
                                                                        icon: <FaRegFileAlt />
                                                }, {
                                                                        path: "/add_device",
                                                                        name: "أضافة جهاز",
                                                                        icon: < GrAdd />
                                                },
                                                {
                                                                        path: "/report",
                                                                        name: " التقارير  ",
                                                                        icon: <TbReport />
                                                }, {
                                                                        path: "/login",
                                                                        name: " خروج ",
                                                                        icon: <TbLogout />
                                                },
                        ]



                        return (
                                                <div className="container">
                                                                        <i className="fa-menu fa fa-bars fa-2x"></i>
                                                                        <div className="sidebar" >

                                                                                                <div className="top_section">
                                                                                                                        <h2 className="logo">Dashboard</h2>
                                                                                                                        <div className="bars">
                                                                                                                                                <RiDashboardLine />

                                                                                                                        </div>

                                                                                                </div>

                                                                                                {
                                                                                                                        menuItem.map((item, index) => (

                                                                                                                                                <NavLink to={item.path} key={index} className="link" activeclassName="active" >
                                                                                                                                                                        <div className="icon">{item.icon}</div>
                                                                                                                                                                        <div className="link_text">{item.name}</div>

                                                                                                                                                </NavLink>
                                                                                                                        ))
                                                                                                }

                                                                        </div>
                                                                        <main>{children}</main>

                                                </div>
                        );
};

export default Sidebar;
