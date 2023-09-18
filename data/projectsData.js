import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Tour planning platform',
		url: 'google-health-platform',
		category: 'Web Application',
		img: '/images/web-project1.png',
		ProjectHeader: {
			title: 'Tour planning platform',
			publishDate: 'July , 2023',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'image',
				img: '/images/ui-project1.png',
			},
			{
				id: uuidv4(),
				title: 'image',
				img: '/images/web-project1.png',
			},
			{
				id: uuidv4(),
				title: 'image',
				img: '/images/web-project1-1.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Klashra Tours and Travels',
				
				},
				{
					id: uuidv4(),
					title: 'UI Designer & Frontend Developer',
					
				},
				
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To create an engaging and user-friendly online platform tailored for travelers worldwide, with a specific focus on the captivating destinations nestled within Dubai.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'React js',
						'TailwindCSS',
						'Figma',
					],
				},
			],
			DeployedUrlHeading: 'Deployed site',
			DeployedUrlInfo: [
				{
					id: uuidv4(),
					title: 'Deployed site',
					url: 'https://earnest-madeleine-e4b5c0.netlify.app/',
					
				},
			],
			FigmaUrlHeading: 'UI Design',
			FigmaUrlInfo: [
				{
					id: uuidv4(),
					title: 'UI Design',
					url: 'https://www.figma.com/file/uAZSZjAf5JOFK8ucaT8bzu/klashra?type=design&node-id=58%3A2&mode=design&t=dDP9OG4rB0FaVD3F-1'
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'As a Frontend Developer and UI/UX Designer at Klashra, my mission was to create an engaging and user-friendly online platform tailored for travelers worldwide, with a specific focus on the captivating destinations nestled within Dubai.',
				},
				{
					id: uuidv4(),
					details:
						'Utilized Figma to create wireframes, mockups, and interactive prototypes to visually communicate design concepts effectively. Leveraged the "smart animate" feature in Figma to craft dynamic and engaging prototypes.',
				},
				{
					id: uuidv4(),
					details:
						'Applied user-centered design principles to ensure the platform`s interfaces were intuitive and visually appealing. Focused on creating a seamless user experience to enhance engagement.',
				},
				{
					id: uuidv4(),
					details:
						'Leveraged a tech stack that included React.js, HTML, Bootstrap CSS, and JavaScript to implement responsive and interactive user interfaces. Ensured that the platform worked seamlessly across various devices and screen sizes.',
				},
				{
					id: uuidv4(),
					details:
						'Utilized React hooks to manage state and functional components effectively, streamlining the development process. Implemented custom card components to showcase travel information and destinations and Integrated the Stripe payment gateway to facilitate secure and efficient payment processing within the platform. Ensured a smooth payment experience for users. Deployed the react app netlify',
				},
			],
		},
	},
	{
		id: 2,
		title: 'QIB Logitics',
		url: '',
		category: 'Branding',
		img: '/images/web-project2.png',
		ProjectHeader: {
			title: 'QIB Logistics',
			publishDate: 'Sep, 2021',
			tags: 'UI/Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/web-project2.png',
			},
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/ui-project2.png',
			},
			{
				id: uuidv4(),
				title: 'Phoenix Digital Agency',
				img: '/images/web-project2-1.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'QIB Logistics',
					
				},
				{
					id: uuidv4(),
					title: 'UI Designer & Frontend Developer',
					
				},
				// {
				// 	id: uuidv4(),
				// 	title: 'Website',
				// 	details: 'https://company.com',
				// },
				// {
				// 	id: uuidv4(),
				// 	title: 'Phone',
				// 	details: '555 8888 888',
				// },
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'The task was to craft a captivating landing page for the company. The objective was to align the design seamlessly with the brand book provided by the organization.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'React Js',
						'BoootstrapCSS',
						'Figma',
					],
				},
			],
			DeployedUrlHeading: 'Deployed site',
			DeployedUrlInfo: [
				{
					id: uuidv4(),
					title: 'Deployed site',
					url: 'https://darling-empanada-84e43d.netlify.app/',
					
				},
			],
			FigmaUrlHeading: 'UI Design',
			FigmaUrlInfo: [
				{
					id: uuidv4(),
					title: 'UI Design',
					url: 'https://www.figma.com/proto/31amN5fsPovOG3Gmximryz/QIB?type=design&node-id=1-2&t=VTAO213Xccm2cH82-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2'
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'In my capacity as a Frontend Developer and UI/UX Designer at QIB Logistics, I undertook the pivotal task of crafting a captivating landing page for the company. The objective was to align the design seamlessly with the brand book provided by the organization.'
				},
				{
					id: uuidv4(),
					details:
						'Design Consistency with Brand Book: Ensured strict adherence to the company`s brand book guidelines to maintain a cohesive and consistent visual identity. This approach was fundamental in preserving the brand`s image.',
				},
				{
					id: uuidv4(),
					details:
						'UI Design and Prototyping in Figma: Leveraged Figma to meticulously design the user interface (UI) for the landing page. The design process involved creating aesthetically pleasing and user-friendly elements that resonated with the brand`s ethos.',
				},
				{
					id: uuidv4(),
					details:
						' Frontend Development Expertise: Employed a robust tech stack consisting of React.js, Bootstrap CSS, and TypeScript for the frontend development. This stack provided the foundation for a responsive, high-performance, and interactive landing page.',
				},
			],
		},
	},
];
