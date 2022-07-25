import React, { useState  } from 'react';
import Multiselect from "multiselect-react-dropdown";
//import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
 
import './Home.css'

const Home = () => {
	//const navigate = useNavigate()
	 
	 

	const [food, setFood] = useState([  "HTML5", "CSS3", "BOOTSTRAP5", "JAVASCRIPT", "REACT JS", "REDUX"])
   

 
	return (
	<>

		<div className='container'>
			<div className='container-fluid'>
				<div className="main-card">
				 
					<center><h5>Single selector</h5></center>
					<Multiselect
						displayValue="title"
						onRemove={(event) =>{
							console.log(event);
						}}
						onSelect={(event) =>{
							console.log(event);
						}}
						options={[
							{
							id: ' 1',
							title: 'HTML5'
							},
							{
							id: '2',
							title:'CSS3'
							},
							{
							id: '3',
							title:'JAVASCRIPT'
							},
							{
							id: '4',
							title:'BOOTSTRAP5'
							},
							{
							id: '3',
							title:'REACTJS'
							}
						]}
						singleSelect
						/>

					
					<center><h4>Multiselect</h4></center>
					<Multiselect
					
						isObject={false}
						onRemove={ (event) => {
							console.log(event);
							}}
						onSelect={ (event) => {
							console.log(event);
							}}
						options={food}
						showCheckbox
					/>
					 
                </div>
			</div>
			 
		</div>
		 
	</>
  )
}

export default Home