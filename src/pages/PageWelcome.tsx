import { useEffect, useState } from "react";
import { IEmployee } from "../interfaces.ts";
import * as config from "../config";
import axios from "axios";

export const PageWelcome = () => {
	const [employees, setEmployees] = useState<IEmployee[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${config.backendUrl()}/employees`);
			const _employees = response.data;
			setEmployees(_employees);
		})();
	}, []);

	return (
		<>
			<h2 className="text-xl mb-3">There are {employees.length} employes:</h2>
			<ul className="list-disc ml-6">
				{employees.map(employee => {
					return (
						<li key={employee.employeeID}><span className="font-semibold">{employee.firstName} {employee.lastName}</span> - {employee.title}</li>
					)
				})}
			</ul>
		</>
	);
};
