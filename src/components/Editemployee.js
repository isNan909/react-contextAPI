import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from "react-router-dom";

export const Editemployee = (route) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [designation, setDesignation] = useState('');
    const { employees } = useContext(GlobalContext);
    let history = useHistory();

    useEffect(() => {
        const employeeId = route.match.params.id;
        const currentId = employees.filter(x => {
            return x.id === parseInt(employeeId);
        });
        console.log(currentId);
    });

    const onSubmit = e => {
        e.preventDefault();
        //update list
        //redirect to /home
        history.push('/');
    }

    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name of employee
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter location" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                            Designation
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={designation} onChange={(e) => setDesignation(e.target.value)} type="text" placeholder="Enter designation" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                            Edit Employee
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}