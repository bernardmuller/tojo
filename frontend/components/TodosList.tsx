/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {
	FormControl,
	InputAdornment,
	OutlinedInput,
	Stack,
	Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { MdSearch } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import Todo from "./Todo";

const TodosList = ({ onCheck }: { onCheck: (id: string) => any }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const fetchTodoList = async () => {
		const todos = await fetch("http://localhost:8000/todos").then(
			(response) => response.json()
		);
		return todos;
	};

	const { isLoading, data } = useQuery(["todos"], fetchTodoList);

	const todos = data || [];

	// this function is used to filter todos based on the input string the user types in the search field
	const filteredTodos = useMemo(
		() =>
			searchTerm !== ""
				? todos.filter(
						(todo: {
							id: string;
							completed: boolean;
							title: string;
						}) => {
							if (todo.title.toUpperCase().includes(searchTerm)) {
								return todo;
							}
						}
				  )
				: todos,
		[searchTerm, todos]
	);

	return (
		<>
			<FormControl variant="outlined">
				<OutlinedInput
					id="outlined-adornment-search"
					type="text"
					value={searchTerm.toLowerCase()}
					placeholder="Search"
					onChange={(e) => {
						setSearchTerm(e.target.value.toUpperCase());
					}}
					startAdornment={
						<InputAdornment position="start">
							<MdSearch size={30} />
						</InputAdornment>
					}
				/>
			</FormControl>
			<Stack spacing={1.5} width="100%" height="100%" overflow="scroll">
				{isLoading ? (
					<Typography color="#C7C7C7">Loading..</Typography>
				) : (
					<>
						{filteredTodos.map(
							(todo: {
								id: string;
								completed: boolean;
								title: string;
							}) => (
								<Todo
									key={todo.id}
									data={todo}
									onCheck={() => onCheck(todo.id)}
								/>
							)
						)}
					</>
				)}
			</Stack>
		</>
	);
};

export default TodosList;
