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

export const SectionDiv = styled.div`
	padding: 0px 0px 150px 0px;

	@media screen and (max-width: 780px) {
		padding: 0px 0px 50px 0px;
	}
`;

export const SectionTitleDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SectionTitle = styled.h1`
	text-transform: uppercase;
`;

export const BlackBkgSection = styled.div`
	background-color: #1b1c1e;
	color: #fff;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	padding: 100px 0px 100px 0px;

	.second {
	}
`;
