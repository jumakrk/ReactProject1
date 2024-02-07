import { useState } from "react";

const UserInput  = () => {
  const [data, setData] = useState; ({
    firstname: '',
    laststname: '',
    course: '',
  })

  const handleInput=(e) => {
    const {name, value} = e.target;
    setData((prev)=>{
      return {...prev, [name] : [value]}
    })
  }

  const handleSubmit=()=> {

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Firstname</label><br/>
        <input type="text" name="firstname" onChange={handleInput} placeholder="First Name"></input><br/>

        <label>Lastname</label><br/>
        <input type="text" name="lasttname" onChange={handleInput} placeholder="Last Name"></input><br/>

        <label>Course</label><br/>
        <input type="text" name="course" onChange={handleInput} placeholder="Course"></input><br/>
      </form>
    </div>
  )
}

export default UserInput;