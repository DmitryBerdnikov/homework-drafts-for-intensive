import { Link, Outlet } from 'react-router'
import { routes } from './routes'

export const MainLayout = () => {
	return (
		<div>
			<header>
				<ul style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
					<li>
						<Link to={routes.articles.getLink()}>articles</Link>
					</li>
					<li>
						<Link to={routes.createArticle.getLink()}>create article</Link>
					</li>
				</ul>
			</header>
			<Outlet />
		</div>
	)
}
