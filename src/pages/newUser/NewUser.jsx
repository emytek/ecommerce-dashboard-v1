import React from 'react'
import './NewUser.css'

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUfserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label >Username</label>
                <input type="text" placeholder='John kay' />
            </div>

            <div className="newUserItem">
                <label >Email</label>
                <input type="email" placeholder='john@gmail.com' />
            </div>

            <div className="newUserItem">
                <label >Password</label>
                <input type="email" placeholder='john@gmail.com' />
            </div>

            <div className="newUserItem">
                <label >Phone</label>
                <input type="text" placeholder='+45245 36728' />
            </div>

            <div className="newUserItem">
                <label >Address</label>
                <input type="text" placeholder='New York | USA' />
            </div>

            <div className="newUserItem">
                <label >Gender</label>
                <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="Male">Male</label>
                    <input type="radio" name="gender" id="Female" value="Female" />
                    <label for="Female">Female</label>
                    <input type="radio" name="gender" id="others" value="others" />
                    <label for="Others">Others</label>
                </div>
            </div>

            <div className="newUserItem">
                <label>Active</label>
                <select name="active" id="active" className="newUserSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>

    </div>
  )
}
