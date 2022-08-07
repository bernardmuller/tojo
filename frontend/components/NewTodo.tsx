import { Alert, AlertTitle, IconButton, Stack, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MdSave } from "react-icons/md";

const NewTodo = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<{ title: string }>();

	const mutation = useMutation((newTodo: { title: string }) => {
		return axios.post(`http://localhost:8000/todos`, newTodo);
	});

	const onSubmit = (data: { title: string }) => {
		mutation.mutate(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{ width: "100%", marginBottom: "0.6rem" }}
		>
			<Stack spacing={1} width="100%">
				<>
					<Stack
						direction="row"
						alignItems="center"
						width="100%"
						spacing={2}
					>
						<TextField
							id="standard-basic"
							label="New todo"
							variant="standard"
							{...register("title", { required: true })}
							style={{ width: "100%" }}
						/>
						<IconButton type="submit" color="primary">
							<MdSave size={25} />
						</IconButton>
					</Stack>
					{mutation.error && (
						<Alert severity="error">
							<AlertTitle>Error</AlertTitle>
							{(mutation.error as any).message}
						</Alert>
					)}
				</>
			</Stack>
		</form>
	);
};

export default NewTodo;
