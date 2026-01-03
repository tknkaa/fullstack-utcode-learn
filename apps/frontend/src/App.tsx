import { useState } from "react";

export default function App() {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const [email, setEmail] = useState("");
	const sayHello = async () => {
		const res = await fetch("http://localhost:3000/");
		const text = await res.text();
		alert(text);
	};
	const createUser = async () => {
		const res = await fetch("http://localhost:3000/users", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name,
				age,
				email,
			}),
		});
		const users = await res.json();
		setEmail("");
		setAge(0);
		setEmail("");
		console.log(users);
	};
	return (
		<>
			<button onClick={sayHello}>say hello</button>
			<input
				placeholder="name"
				onChange={(e) => {
					setName(e.target.value);
				}}
				type="text"
			/>
			<input
				placeholder="age"
				onChange={(e) => {
					setAge(Number(e.target.value));
				}}
				type="number"
			/>
			<input
				placeholder="email"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				type="email"
			/>
			<button onClick={createUser}>create user</button>
		</>
	);
}
