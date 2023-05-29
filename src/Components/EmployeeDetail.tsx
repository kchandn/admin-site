import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const employeeDetail = {
    code: "e001",
    name: "Tom",
    gender: "Male",
    anualSalary: 5500,
    dateofBirth: "25/6/1988",
  };
  return (
    <div>
      <h1>Employee Details Page {id}</h1>
      <div>
        Code : {employeeDetail.code}
        <br></br>
        Name : {employeeDetail.name}
        <br></br>
        gender : {employeeDetail.gender}
        <br></br>
        anualSalary : {employeeDetail.anualSalary}
        <br></br>
        dateofBirth : {employeeDetail.dateofBirth}
        <br></br>
      </div>
    </div>
  );
};

export default EmployeeDetail;
