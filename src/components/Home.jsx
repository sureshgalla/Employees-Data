import { useEffect, useState } from "react";

const employeesData = [
  { name: "1 John Doe", company: "Acme Inc." },
  { name: "2 Jane Smith", company: "Widgets Co." },
  { name: "3 Bob Johnson", company: "XYZ Corp." },
  { name: "4 Alice Lee", company: "BigCo LLC" },
  { name: "5 Mike Brown", company: "MegaCorp" },
  { name: "6 Sarah Williams", company: "Gizmos Ltd." },
  { name: "7 David Kim", company: "Awesome Co." },
  { name: "8 Karen Chen", company: "Wonderful Inc." },
  { name: "9 David Kim", company: "Awesome Co." },
  { name: "10 Karen Chen", company: "Wonderful Inc." },
  { name: "11 David Kim", company: "Awesome Co." },
  { name: "12 Karen Chen", company: "Wonderful Inc." },
  { name: "13 Karen Chen", company: "Wonderful Inc." },
  { name: "14 Karen Chen", company: "Wonderful Inc." },
];

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [startIdx, setStartIdx] = useState(0);

  useEffect(() => {
    const data = employeesData.slice(startIdx, startIdx + 3);
    setEmployees(data);
  }, [startIdx]);

  const showNext = () => {
    if (startIdx + 3 > employeesData.length) {
      alert("no more employees");
    } else {
      setStartIdx(startIdx + 3);
    }
  };

  const showPrev = () => {
    if (startIdx <= 0) {
      alert("no more previous employes");
    } else {
      setStartIdx(startIdx - 3);
    }
  };

  return (
    <div className="container">
      <h1>Employees Data</h1>
      <div className="flex">
        <button onClick={showPrev}>&larr; Previous</button>
        <button onClick={showNext}>Next &rarr; </button>
      </div>
      <ul className="emp-list">
        {employees.map((employee, index) => (
          <li key={index} className="emp">
            <p>
              <strong>Name : </strong> {employee.name}
            </p>
            <p>
              <strong>Company : </strong> {employee.company}
            </p>
          </li>
        ))}
      </ul>
      <p className="text-center">
        Currently showing <strong>{employees.length}</strong> employee details
      </p>
    </div>
  );
};

export default Home;
