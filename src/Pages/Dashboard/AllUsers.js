import React from 'react';
import { useQuery, } from 'react-query'
import Preloader from '../Shared/Preloader/Preloader';

const AllUsers = () => {
    const { data: allUsers, isLoading, refetch } = useQuery(['user'], () => fetch('http://localhost:5000/user', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))



    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('admin add successfully')
                    refetch()
                }
            })
    }
    if (isLoading) {
        return <Preloader />
    }
    console.log(allUsers);
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td> {
                                    user.role !== "admin" && <button onClick={() => makeAdmin(user.email)} class="btn btn-xs bg-slate-900 text-white hover:text-white hover:bg-slate-800">Make Admin</button>
                                }</td>

                                <td> <button class="btn btn-xs bg-slate-900 text-white hover:text-white hover:bg-slate-800">Delete Admin</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;