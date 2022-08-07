import { TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useCallback, useRef, useState } from "react";
import axios from "axios";

const TodoTitle = ({ todoId, title }: { todoId: string; title: string }) => {
	const [edit, setEdit] = useState(false);
	const [newTitle, setNewTitle] = useState(title);

	const mutation = useMutation(() => {
		return axios.put(`http://localhost:8000/todos/${todoId}`, {
			title: newTitle,
		});
	});

	return (
		<>
			{edit ? (
				<TextField
					onBlur={() => setEdit(false)}
					autoFocus
					value={newTitle}
					style={{ width: "100%" }}
					placeholder="Todo title"
					onChange={(e) => setNewTitle(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							mutation.mutate();
						}
					}}
				/>
			) : (
				<Typography
					id="modal-modal-title"
					variant="h5"
					component="h2"
					onClick={() => setEdit(true)}
				>
					{title}
				</Typography>
			)}
		</>
	);
};

export default TodoTitle;
