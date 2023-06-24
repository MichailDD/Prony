import { v1 } from "uuid";
import avatarHeader from "./assets/image/header_avatar.jpg?as=webp";
import postImage from "./assets/image/post_image.jpg?as=webp";
import postPhoto from "./assets/image/post_avatar.jpg?as=webp";
import postComment1 from "./assets/image/post_comment-1.jpg?as=webp";
import postComment2 from "./assets/image/post_comment-2.jpg?as=webp";
import postComment3 from "./assets/image/post_comment-3.jpg?as=webp";
import postComment4 from "./assets/image/post_comment-4.jpg?as=webp";
import postComment5 from "./assets/image/post_comment-5.jpg?as=webp";
import avatar from "./assets/image/avatar.jpg?as=webp";
import iconGoogle from "./assets/icons/google.svg";
import iconGithub from "./assets/icons/github.svg";
import iconFacebook from "./assets/icons/facebook.svg";
import iconDiscord from "./assets/icons/discord.svg";
import iconTwitter from "./assets/icons/twitter-color.svg";
import pic404 from "./assets/icons/404.svg";
import deFlag from "./assets/icons/german.svg";
import usaFlag from "./assets/icons/usa.svg";
import customThemeIcon from "./assets/icons/setting.svg";

const images = {
	header: {
		image: avatarHeader
	},
	posts: {
		postImage: postImage,
		postPhoto: postPhoto,
		postComment1: postComment1,
		postComment2: postComment2,
		postComment3: postComment3,
		postComment4: postComment4,
		postComment5: postComment5,
	},
	forms: {
		avatar: avatar,
	}
}
export const header = {
	board: "Boards",
	changelog: "Changelog",
	login: {
		title: "Log in",
		name: "Lucy Lavender",
		image: images.header.image,
	}
}
export const footer = {
	list: [
		{
			title: "Product",
			list: [
				{
					id: v1(),
					title: "Features",
					link: "#"
				},
				{
					id: v1(),
					title: "Integrations",
					link: "#"
				},
				{
					id: v1(),
					title: "Case studies",
					link: "#"
				},
				{
					id: v1(),
					title: "Documentation",
					link: "#"
				},
			]
		},
		{
			title: "Use cases",
			list: [
				{
					id: v1(),
					title: "Feature requests",
					link: "#"
				},
				{
					id: v1(),
					title: "Share roadmap",
					link: "#"
				},
				{
					id: v1(),
					title: "Manage ideas",
					link: "#"
				},
			]
		},
		{
			title: "Alternatives",
			list: [
				{
					id: v1(),
					title: "Prony vs Uservoice",
					link: "#"
				},
				{
					id: v1(),
					title: "Prony vs Aha ideas",
					link: "#"
				},
				{
					id: v1(),
					title: "Prony vs Canny",
					link: "#"
				},
				{
					id: v1(),
					title: "Prony vs Trello",
					link: "#"
				},
				{
					id: v1(),
					title: "Prony vs Nolt",
					link: "#"
				},
			]
		},
		{
			title: "Company",
			list: [
				{
					id: v1(),
					title: "About us",
					link: "#"
				},
				{
					id: v1(),
					title: "Why Prony?",
					link: "#"
				},
				{
					id: v1(),
					title: "Team",
					link: "#"
				},
				{
					id: v1(),
					title: "Culture",
					link: "#"
				},
				{
					id: v1(),
					title: "Manifesto",
					link: "#"
				},
			]
		},
	]
}
export const mainScreen = {
	feedback: {
		title: "Give feedback",
		list: [
			{
				id: v1(),
				title: "Board title",
				amount: 23
			},
			{
				id: v1(),
				title: "Board title",
				amount: 23
			},
			{
				id: v1(),
				title: "Board title",
				amount: 23
			},
		]
	},
	roadmap: {
		title: "Roadmap",
		list: [
			{
				id: v1(),
				title: "Planned",
				labelBg: "#03B8FD",
				list: [
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
				]
			},
			{
				id: v1(),
				title: "In progress",
				labelBg: "#F43658",
				list: [
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
				]
			},
			{
				id: v1(),
				title: "Coming soon",
				labelBg: "#9E9E9E",
				list: [
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
					{
						id: v1(),
						title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
						subtitle: "Board title",
						amount: "23"
					},
				]
			},
		]
	}
}
export const boardScreen = {
	titleBtn: "Clear filters",
	selects: [
		{
			id: v1(),
			default: "Sort by",
			title: "Sort by:",
			list: ["My posts", "My posts", "My posts"]
		},
		{
			id: v1(),
			default: "Showing",
			title: "Showing:",
			list: ["Tranding 1", "Tranding 2", "Tranding 3"]
		},
		{
			id: v1(),
			default: "Showing",
			title: "Showing:",
			list: ["Tranding 1", "Tranding 2", "Tranding 3"]
		},
		{
			id: v1(),
			default: "Showing",
			title: "Showing:",
			list: ["Tranding 1", "Tranding 2", "Tranding 3"]
		},
	],
	list: [
		{
			id: v1(),
			status: "Complete",
			likes: 23,
			messages: 12,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.",
		},
		{
			id: v1(),
			status: "Complete",
			likes: 23,
			messages: 12,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.",
		},
		{
			id: v1(),
			status: "Complete",
			likes: 23,
			messages: 12,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.",
		},
		{
			id: v1(),
			status: "In progress",
			likes: 23,
			messages: 12,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.",
		},
		{
			id: v1(),
			status: "Complete",
			likes: 23,
			messages: 12,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.",
		},
		{
			id: v1(),
			status: "Complete",
			likes: 23,
			messages: 12,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.",
		},
		{
			id: v1(),
			status: "Complete",
			likes: 23,
			messages: 12,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.",
		},
		{
			id: v1(),
			status: "In progress",
			likes: 23,
			messages: 12,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.",
		},
		{
			id: v1(),
			status: "Complete",
			likes: 23,
			messages: 12,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.",
		},
		{
			id: v1(),
			status: "Complete",
			likes: 23,
			messages: 12,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.",
		},
		{
			id: v1(),
			status: "Complete",
			likes: 23,
			messages: 12,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.",
		},
		{
			id: v1(),
			status: "In progress",
			likes: 23,
			messages: 12,
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sed dictum nibh. Tempor, sed molestie neque morbi. Sed sed non, in est turpis nulla tortor.",
		},
	]
}
export const postScreen = {
	voters: {
		title: "Voters:",
		more: "+12",
		list: [
			{
				id: v1(),
				image: images.posts.postComment1
			},
			{
				id: v1(),
				image: images.posts.postComment2
			},
			{
				id: v1(),
				image: images.posts.postComment3
			},
			{
				id: v1(),
				image: images.posts.postComment4
			},
			{
				id: v1(),
				image: images.posts.postComment5
			},
			{
				id: v1(),
				image: images.posts.postComment3
			},
		]
	},
	post: {
		photo: images.posts.postPhoto,
		image: images.posts.postImage,
		name: "John Doe",
		time: "3 min ago",
		likes: 23,
		status: "Complete",
		comments: "12 Comments",
		tagList: [
			{
				id: v1(),
				color: "#EB5757",
				title: "Tagname1",
			},
			{
				id: v1(),
				color: "#27AE60",
				title: "Tagname1",
			}
		],
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus. Vel aliquam diam sit odio. Elit sed orci, bibendum sit. Nunc, penatibus blandit faucibus tristique vulputate tincidunt. Lorem sit egestas bibendum consectetur nisi, nunc. Dignissim non eget nisl ultrices dui aliquet. Porttitor ridiculus orci diam at. Tempus in auctor rutrum diam lobortis tempus non egestas rhoncus.",

	},
	privacy: {
		title: "Privacy",
		list: [
			{
				id: v1(),
				title: "Public",
				value: "public",
			},
			{
				id: v1(),
				title: "Private",
				value: "private",
			},
		]
	},
	messages: [
		{
			id: v1(),
			photo: images.posts.postComment1,
			name: "Sophia-Rose Nava",
			message: "Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom",
			amountLikes: 3,
			date: "01-02-2020",
			privacy: true,
		},
		{
			id: v1(),
			photo: images.posts.postComment2,
			name: "Anna Walley",
			message: "Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom",
			amountLikes: 3,
			date: "01-02-2020",
			privacy: false,
			reply: [{
				id: v1(),
				photo: images.posts.postComment3,
				name: "Uzair Valdez",
				message: "Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom",
				amountLikes: 3,
				date: "01-02-2020",
				privacy: false,
			},],
		},
		{
			id: v1(),
			photo: images.posts.postComment4,
			name: "Kaylan Graham",
			amountLikes: 3,
			date: "01-02-2020",
			privacy: false,
			merge: [
				{
					id: v1(),
					photo: images.posts.postComment1,
					name: "Anna Walley",
					message: "Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom",
					amountLikes: 3,
					date: "01-02-2020",
					privacy: false,
				},
			],
		},
		{
			id: v1(),
			photo: images.posts.postComment5,
			name: "Kasim Daniels",
			message: "Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom Instead of send updates via email, send them through the original conversation on Intercom",
			amountLikes: 3,
			date: "01-02-2020",
			privacy: false,
		},
	]
}
export const changelogScreen = {
	filter: {
		title: "Status:",
		list: [1, 2, 3],
		list: [
			{
				id: v1(),
				title: "All entries",
				labelBg: "#CDDAF2"
			},
			{
				id: v1(),
				title: "New",
				labelBg: "#27AE60"
			},
			{
				id: v1(),
				title: "Improved",
				labelBg: "#1565C0"
			},
			{
				id: v1(),
				title: "Fixed",
				labelBg: "#F43658"
			},
		]
	},
	list: [
		{
			id: v1(),
			title: "Test record",
			labelTitle: "New",
			labelBg: "#27AE60",
			name: "John Doe",
			date: "01-02-2020",
			photo: images.posts.postComment5,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus."
		},
		{
			id: v1(),
			title: "Test record",
			labelTitle: "New",
			labelBg: "#27AE60",
			name: "John Doe",
			date: "01-02-2020",
			photo: images.posts.postComment1,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus."
		},
		{
			id: v1(),
			title: "Test record",
			labelTitle: "New",
			labelBg: "#27AE60",
			name: "John Doe",
			date: "01-02-2020",
			photo: images.posts.postComment2,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus."
		},
		{
			id: v1(),
			title: "Test record",
			labelTitle: "Improved",
			labelBg: "#1565C0",
			name: "John Doe",
			date: "01-02-2020",
			photo: images.posts.postComment4,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus."
		},
		{
			id: v1(),
			title: "Test record",
			labelTitle: "New",
			labelBg: "#27AE60",
			name: "John Doe",
			date: "01-02-2020",
			photo: images.posts.postComment1,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus."
		},
		{
			id: v1(),
			title: "Test record",
			labelTitle: "New",
			labelBg: "#27AE60",
			name: "John Doe",
			date: "01-02-2020",
			photo: images.posts.postComment3,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus."
		},
		{
			id: v1(),
			title: "Test record",
			labelTitle: "New",
			labelBg: "#27AE60",
			name: "John Doe",
			date: "01-02-2020",
			photo: images.posts.postComment5,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus."
		},
		{
			id: v1(),
			title: "Test record",
			labelTitle: "New",
			labelBg: "#27AE60",
			name: "John Doe",
			date: "01-02-2020",
			photo: images.posts.postComment4,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus."
		},
		{
			id: v1(),
			title: "Test record",
			labelTitle: "Fixed",
			labelBg: "#F43658",
			name: "John Doe",
			date: "01-02-2020",
			photo: images.posts.postComment3,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus."
		},
		{
			id: v1(),
			title: "Test record",
			labelTitle: "New",
			labelBg: "#27AE60",
			name: "John Doe",
			date: "01-02-2020",
			photo: images.posts.postComment2,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor id quisque magna massa ullamcorper. Vitae justo, fusce viverra arcu enim varius suscipit diam tellus."
		},
	]
}
export const formData = {
	changePass: {
		title: "Change password",
		current: {
			title: "Current password",
			ph: "Enter current password",
			type: "password"
		},
		new: {
			title: "New Password",
			ph: "Enter new password",
			type: "password"
		},
		repeat: {
			title: "Repeat New Password",
			ph: "Enter new password",
			type: "password"
		},
	},
	resetPass: {
		title: "Reset password",
		subtitle: " Forgot your password? Enter your email address below, and we'll email you instructions to set a new one.",
		input: {
			title: "Your email",
			ph: "Enter your email",
			type: "email"
		},
	},
	newPass: {
		title: "New password",
		new: {
			title: "New Password",
			ph: "Enter your password",
			type: "password"
		},
		repeat: {
			title: "Confirm password",
			ph: "Enter your password",
			type: "password"
		},
	},
	profile: {
		title: "Profile",
		current: {
			title: "First name",
			ph: "Enter your first name"
		},
		new: {
			title: "Last name",
			ph: "Enter your last name"
		},
		repeat: {
			title: "Email",
			ph: "Enter your email",
			type: "email"
		},
	},
	avatar: {
		title: "Avatar",
		photo: images.forms.avatar,
		subtitle: "Current avatar"
	},
	login: {
		login: {
			title: "Your login",
			ph: "Enter your login",
		},
		pass: {
			title: "Your password",
			ph: "Enter your password",
			type: "password"
		},
	},
	reg: {
		title: "User registration",
		name: {
			title: "Your name",
			ph: "Enter your name",
			type: "text"
		},
		lastName: {
			title: "Your last name",
			ph: "Enter your last name",
			type: "text"
		},
		email: {
			title: "Your email",
			ph: "Enter your email",
			type: "email"
		},
		newPass: {
			title: "Your password",
			ph: "Enter your password",
			type: "password"
		},
		repeatPass: {
			title: "Confirm password",
			ph: "Enter your password",
			type: "password"
		},
	},
	social: {
		title: "Or login with social:",
		list: [
			{
				id: v1(),
				title: "Login with Google",
				icon: iconGoogle,
			},
			{
				id: v1(),
				title: "Login with Github",
				icon: iconGithub,
			},
			{
				id: v1(),
				title: "Login with Facebook",
				icon: iconFacebook,
			},
			{
				id: v1(),
				title: "Login with Discord",
				icon: iconDiscord,
			},
			{
				id: v1(),
				title: "Login with Twitter",
				icon: iconTwitter,
			},
		]
	}
}
export const notFoundPage = {
	title: "something wrong",
	image: pic404,
	text: "This page is missing or you assembled the link incorrectly",
	btn: {
		title: "To home page",
		url: "/"
	}
}
export const userMenu = {
	photo: avatar,
	name: "Lucy Lavender",
	list: [
		{
			id: v1(),
			title: "Change password",
			url: "/form/change-pass",
		},
		{
			id: v1(),
			title: "Profile",
			url: "/form/profile",
		},
		{
			id: v1(),
			title: "Avatar",
			url: "/form/avatar",
		},
		{
			id: v1(),
			title: "Logout",
			type: "logout",
			url: "",
		},
	]
}
export const navBar = {
	title: "Workspaces",
	profile: {
		title: "Profile",
		list: [
			{
				id: v1(),
				title: "Profile",
				link: "../Profile"
			},
			{
				id: v1(),
				title: "Avatar",
				link: "../Avatar"
			},
			{
				id: v1(),
				title: "Email Preferences",
				link: "../Avatar"
			},
			{
				id: v1(),
				title: "Change password",
				link: "../change-pass"
			},
		]
	},
	billing: {
		title: "Billing",
		list: [
			{
				id: v1(),
				title: "Billing Plan",
				link: "billing"
			},
			{
				id: v1(),
				title: "Payment Methods",
				link: "payment"
			},
			{
				id: v1(),
				title: "Billing History",
				link: "billing-history"
			},
		]
	},
}
export const billingCl = {
	title: "Billing Plan",
	trialMess: "Your Trial expires in X days. You can always buy a plan before the trial period ends",
	titlePlan: "Your plan",
	titleOtherPlan: "Available plans",
	your: {
		id: v1(),
		titleBtn: "",
		color: "transparent",
		plan: {
			title: "Plan",
			value: "Free"
		},
		suggest: {
			title: "Suggestions",
			value: 1,
		},
		member: {
			title: "Team members",
			value: 1
		},
		price: {
			title: "Price",
			value: "Free"
		},
		date: {
			title: "Billing date",
			value: "None"
		}
	},
	list: [
		{
			id: v1(),
			titleBtn: "Buy now",
			color: "#1565C0",
			plan: {
				title: "Plan",
				value: "Basic"
			},
			suggest: {
				title: "Suggestions",
				value: 1000,
			},
			member: {
				title: "Team members",
				value: 10
			},
			price: {
				title: "Price",
				value: 25
			}
		},
		{
			id: v1(),
			titleBtn: "Buy now",
			color: "#F43658",
			plan: {
				title: "Plan",
				value: "Basic"
			},
			suggest: {
				title: "Suggestions",
				value: 1000,
			},
			member: {
				title: "Team members",
				value: 10
			},
			price: {
				title: "Price",
				value: 25
			}
		},
		{
			id: v1(),
			titleBtn: "Buy now",
			color: "#272557",
			plan: {
				title: "Plan",
				value: "Basic"
			},
			suggest: {
				title: "Suggestions",
				value: 1000,
			},
			member: {
				title: "Team members",
				value: 10
			},
			price: {
				title: "Price",
				value: 25
			}
		},
		{
			id: v1(),
			titleBtn: "Buy now",
			color: "#7791C2",
			plan: {
				title: "Plan",
				value: "Basic"
			},
			suggest: {
				title: "Suggestions",
				value: 1000,
			},
			member: {
				title: "Team members",
				value: 10
			},
			price: {
				title: "Price",
				value: 25
			}
		},
	]
}
export const billingHistory = {
	title: "Billing History",
	titleDate: "Transaction date",
	titleAmount: "Amount",
	list: [
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
		{
			id: v1(),
			date: "21 Feb 2020",
			amount: 50,
		},
	]
}
export const mainClient = {
	title: "Workspaces",
	titleBtn: "Add a new workspace",
	list: [
		{
			id: v1(),
			name: "Name of workspace",
			subdomain: "Subdomain_or_domain.com"
		},
		{
			id: v1(),
			name: "Name of workspace",
			subdomain: "Subdomain_or_domain.com"
		},
		{
			id: v1(),
			name: "Name of workspace",
			subdomain: "Subdomain_or_domain.com"
		},
	]

}
export const editWs = {
	title: "Edit Workspace",
	name: {
		id: v1(),
		title: "New Name",
		ph: "Name of workspace"
	},
	domain: {
		id: v1(),
		title: "Subdomain",
		ph: "Name of workspace"
	},
}
export const addWs = {
	title: "Add Workspace",
	lang: {
		title: "Language",
		list: [
			{
				id: v1(),
				title: "English",
				text: "English, US",
				value: "eng1",
				icon: usaFlag,
			},
			{
				id: v1(),
				title: "German",
				text: "German, EU",
				value: "de1",
				icon: deFlag,
			},
			{
				id: v1(),
				title: "English",
				text: "English, US",
				value: "eng2",
				icon: usaFlag,
			},
			{
				id: v1(),
				title: "German",
				text: "German, EU",
				value: "de2",
				icon: deFlag,
			},
			{
				id: v1(),
				title: "English",
				text: "English, US",
				value: "eng3",
				icon: usaFlag,
			},
			{
				id: v1(),
				title: "German",
				text: "German, EU",
				value: "de3",
				icon: deFlag,
			},
		]
	},
	theme: {
		title: "Theme",
		list: [
			{
				id: v1(),
				type: "custom",
				bg: "linear-gradient(244.56deg, #E0EBFF 16.12%, #CADDFF 83.88%)",
				icon: customThemeIcon,
				name: "custom",
				clicked: false
			},
			{
				id: v1(),
				bg: "#1565C0",
				colors: ["#272557", "#7791C2", "#1565C0", "#E5ECF9"],
				name: "theme1",
				clicked: true
			},
			{
				id: v1(),
				bg: "#46EBA8",
				colors: ["#46EBA8", "#333333", "#ACACAC", "#D8D8D8"],
				name: "theme2",
				clicked: false
			},
			{
				id: v1(),
				bg: "linear-gradient(89.88deg, #C4CFE2 2.43%, #E5ECF9 110.51%)",
				colors: ["#272557", "#7791C2", "#1565C0", "#E5ECF9"],
				name: "theme3",
				clicked: false
			},
		]
	},
	plan: {
		title: "How do you plan to use Prony?",
		list: [
			{
				id: v1(),
				title: "Public feedback",
				clicked: true,
			},
			{
				id: v1(),
				title: "Private feedback",
				clicked: false,
			},
			{
				id: v1(),
				title: "Employee feedback",
				clicked: false,
			},
		]
	}
}
export const delWs = {
	title: "DELETE Workspace",
	subtitle: "Are you sure? This action cannot be undone. Enter the name of this workspace below to confirm.",
	name: {
		title: "Workspace name",
		ph: "Name of workspace"
	}
}
export const changePassWs = {
	title: "Change password",
	current: {
		title: "Current password",
		ph: "Enter current password",
		type: "password"
	},
	new: {
		title: "New Password",
		ph: "Enter new password",
		type: "password"
	},
	repeatNew: {
		title: "Repeat New Password",
		ph: "Enter new password",
		type: "password"
	},
}
export const socWs = {
	title: "Social accounts",
	list: [
		{
			id: v1(),
			title: "Add Google account",
			icon: iconGoogle,
			connected: false,
		},
		{
			id: v1(),
			title: "Add Facebook account",
			icon: iconFacebook,
			connected: true,
		},
		{
			id: v1(),
			title: "Add Twitter account",
			icon: iconTwitter,
			connected: false,
		},
		{
			id: v1(),
			title: "Add Github account",
			icon: iconGithub,
			connected: false,
		},
		{
			id: v1(),
			title: "Add Discord account",
			icon: iconDiscord,
			connected: false,
		},
	]
}
export const profileCl = {
	title: "Profile",
	name: {
		title: "First name",
		ph: "Enter your first name",
	},
	lastName: {
		title: "Last name",
		ph: "Enter your last name",
	},
	email: {
		title: "Email",
		ph: "Enter your email",
		type: "email"
	},
}
export const paymentFormCl = {
	title: "Add Payment Methods",
	alias: {
		title: "Alias for credit card",
		ph: "Enter your Alias",
	},
	name: {
		title: "First name",
		ph: "Enter your first name",
	},
	lastName: {
		title: "Last name",
		ph: "Enter your last name",
	},
	card: {
		title: "Card number",
		type: "number"
	},
	cvv: {
		title: "CVV",
		type: "number"
	},
	date: {
		title: "Expiration date",
		type: "number"
	},
}

export const paymentCl = {
	title: "Payment Methods",
	titleAddBtn: "Add a new payment method",
	cardList: [
		{
			id: v1(),
			title: "Privatbank",
			checked: true,
			value: "privatbank",
			cardNum: "5784758475847584"
		},
		{
			id: v1(),
			title: "Monobank",
			checked: false,
			value: "monobank",
			cardNum: "4758475845784758"
		},
		{
			id: v1(),
			title: "A-bank",
			checked: false,
			value: "abank",
			cardNum: "4475784758485875"
		},
	],
	form: paymentFormCl
}

export const store = {
	header: header,
	footer: footer
}