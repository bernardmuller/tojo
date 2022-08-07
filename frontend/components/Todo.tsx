import { Checkbox, Stack, Typography } from "@mui/material";
import React from "react";

const Todo = ({
	data,
	onCheck,
}: {
	data: { id: string; title: string; completed: boolean };
	onCheck: () => any;
}) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			key={data?.id}
			spacing={1}
			width="100%"
		>
			<Stack direction="row" alignItems="center" width="100%">
				<Checkbox checked={data?.completed} onChange={onCheck} />
				<Typography
					fontFamily="Helvetica"
					color="#f7f7f7"
					fontSize="1rem"
				>
					{data?.title}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default Todo;
