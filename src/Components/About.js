import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import { Grid, Tooltip } from '@material-ui/core';
import RingVolumeSharpIcon from '@material-ui/icons/RingVolumeSharp';
import Image1 from './Images/1st.PNG'
import Image2 from './Images/2nd.PNG'
import Image3 from './Images/3rd.PNG'


const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		marginTop: '30px',
		justifyContent: 'center',
		height: '470px'
	},
	media: {
		height: '100px'
	},
	
	image: {
		flex: 1,
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	}
});

export default function About() {
	const classes = useStyles();

	return (
		<Grid container >
			
			<Grid item xs={12} sm={6} md={3} lg={3} style={{ marginLeft: '100px' }}>
				<Card className={classes.root} showsHorizontalScrollIndicator={false}>
					<CardActionArea>
						<img src={Image1} height="200px"/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
							Robert Greenberg – CEO, Founder
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Robert Greenberg has been an innovator in the footwear industry for more than 40 years. With a combination of savvy marketing and advertising campaigns, innovative product launches and strategic global growth, Mr. Greenberg has built Skechers into a $4.6 billion global brand.					</Typography>
						</CardContent>
						<CardActions>
							<Button size="small" >
								<Tooltip title="Share"><ShareTwoToneIcon style={{ marginLeft: '260' }} /></Tooltip>
							</Button>
						</CardActions>
					</CardActionArea>
				</Card>
			</Grid>

			<Grid item xs={12} sm={6} md={3} lg={3}  style={{ marginLeft: '40px' }}>
				<Card className={classes.root}>
					<CardActionArea>
					<img src={Image2} height="200px" />
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								Michael Greenberg – President, Co-Founder
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Michael Greenberg is a 30-year veteran of the footwear industry. He played a vital role in its growth – from the first Skechers store lease 27 years ago to the brand’s expansion across Asia. Michael Greenberg grew up in Brooklyn, New York and graduated from Wesleyan University.
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small" >
								<Tooltip title="Share"><ShareTwoToneIcon style={{ marginLeft: '260' }} /></Tooltip>
							</Button>
						</CardActions>
					</CardActionArea>
				</Card>
			</Grid>

			<Grid item xs={12} sm={6} md={6} lg={3} style={{ marginLeft: '40px' }}>
				<Card className={classes.root}>

					<CardActionArea>
					<img src={Image3} height="200px" />
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								John Vandemore <br />– CFO
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								John Vandemore is responsible for overseeing the Company’s filing obligations before the United States Securities and Exchange Commission, and for directing the Company’s overall financial policies, including accounting, budget, credit, insurance, tax, and treasury.
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small" >
								<Tooltip title="Share"><ShareTwoToneIcon style={{ marginLeft: '260' }} /></Tooltip>
							</Button>
						</CardActions>
					</CardActionArea>
				</Card>
			</Grid>
			
		</Grid>
	);
}
