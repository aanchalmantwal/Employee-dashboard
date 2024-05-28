import React from 'react'
import './Emptable.css'
import { FaUsers, FaMedal} from 'react-icons/fa'
// Importing employee images
import user from '../images/J6103.jpg'
import user1 from '../images/pic1.jpeg'
import user2 from '../images/pic2.jpeg'
import user3 from '../images/pic3.jpeg'
import user4 from '../images/pic4.jpeg'
import user5 from '../images/pic5.jpeg'
import user6 from '../images/pic6.jpeg'
import user7 from '../images/pic8.jpeg'
import user8 from '../images/pic9.jpeg'
import profileIcon from '../images/profileIcon.png';  
// Employee data array
const data = [
    { Rank: 1, Name: "Rakesh Sharma", Designation: "UI/UX Designer", No_of_hours_worked:"7(42)", Changes:"1.5 hrs", Image: user },
    { Rank: 2, Name: "Ankita Thakur", Designation: "HR Recruiter", No_of_hours_worked:"7(41)", Changes:"1.5 hrs", Image: user1},
    { Rank: 3, Name: "Sarah Yadav", Designation: "Product Manager", No_of_hours_worked:"7(40)", Changes:"1.5 hrs", Image: user2 },
    { Rank: 4, Name: "Harsha Shivhare", Designation: "Designer", No_of_hours_worked:"7(37)", Changes:"1.5 hrs", Image: user3},
    { Rank: 5, Name: "Vanhi Rai", Designation: "Video Editor", No_of_hours_worked:"7(37)", Changes:"1.5 hrs" , Image: user4},
    { Rank: 6, Name: "Bhanu Sharma", Designation: "Business Analyst", No_of_hours_worked:"7(32)", Changes:"1.5 hrs", Image: user5},
    { Rank: 7, Name: "Sunil Yadav", Designation: "Developer", No_of_hours_worked:"7(24)", Changes:"1.5 hrs", Image: user6 },
    { Rank: 8, Name: "Akash Roy", Designation: "Business Analyst", No_of_hours_worked:"7(21)", Changes:"1.5 hrs", Image:user7 },
    { Rank: 9, Name: "Rohit Soni", Designation: "Developer", No_of_hours_worked:"7(20)", Changes:"1.5 hrs", Image: user8 },
    { Rank: 10, Name: "Suraj Chauhan", Designation: "Developer", No_of_hours_worked:"7(18)", Changes:"1.5 hrs", Image:user },
]

const Emptable = () => {
  return (
    <div className="emptable">
      {/* Dashboard title with icon */}
        <p className="dashboard-title">
        <div className="icon-container">
          <img src={profileIcon} alt="Icon" className="dashboard-icon" />
        </div>
        Employees Activity Dashboard
             </p>
             {/* Employee data table */}
        <table>
            <thead>
<tr className="header">
    <td></td>
    <td>Rank</td>
    <td>Name</td>
    <td>Designation</td>
    <td>No. of hours worked</td>
    <td>Changes</td>  
</tr>
</thead>
<tbody>
   {/* Mapping through employee data */}
{data.map((val, key) => (
    <tr key={key} className={key % 2 === 0 ? "even-row" : "odd-row"}>
        {/* Render badge if Rank is within top 3 */}
        <th className="badge-column">
        {val.Rank <= 3 && (
                  <FaMedal className={`badge badge-${val.Rank}`} />
                )}
              </th>
              <td>{val.Rank}</td>
               {/* Render employee image and name */}
              <td className="name-column">
              <div className="employee-icon">
              <img src={val.Image} alt={val.Name} className="employee-image" />
                </div> 
                {val.Name}
              </td>
              <td>{val.Designation}</td>
              <td>{val.No_of_hours_worked}</td>
               {/* Render upward or downward triangle based on condition */}
              <td className="changes-column">
                {key === 0 || key === 2 || key === 3 || key === 6 ? (
                  <span className="green-triangle">&#9650;</span> // Green upward triangle
                ) : (
                  <span className="red-triangle">&#9660;</span> // Red downward triangle
                )}
                {val.Changes}
              </td>
            </tr>
))}
</tbody>
</table>
    </div>
  )
}

export default Emptable