import { Box, Container, Typography } from "@mui/material";
import CustomizedAccordions from "../components/CustomizedAccordions";
import ImageCollage from "../components/ImageCollage";

function Tour() {
	return (
		<Container sx={{ width: 900 }}>
			<Typography variant="h3" component="h1" marginTop={3}>
				Explore the world in Vegas
			</Typography>
			<Box marginTop={3} sx={{ display: "flex" }}>
				<img
					src="https://media.timeout.com/images/105124791/750/422/image.jpg"
					alt="World"
					height={325}
				/>
				<ImageCollage />
			</Box>
			<Box>
				<Typography variant="h6" component="h4" marginTop={3}>
					About this ticket
				</Typography>
				<Typography variant="paragraph" component="p" marginTop={3}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Est voluptatem voluptate dignissimos obcaecati! Error modi
					minima quas totam tempora iure, autem consequuntur,
					voluptates odit aspernatur officia similique! Beatae dolore
					reiciendis veniam tenetur itaque atque eum accusantium
					exercitationem accusamus, earum nostrum quam ex et obcaecati
					nemo excepturi culpa debitis fugit voluptate, cum rem
					expedita porro aliquam iure. Atque vitae sequi eaque.
				</Typography>
			</Box>
			<Box marginBottom={10}>
				<Typography
					variant="h6"
					component="h4"
					marginTop={3}
					marginBottom={3}
				>
					Frequently Asked Questions
				</Typography>
				<CustomizedAccordions />
			</Box>
		</Container>
	);
}

export default Tour;
