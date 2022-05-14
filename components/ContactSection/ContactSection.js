import styled from 'styled-components';

import ContactForm from './ContactForm';
import ContactSidebar from './ContactSidebar';
import { RedUnderline, CommonLayout, SectionTitle } from '../Utilities/Utils';

const ContactSectionParent = styled.div`
	color: #000;
	background-color: #ebebeb;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	padding-bottom: 40px;

	.contact-me-body {
		display: flex;
		justify-content: space-between;

		/* mobile */
		@media screen and (max-width: 780px) {
			flex-direction: column;
			justify-content: center;
		}
	}
`;

const ContactSection = () => {
	return (
		<>
			<ContactSectionParent>
				<CommonLayout>
					<SectionTitle>contact me</SectionTitle>
					<RedUnderline />
					<div className='contact-me-body'>
						<ContactForm />
						<ContactSidebar />
					</div>
				</CommonLayout>
			</ContactSectionParent>
		</>
	);
};

export default ContactSection;
