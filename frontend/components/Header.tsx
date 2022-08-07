import { Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
	return (
		<Stack
			direction="row"
			justifyContent="center"
			alignItems="center"
			height="4rem"
			width="100%"
		>
			<Typography
				fontFamily="Helvetica"
				fontSize="1.3rem"
				color="primary"
			>
				ToJo
			</Typography>
		</Stack>
	);
};

export default Header;
