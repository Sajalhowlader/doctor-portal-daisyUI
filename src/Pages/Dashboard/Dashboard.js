import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-side-ber" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col ">
                {/* <!-- Page content here --> */}
                <h1 className=' text-3xl text-blue-500 text-center font-bold mb-6'>Your Dashboard</h1>

                <Outlet />

                {/* <label for="dashboard-side-ber" class="btn btn-primary drawer-button lg:hidden"></label> */}

            </div>
            <div class="drawer-side ">
                <label for="dashboard-side-ber " class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-40  bg-slate-900 text-white">
                    {/* {      <!-- Sidebar content here -->} */}
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/dashboard/review">My Review</Link></li>
                    <li>{
                        admin && <>
                            <Link to="/dashboard/allUsers">All Users</Link>
                            <Link to="/dashboard/addDoctor">Add Doctor</Link>
                        </>
                    }</li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;