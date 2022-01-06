import { Box, Grid, Rating, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: {
						variant: "body2",
					},
					style: {
						fontSize: 11,
					},
				},
				{
					props: {
						variant: "body3",
					},
					style: {
						fontSize: 9,
					},
				},
			],
		},
	},
});

function TourCard({
	tour: { image, name, duration, rating, numberOfReviews, price },
}) {
	return (
		<Grid item xs={3}>
			<ThemeProvider theme={theme}>
				<Paper elevation={3} square variant="outlined">
					<img src={image} alt="Niagara Falls" className="img" />
					<Box paddingX={1}>
						<Typography component="h2" variant="subtitle1">
							{name}
						</Typography>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<AccessTime sx={{ width: 12.5 }} />
							<Typography
								variant="body2"
								component="p"
								marginLeft={0.5}
							>
								{duration} Hours
							</Typography>
						</Box>
						<Box
							sx={{ display: "flex", alignItems: "center" }}
							marginTop={3}
						>
							<Rating
								name="read-only"
								value={rating}
								readOnly
								precision={0.5}
								size="small"
							/>
							<Typography
								variant="body2"
								component="p"
								marginLeft={0.5}
							>
								{rating}
							</Typography>
							<Typography
								variant="body3"
								component="p"
								marginLeft={0.5}
							>
								({numberOfReviews} Reviews)
							</Typography>
						</Box>
						<Box>
							<Typography
								variant="h6"
								component="h3"
								marginLeft={0}
							>
								From C ${price}
							</Typography>
						</Box>
					</Box>
				</Paper>
			</ThemeProvider>
		</Grid>
	);
}

export default TourCard;
