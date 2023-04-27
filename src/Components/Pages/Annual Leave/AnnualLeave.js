import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Header from "../../Common components/Header/Header";
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';

const defaultState = {
    getEmployeeList: null,
    showLoader: false,
};

const AnnualLeave = () => {
    const baseUrl = ' http://18.181.84.1:5000/api';
    const [state, setState] = useState(defaultState);

    const showSelect = () => {
        document.getElementById('selectDropdown').classList.toggle('show_select');
    }

    const getEmployeeRecordData = () => {
        setState(prevState => ({
            ...prevState,
            showLoader: true,
        }))
        axios.get(`${baseUrl}/getAllEmployee`,
        ).then((response) => {
            setState(prevState => ({
                ...prevState,
                getEmployeeList: response.data.data,
            }))
            setTimeout(() => {
                setState(prevState => ({
                    ...prevState,
                    showLoader: false,
                }))
            }, 500);
        }).catch((error) => {
            console.log(error)
        })
    };

    useEffect(() => {
        getEmployeeRecordData()
    }, []);

    return (
        <>
            {/* <!-- Main Wrape Section Start Here --> */}
            <section className="dashbord-main-info">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        {/* <!-- Left Side Bar Section Start Here --> */}
                        <div className="col-lg-1 p-0"> </div>
                        <div className="col-lg-11">
                            <div className="row">
                                {/* <!-- Top Bar Info Section Start Here --> */}
                                <Header />
                                {/* <!-- Top Bar Info Section End Here --> */}
                                {/* <!-- Working Pattern form start from here --> */}
                                <div className="container">
                                    <div className="row working-time-pattern annual-leave">
                                        <div className="col-md-12">
                                            <div className="heading">
                                                <h3 className="head">Add annual leave for michael</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <form action="">
                                                <div className="col-md-12 first-section">
                                                    <div className="mb-3 row">
                                                        <label for="name" className="col-sm-2 col-form-label">Employee</label>
                                                        <div className="col-sm-3 col-md-3 position-rel">
                                                            <div className="position-rel">
                                                                <input type="text" onClick={showSelect} placeholder="Search or select employee" className="form-control select_employee_btn"
                                                                    id="staticEmail" value="" />
                                                                {state.showLoader && <CircularProgress style={{ height: '35px', width: '35px', position: 'absolute', top: '0px', right: '-50px' }} />}
                                                                <span className="position-abs"><i className="fa fa-search" aria-hidden="true"></i></span>
                                                                <ul className="customSelect" id="selectDropdown">
                                                                    {state.getEmployeeList && state.getEmployeeList.map((Item) => {
                                                                        return (
                                                                            <>
                                                                                <li className="d-flex customSelectItem">
                                                                                    <input id={`employee-${Item.id}`} className="d-none" type="radio" name="selectEmployee" />
                                                                                    <div className="labelElement p-2">
                                                                                        <label for={`employee-${Item.id}`} className="d-flex align-items-center">
                                                                                            <div className="firstLastLetter">{`${Item.first_name.charAt(0)} ${Item.last_name.charAt(0)}`}</div>
                                                                                            <div className="fullName">{`${Item.first_name} ${Item.last_name}`}</div>
                                                                                            <div>
                                                                                                <span className="customRadio"><span className="dot"></span></span>
                                                                                            </div>
                                                                                        </label>
                                                                                    </div>
                                                                                </li>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                        <label for="static" className="col-sm-2 col-form-label">Absence type</label>
                                                        <div className="col-sm-3 col-md-3">
                                                            <select className="form-select form-control" aria-label="Default select example">
                                                                <option selected value="1">Annual leave</option>
                                                                <option value="2">Sickness </option>
                                                                <option value="3">Other</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                        <label for="" className="col-sm-2 col-form-label">Ongoing absence
                                                            <span className="position-rel tooltip_custom">
                                                                <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="16" width="16" viewBox="0 0 32 32" style={{ verticalAlign: 'middle' }}><path d="M13 13s2.6-.012 3.025 0c.825.012 1.475.725 1.475 1.55v8.887c0 .825-.65 1.538-1.475 1.55a1.502 1.502 0 0 1-1.525-1.5v-7.5H13c-.825 0-1.5-.675-1.5-1.5s.675-1.488 1.5-1.488zm3-13C7.175 0 0 7.175 0 16s7.175 16 16 16 16-7.175 16-16S24.825 0 16 0zm0 29C8.838 29 3 23.163 3 16S8.838 3 16 3s13 5.838 13 13-5.837 13-13 13zm1.5-20.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 17.5 8.5z"></path></svg>
                                                                <span className="position-abs">
                                                                    <div>
                                                                        <p>An ongoing absence spans across multiple days. Set an absence as ongoing when you are unsure when the employee will return.</p>
                                                                    </div>
                                                                </span>
                                                            </span>
                                                        </label>
                                                        <div className="col-sm-3 col-md-3">
                                                            <input type="radio" id="sickLeaveYes" className="d-none custom_radio_input" name="ongoingLeave" />
                                                            <label for="sickLeaveYes" className="custom_label">
                                                                <span className="parent_custom_radio">
                                                                    <span className="d-flex align-items-center justify-content-center custom_radio"></span>
                                                                </span>
                                                                Yes
                                                            </label>
                                                            <input type="radio" id="sickLeaveNo" className="d-none custom_radio_input" name="ongoingLeave" checked />
                                                            <label for="sickLeaveNo" className="custom_label">
                                                                <span className="parent_custom_radio">
                                                                    <span className="d-flex align-items-center justify-content-center custom_radio"></span>
                                                                </span>
                                                                No
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                        <label for="name" className="col-sm-2 col-form-label">Start</label>
                                                        <div className="col-sm-3 col-md-3">
                                                            <input type="date" placeholder="Pattern Name" className="form-control"
                                                                id="staticEmail" value="" />
                                                        </div>
                                                        <div className="col-md-2 d-none">
                                                            <select className="form-select form-control" aria-label="Default select example">
                                                                <option selected="" value="1">Full Day</option>
                                                                <option value="2">Second Half</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                        <label for="name" className="col-sm-2 col-form-label">End</label>
                                                        <div className="col-sm-3 col-md-3">
                                                            <input type="date" placeholder="Select date" className="form-control"
                                                                id="staticEmail" value="" />
                                                        </div>
                                                        <div className="col-md-2 d-none">
                                                            <select className="form-select form-control" aria-label="Default select example">
                                                                <option selected="" value="1">Full Day</option>
                                                                <option value="2">Second Half</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                        <label for="name" className="col-sm-2 col-form-label"></label>
                                                        <div className="col-sm-6 col-md-6">
                                                            <div className="d-flex p-3" style={{ backgroundColor: 'rgb(255, 239, 212)' }}>
                                                                <div>
                                                                    <svg width="32" style={{ fill: '#E5801A' }} height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="ms-4 fill-warning-500"><path d="M16 30C8.275 30 2 23.725 2 16C2 8.275 8.275 2 16 2C23.725 2 30 8.275 30 16C30 23.725 23.725 30 16 30ZM16 4C9.387 4 4 9.387 4 16C4 22.613 9.387 28 16 28C22.613 28 28 22.613 28 16C28 9.387 22.613 4 16 4Z"></path><path d="M19 22H17V13C17 12.45 16.55 12 16 12H13C12.45 12 12 12.45 12 13C12 13.55 12.45 14 13 14H15V22H13C12.45 22 12 22.45 12 23C12 23.55 12.45 24 13 24H19C19.55 24 20 23.55 20 23C20 22.45 19.55 22 19 22Z"></path><path d="M17 9C17 9.552 16.552 10 16 10C15.448 10 15 9.552 15 9C15 8.448 15.448 8 16 8C16.552 8 17 8.448 17 9Z"></path></svg>
                                                                </div>
                                                                <div className="ms-3">
                                                                    Existing absences fall within this date range. Check <a href="./personal-detail.html">your profile</a> for more details.
                                                                    <ul>
                                                                        <li><span className="fw-bolder">Annual Leave:</span> Thu, 26th Jan - Sat, 28th Jan</li>
                                                                        <li><span className="fw-bolder">Annual Leave:</span> Sat, 28th Jan - Tue, 31st Jan</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                        <label for="name" className="col-sm-2 col-form-label">Hours deducted</label>
                                                        <div className="col-md-6">
                                                            <div className="col-sm-2 col-md-2">
                                                                <input type="time" placeholder="Select date" className="form-control"
                                                                    id="staticEmail" value="" />
                                                            </div>
                                                            <p className="mt-3">michael's allowance is -12 hours with an average day of 0 hours. We have estimated that 0 hours need to be deducted from the allowance but you can amend this.</p>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                        <label for="select" id="textarea" className="col-sm-2 col-form-label">Notes</label>
                                                        <div className="col-sm-3 col-md-3">
                                                            <textarea name="" placeholder="Notes regarding the absence" id="textarea" cols="10" className="form-control" rows="3"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="button" className="absance-btn">Add absence</button>
                                                        <a className="dash-btn"> <NavLink to="/"> Back to dashboard </NavLink> </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Working Pattern form end here --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Main Wrape Section End Here --> */}
        </>
    )
}

export default AnnualLeave;