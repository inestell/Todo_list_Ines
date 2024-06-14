import React, {useState} from "react";

const Home = () => {
	const[task, setTask] = useState("");
	const [list, setList] = useState([]);

	const addTask = (e) => {
		if(e.key === 'Enter') {
			setList([...list, task]);
			setTask("");
		}
	};

	const deleteTask = (index) => {
		const updatedList = list.filter((el, i) => i !== index);
		setList(updatedList);
	};

	return (
		<div className="container">
			<h1 className="text-center">Todos</h1>
			<input placeholder={list.length !== 0 ? "What needs to be done?" : "No tasks, add a task"} 
					type="text" 
					value={task} 
					onChange={(e) => setTask(e.target.value)} 
					onKeyUp={addTask} />
			<ul>
				{list.map((item, index) => 
					<li key={index}>
						{item}
						<span className="hidden"
							onClick={() => deleteTask(index)}>✕</span>
					</li>)}
			</ul>
			<p className="info-below">{list.length} item left</p>
		</div>
	)
};

export default Home;
