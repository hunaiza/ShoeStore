import React from 'react';
import Shoes from './Images/Shoes.jpg'
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '200px',
		display: 'inline-block',
		marginBottom: '30px'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));


// function Home() {

//   return (
// 	<div>
// 		<img className="shoeImage" src={Shoes} width="100%" height="400px" style={{marginTop: '40px'}}/>
// 	</div>
//   );
// }

// export default Home;
export default function Home() {
	const classes = useStyles();
	const [value, setValue] = React.useState('female');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<img className="shoeImage" src={Shoes} width="100%" height="400px" style={{ marginTop: '40px' }} />
			<div className={classes.root}>
			<Accordion style={{ marginTop: '40px' }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Category</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<FormControl component="fieldset">
						<RadioGroup aria-label="category" name="category1" value={value} onChange={handleChange}>
							<FormControlLabel value="Men" control={<Radio />} label="Men" />
							<FormControlLabel value="Women" control={<Radio />} label="Women" />
							<FormControlLabel value="Kids" control={<Radio />} label="Kids" />
							<FormControlLabel value="Aged" control={<Radio />} label="Aged" />
						</RadioGroup>
					</FormControl>
				</AccordionDetails>
			</Accordion>
			
			</div>
		</div>
	);
}