import React from 'react'

import { StatusBar } from 'react-native'

import styled from 'styled-components/native'


import Hero from '../components/Hero'

const Container = styled.View`
	flex: 1;
	background: transparent;
`

import api from '../services/api'

const Home = () => {
	return (
		<>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			
			<Container>
		
				<Hero videos={api} />	
			</Container>
		</>
	)
}

export default Home
