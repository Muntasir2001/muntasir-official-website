import styled from 'styled-components';

export const CommonLayout = styled.div`
	margin: 0 140px;

	@media screen and (max-width: 1544px) {
		margin: 0 120px;
	}

	@media screen and (max-width: 1240px) {
		margin: 0 100px;
	}

	@media screen and (max-width: 1024px) {
		margin: 0 50px;
	}

	@media screen and (max-width: 780px) {
		margin: 0 15px;
	}
`;

export const RedUnderline = styled.div`
	height: 7px;
	background-color: #ff4454;
	max-width: 100px;

	/* small laptop screen */
	@media screen and (max-width: 1024px) {
		height: 7px;
		background-color: #ff4454;
		max-width: 100px;
	}
`;
