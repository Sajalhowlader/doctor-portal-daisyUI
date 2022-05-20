import React, { useState } from "react";
import { useQuery } from "react-query";
import Preloader from "../Shared/Preloader/Preloader";

const ManageDoctor = () => {
  //   const [doctor, setDoctor] = useState([])

  const { data: allDoctor, isLoading } = useQuery("doctor", () =>
    fetch("http://localhost:5000/doctor").then((res) => res.json())
  );

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div>
      <h1 className="text-2xl text-center text-emerald-600">Manage Doctor</h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Si.No</th>
              <th>Pic</th>
              <th>Name</th>
              <th>Email</th>
              <th>TreatMent Name</th>
            </tr>
          </thead>
          <tbody>
            {allDoctor.map((doctor, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  {" "}
                  <div class="avatar">
                    <div class="w-12">
                      <img src={doctor.doctorImg} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.doctorName}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
