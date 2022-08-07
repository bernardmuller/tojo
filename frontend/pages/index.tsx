import {
	Box,
	Checkbox,
	createTheme,
	FormControl,
	InputAdornment,
	OutlinedInput,
	Stack,
	TextField,
	ThemeProvider,
	Typography,
} from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import DetailModal from "../components/DetailModal";
import Header from "../components/Header";
import NewTodo from "../components/NewTodo";
import TodosList from "../components/TodosList";
import theme from "../styles/themes";

const queryClient = new QueryClient();

const Home: NextPage = () => {
	const [showDetail, setShowDetail] = useState(false);
	const [activeTodo, setActiveTodo] = useState<string | undefined>(undefined);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Box
					display="flex"
					justifyContent="center"
					style={{
						backgroundColor: "#393e46",
						height: "100vh",
						overflowY: "scroll",
						position: "relative",
					}}
				>
					<Header />
					<Stack height="100%" width="100%" maxWidth="600px">
						<Head>
							<link rel="icon" href="/favicon.ico" />
						</Head>

						{activeTodo && (
							<DetailModal
								onClose={() => setActiveTodo(undefined)}
								open
								todoId={activeTodo}
							/>
						)}

						<Stack px={3} pt="4rem" spacing={1} width="100%">
							<NewTodo />
							<TodosList
								onCheck={(id: string) => {
									// setShowDetail(true);
									setActiveTodo(id);
								}}
							/>
						</Stack>
					</Stack>
				</Box>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default Home;
