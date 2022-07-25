import React,{ useState }  from 'react'
import '../components/style.css'
// import axios from 'axios'
//import {Link} from 'react-router-dom';
 
 
const Login = () => {

//const navigate = useNavigate()

const [email, setEmail] = useState('');
const [emailError, setEmailError]=useState('');

const [password, setPassword] = useState('');
const [passwordError, setPasswordError]=useState('');

const [successMsg, setSuccessMsg]=useState('');

 



const handleEmailChange=(e)=>{
	setSuccessMsg('');
	setEmailError('');
	setEmail(e.target.value);
}

const handlePasswordChange=(e)=>{
	setSuccessMsg('');
	setPasswordError('');
	setPassword(e.target.value);
}

// const handleApi = () => {
// 	console.log({email, password})
// 	axios.post('https://reqres.in/api/login', {
// 		email: email,
// 		password: password

// 	}).then(result => {
// 		console.log(result.data)
// 		alert('success')
// 		localStorage.setItem('token', result.data.token)
// 		navigate('/home')
// 	})
// 	.catch(error => {
// 		console.log('service error');
// 		alert(error)
// 	})
// }

const handleFormSubmit=(e)=>{
	e.preventDefault();
	//checking if email is empty
	if(email!==''){
		// check some other condiation 
		const emailRegex=
			/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
		  ;
		//   const passwordRegex=
		//     /^(?=.*[1-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

		if(emailRegex.test(email)){
			setEmailError('');
			if(email==='admin@gmail.com'){
				setEmailError('');
				if(password==="1531"){
					 console.log(password)
					setSuccessMsg('You are successfully logged in');
					 
					 window.location.href = "http://localhost:3001/home"; 
				}else{
					setPasswordError('Password does not match with the email address');
				}
			}else{
				setEmailError("email does not match with our database");
			}
		}else{
			setEmailError('Invaild Email')
		}
	}else(
		setEmailError('Email Required')
	)
	//checking if password is empty
	if(password!==''){
    // do some thing here
	}else{
		setPasswordError('Password Required')
	}
}

 

  return (

	<>
		 <div className='container'>
			<div className='container-fluid'>
				<div className='card'>
					 <div className='loginbox'>
						{/* <img src="" className="avatar"/> */}
						 <h1>Login Here</h1>
						
						 <form className='form-group form' autoComplete='off'
						 onSubmit={handleFormSubmit}
						 >
							
							<p>User Email:</p> 
							<input type="text" className='form-control custom-input' placeholder='Enter Your Email address'  
							onChange={handleEmailChange} value={email}
							 /> 
							 {emailError&&<div className='error-msg'>{emailError}</div>}

							<p>Password:</p> 
							<input type="password" className='form-control custom-input' placeholder='Enter Your Password ' 
							onChange={handlePasswordChange} value={password} maxlength="4"
							/> <br />
							  {passwordError&&<div className='error-password'>{passwordError}</div>}

							 <input type="submit" name="" value="Login" />
							 {successMsg&&
							 <>
							 <div className='success-msg'>{successMsg}</div>
							 </>
							 }
							 
						 </form>
					 </div>
			     </div>
			</div>
		 </div>
	</>
  )
}

export default Login