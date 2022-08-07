import { IconButton, Stack, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MdSave } from "react-icons/md";

const NewTodo = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const mutation = useMutation((newTodo) => {
		return axios.post(`http://localhost:8000/todos`, newTodo);
	});

	const onSubmit = (data: { title: string }) => {
		console.log(data);
		mutation.mutate(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack direction="row" alignItems="center">
				<TextField
					id="standard-basic"
					label="New todo"
					variant="standard"
					{...register("title", { required: true })}
				/>
				<IconButton type="submit">
					<MdSave size={25} />
				</IconButton>
			</Stack>
		</form>
	);
};

export default NewTodo;
