import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AppContext } from '../components/StateProvider';
import { useHistory } from 'react-router-dom';


function Login() {
	const context = useContext(AppContext);
	console.log(context);

	const { register, handleSubmit } = useForm();
	const history = useHistory();

	const loginUser = ({ email, password }) => {
		// create data to be sent to the API for validation
		let userData = {
			email,
			password,
		};

		fetch(
			'https://user-manager-three.vercel.app/api/user/login',
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(userData),
			}
		)
			.then(res => res.json())
			.then(result => {
				if (result.error === true) {
					return alert(result.message);
				}

				context.dispatch({
					type: 'LOGIN',
					payload: result.body,
				});

				history.push('/TodoList');
			})
			.catch(err => {
				alert('Unable to complete request. Please try again later');
				console.log({ err });
			});
	};

	return (
		<form className="form" onSubmit={handleSubmit(loginUser)}>
			<div>
				<h2 className="redhead">Login to check your todo list</h2>
			</div>
			<br />
			<div>
				<label htmlFor='email'>Email</label>
				<br />
				<input
					type='email'
					name='email'
					id='email'
					required
					{...register('email')}
				/>
			</div>
			<br />
			<div>
				<label htmlFor='password'>Password</label>
				<br />
				<input
					type='password'
					name='password'
					id='password'
					required
					{...register('password')}
				/>
			</div>
			<br />
			<div>
				<button className='btn' type='submit'>
					Login
				</button>
			</div>
		</form>
	);
}

export default Login;







































// import { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
// import { AppContext } from '../components/StateProvider';


// function Login() {
//     const { dispatch } = useContext(AppContext);
//     const { register, handleSubmit } = useForm();
//     const history = useHistory();

//     const login = ({email, password}) =>{
//         //get users data
//         const user = localStorage.getItem(email);

//         if (!user) {
//             return alert('This email does not have an account');
//         }

//         const userdata = JSON.parse(user);
//         console.log(userdata);

//         if (password !== userdata.password) {
//             return alert('Email or password is incorrect');
//         }
//         alert('Login successful');
//         dispatch({
//             type:'LOGIN',
//             payload: {
//                 userId: userdata.userId,
//                 userEmail: userdata.email,
//             },
//         });
//         history.push('/home');
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit(login)}>
//                 <div>
//                     <input
//                         type='text'
//                         placeholder='email'
//                         required
//                         {...register('email')}
//                     />
//                 </div>
//                 <div>
//                 <input
//                     type='text'
//                     placeholder='password'
//                     required
//                     {...register('password')}
//                 />
//                 </div>
//                 <input type="submit" value="Login" />
//             </form>
//         </>
//     );
// }

// export default Login;










//import React from "react";
// import useInput from "../UseInput";
// import getFirebase from '../firebase';
// import { AppContext } from '../components/StateProvider';
// import { useContext } from 'react';
// import { useHistory } from 'react-router-dom';

// // import styles from '../styles/form.module.css';


// const Login = () => {
//     const { setState } = useContext(AppContext);
//     const history = useHistory();
//     const firebaseInstance = getFirebase();

//     //import the hooks into our login form and spread them in their specified fields.
//     const email = useInput("");
//     const password = useInput("");

//     const signIn = async (e) => {
//     e.preventDefault();

//     try {
//       if (firebaseInstance) {
//         const user = await firebaseInstance
//           .auth()
//           .signInWithEmailAndPassword(email.value, password.value);
//         console.log("user", user);
//         alert("Welcome back!");
//         setState(prevstate => {
//           return {
//             ...prevstate,
//             isLoggedIn: true,
//             userId: Date.now(),
//             userEmail: user.email,
//           };
//         });
//         history.push('/home');
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
// };

//     return (
//         <form onSubmit={signIn}>
//             <input placeholder="Email" {...email} />
//             <input placeholder="Password" type="password" {...password} />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;