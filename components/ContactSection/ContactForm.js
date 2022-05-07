import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const ContactFormParent = styled.div`
	h1 {
		text-transform: uppercase;
		padding: 150px 0px 0 0px;
	}

	form {
		margin: 80px 0px 100px 0px;

		.field {
			display: flex;
			margin-bottom: 30px;
			align-items: center;
			// justify-content: space-between;

			label {
				font-weight: bold;
				font-size: 1.1rem;
				min-width: 10px;
				// flex: 1;
				// margin-right: 300px;
			}

			input {
				margin-left: 300px;
				border: 0px;
				padding: 10px 10px;
				width: 420px;
			}

			textarea {
				margin-left: 275px;
				border: 0;
				min-width: 420px;
				max-width: 420px;
				min-height: 150px;
				font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
				padding: 10px;
			}
		}

		.email-field {
			input {
				margin-left: 303px;
			}
		}

		.message-field {
			align-items: flex-start;

			label {
				margin-top: 10px;
			}
		}

		.submit-btn {
			margin-top: 80px;

			input {
				background: #ff4454;
				color: #fff;
				padding: 15px 10px;
				width: 120px;
				margin-left: 0;
				margin: 12px 0;
				border: 0;
			}

			input:hover {
				cursor: pointer;
				background-color: #e53d4b;
			}
		}
	}

	@media screen and (max-width: 1544px) {
		form {
			margin-right: 20px;

			.field {
				input {
					margin-left: 100px;
					width: 300px;
				}

				textarea {
					margin-left: 75px;
					min-width: 300px;
					max-width: 300px;
				}
			}

			.email-field {
				input {
					margin-left: 103px;
				}
			}
		}
	}

	/* small laptop screen */
	@media screen and (max-width: 1024px) {
		form {
			margin-right: 30px;

			.field {
				input {
					margin-left: 50px;
					width: 300px;
				}

				textarea {
					margin-left: 25px;
					min-width: 300px;
					max-width: 300px;
				}
			}

			.email-field {
				input {
					margin-left: 53px;
				}
			}
		}
	}

	/* mobile */
	@media screen and (max-width: 780px) {
		h1 {
			padding: 50px 0px 0 0px;
		}

		form {
			margin: 50px 0px 50px 0px;

			.field {
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				input {
					margin-left: 0px;
					margin-top: 10px;
					width: 100%;
				}

				textarea {
					margin-left: 0px;
					margin-top: 10px;
					/* min-width: 300px; */
					max-width: 100%;
				}
			}

			.email-field {
				input {
					margin-left: 0px;
				}
			}
		}
	}
`;

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted },
	} = useForm();

	const submit = async (data) => {
		try {
			await fetch(
				'https://getform.io/f/868e81cc-9008-44fc-8639-da225ffd56b2',
				{
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json',
					},
				},
			).catch((err) => {
				console.log('erro 1');
				throw new Error(err);
			});
		} catch (error) {
			throw new Error(error);
		}
	};

	const onSubmit = (data) => {
		try {
			toast.promise(
				submit(data),
				{
					loading: 'Working on it',
					success: 'Feedback submitted successfully',
					error: 'Ooops!! Something went wrong',
				},
				{
					duration: 8000,
				},
			);
		} catch (error) {
			console.log(error);
			toast.error(error);
		}
	};

	return (
		<>
			<Toaster />
			<ContactFormParent>
				<form
					name='contact'
					method='POST'
					action='https://getform.io/f/868e81cc-9008-44fc-8639-da225ffd56b2'
					// onSubmit={handleSubmit(onSubmit)}
				>
					<div className='name-field field'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							{...register('name', { required: true })}
						/>
					</div>
					<div className='email-field field'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							{...register('email', { required: true })}
						/>
					</div>
					<div className='message-field field'>
						<label htmlFor='name'>Message</label>
						<textarea
							name='message'
							id=''
							{...register('message', { required: true })}
						></textarea>
					</div>
					<div className='submit-btn'>
						<input type='submit' value='Submit' disabled={isSubmitted} />
					</div>
				</form>
			</ContactFormParent>
		</>
	);
};

export default ContactForm;
