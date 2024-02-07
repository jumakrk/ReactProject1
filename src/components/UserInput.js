import { useState } from "react";

const UserInput  = () => {
  const [FirstName, setFirstname] = useState("");
  const [LastName, setLastname] = useState("");
  const [Course, setCourse] = useState("");

    return(
      <div>
        <form>
        <label>firstName</label><br></br>
        <input name="firstname" type="text" placeholder="First Name" required value={FirstName} onChange={(e)=>setFirstname(e.target.value)}></input> <br></br>

        <label>lastName</label><br></br>
        <input name="lastname" type="text" placeholder="Last Name" required value={LastName} onChange={(e)=>setLastname(e.target.value)}></input> <br></br>

        <label>course</label><br></br>
        <input name="course" type="text" placeholder="Course" required value={Course} onChange={(e)=>setCourse(e.target.value)}></input> <br></br>

        <button>Save Details</button>
        <p>{FirstName}</p>
        <p>{LastName}</p>
        <p>{Course}</p>
        </form>
      </div>
    )
};
export default UserInput;