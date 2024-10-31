import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

function App() {
	const sampleEmployee = {
		name: {
			first: "Charlie",
			last: "Thompson",
		},
		email: "charlie.thompson@example.com",
		picture: {
			medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
		},
	};

	const [employee, setEmployee] = useState(sampleEmployee);

	const getEmployee = () => {
		fetch("https://randomuser.me/api?nat=en")
			.then((response) => response.json())
			.then((data) => {
				setEmployee(data.results[0]);
			});
	};

	return (
		<section>
			<div className="App">
				<EmployeeCard employee={employee} />
			</div>
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</section>
	);
}

export default App;
