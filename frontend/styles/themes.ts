import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#f8b500",
		},
		secondary: {
			main: "#f50057",
		},
		background: {
			default: "#393e46",
			paper: "#505762",
		},
		text: {
			primary: "#f7f7f7",
			disabled: "rgba(255,255,255,0.85)",
		},
	},
});

export default theme;
