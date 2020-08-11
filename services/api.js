const api = [
	{
		id: 0,
		video: require('../assets/videos/Happy-Birthday.mp4'),
		poster: require('../assets/poster/Birthday.jpg'),
		user: {
			username: 'Sam',
			description:
				'#Happy Birthday',
			music: 'Birthday',
			avatar: require('../assets/poster/Birthday.jpg')
		},
		count: {
			like: '50k',
			comment: '243',
			share: '59'
		}
	},
	{
		id: 1,
		video: require('../assets/videos/cricket.mp4'),
		poster: require('../assets/poster/Cricket.jpg'),
		user: {
			username: 'Rohit',
			description:
				'#MI, Mumbai Rocks',
			music: 'Funny',
			avatar: require('../assets/poster/Cricket.jpg')
		},
		count: {
			like: '501K',
			comment: '2381',
			share: '500'
		}
	}

]

export default api
