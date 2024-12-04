import React from "react";

const MeetingList = ({ meetings }) => {
  return (
    <div className="card mt-4 shadow p-4">
      <h2>List of Created Meetings</h2>

      <table className="table table-striped table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Meeting Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{meeting.title}</td>
              <td>{meeting.date}</td>
              <td>{meeting.time}</td>
              <td>{meeting.level}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>

                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingList;
