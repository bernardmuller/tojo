import {
	Box,
	Button,
	Modal,
	Slider,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";

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
	onClose: () => any;
	todoId: string;
}) => {
	const fetchTodo = async () => {
		if (todoId != "0" && open) {
			const todo = await fetch(
				`http://localhost:8000/todos/${todoId}`
			).then((response) => response.json());
			return todo;
		}
	};

	const completeTodo = async () => {
		const todo = await fetch(`http://localhost:8000/todos/${todoId}`).then(
			(response) => response.json()
		);
		return todo;
	};

	const mutation = useMutation((completedTodo) => {
		return axios.delete(`http://localhost:8000/todos/${todoId}`);
	});

	const { isLoading, isError, data, error, refetch } = useQuery(
		["todo"],
		fetchTodo
	);

	useEffect(() => {
		refetch();
	}, [todoId]);

	const handleComplete = () => {};

	if (isLoading) {
		return <Typography color="white">Loading..</Typography>;
	}

	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					{data?.title}
				</Typography>
				<Typography id="modal-modal-title" variant="h6"></Typography>
				<Slider
					aria-label="Temperature"
					defaultValue={30}
					valueLabelDisplay="auto"
					step={10}
					marks
					min={10}
					max={110}
				/>
				<Stack width="100%" spacing={1}>
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
						placeholder="Start typing.."
					/>
					<Button
						variant="contained"
						onClick={() => {
							mutation.mutate({ completed: true });
						}}
					>
						Complete
					</Button>
				</Stack>
			</Box>
		</Modal>
	);
};

export default DetailModal;
