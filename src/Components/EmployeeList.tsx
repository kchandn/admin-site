import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();
  const goToDetailPage = () => {
    navigate("/employee-detail/e001");
  };

  const gotoAddUser = () => {
    navigate("/addEmployee");
  };

  const employees = [
    {
      code: "e001",
      name: "Tom",
      gender: "Male",
      anualSalary: 5500,
      dateofBirth: "25/6/1988",
    },
    {
      code: "e002",
      name: "Sam",
      gender: "Male",
      anualSalary: 6700,
      dateofBirth: "25/11/1980",
    },
    {
      code: "e003",
      name: "Ravi",
      gender: "Male",
      anualSalary: 8900,
      dateofBirth: "27/11/1980",
    },
    {
      code: "e001",
      name: "Kaveri",
      gender: "Female",
      anualSalary: 9000,
      dateofBirth: "9/6/1991",
    },
  ];

  return (
    <div>
      <h1>List of employees are given below</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Annula Salary</th>
            <th scope="col">D.O.B</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <>
              <tr>
                <th scope="row">{index}</th>
                <td>{employee.code}</td>
                <td>{employee.name}</td>
                <td>{employee.gender}</td>
                <td>{employee.anualSalary}</td>
                <td>{employee.dateofBirth}</td>
                <td>
                  <button type="button" onClick={goToDetailPage}>
                    See Detail
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={gotoAddUser}>
        Add User
      </button>
    </div>
  );
};

export default EmployeeList;
