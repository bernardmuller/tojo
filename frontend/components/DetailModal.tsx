import {
	Alert,
	AlertTitle,
	Box,
	Button,
	IconButton,
	Modal,
	Slider,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { MdClose, MdDelete } from "react-icons/md";
import TodoTitle from "./TodoTitle";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "50%",
	bgcolor: "#505762",
	boxShadow: 24,
	p: 4,
	borderRadius: 2,
	color: "white",
	minWidth: 350,
};

const DetailModal = ({
	open,
	onClose,
	todoId,
}: {
	open: boolean;
	onClose: () => void;
	todoId: string;
}) => {
	const [state, setState] = useState({
		difficulty: 5,
		description: "",
	});

	const fetchTodo = useCallback(async (todoId: string) => {
		const response = await fetch(`http://localhost:8000/todos/${todoId}`);
		const todo = await response.json();
		return todo;
	}, []);

	const mutation = useMutation((completedTodo) => {
		return axios.put(`http://localhost:8000/todos/${todoId}`, state);
	});

	const { isLoading, isError, data, error, refetch } = useQuery(
		[`todo-${todoId}`],
		() => fetchTodo(todoId)
	);

	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<>
					{error && (
						<Alert severity="error">
							<AlertTitle>Error</AlertTitle>
							{(error as any)?.message}
						</Alert>
					)}
					{!error &&
						(isLoading ? (
							<Typography color="white">Loading...</Typography>
						) : (
							<>
								<Stack
									direction="row"
									spacing={2}
									justifyContent="space-between"
									alignItems="center"
								>
									<TodoTitle
										todoId={todoId}
										title={data?.title}
									/>
									<IconButton onClick={onClose}>
										<MdClose size={30} />
									</IconButton>
								</Stack>
								<Stack mt={2}>
									<Typography id="modal-modal-title">
										Task difficulty level:
									</Typography>
									<Slider
										aria-label="Temperature"
										defaultValue={state.difficulty}
										valueLabelDisplay="auto"
										step={1}
										marks
										min={0}
										max={10}
										onChange={(e, newValue) =>
											setState((prev) => ({
												...prev,
												difficulty: Array.isArray(
													newValue
												)
													? newValue[0]
													: newValue,
											}))
										}
									/>
								</Stack>
								<Stack width="100%" spacing={1}>
									<>
										<Typography
											id="modal-modal-description"
											sx={{ mt: 2, color: "white" }}
										>
											Describe how the task went:
										</Typography>
										<TextField
											id="outlined-multiline-description"
											multiline
											rows={4}
											placeholder="Start typing..."
											onChange={(e) => {
												setState((prev) => ({
													...prev,
													description: e.target.value,
												}));
											}}
											value={state.description}
										/>
										{mutation.error && (
											<Alert severity="error">
												<AlertTitle>Error</AlertTitle>
												{
													(mutation.error as any)
														.message
												}
											</Alert>
										)}
										<Stack
											direction="row"
											spacing={1}
											justifyContent="space-between"
											pt={2}
										>
											<Button
												variant="contained"
												onClick={() => {
													mutation.mutate();
												}}
												disabled={data?.completed}
											>
												Complete
											</Button>
											<IconButton>
												<MdDelete size={25} />
											</IconButton>
										</Stack>
									</>
								</Stack>
							</>
						))}
				</>
			</Box>
		</Modal>
	);
};

export default DetailModal;
