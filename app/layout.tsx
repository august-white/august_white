import './globals.css'

export const metadata = {
	title: 'August White',
	description: 'Personal website — built with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<header>
					<div className="site-title">August White</div>
					<nav>
						<a href="/">Home</a>
						<a href="#about">About</a>
						<a href="#contact">Contact</a>
					</nav>
				</header>

				<main>{children}</main>

				<footer>
					© {new Date().getFullYear()} August White — Built with Next.js
				</footer>
			</body>
		</html>
	)
}
