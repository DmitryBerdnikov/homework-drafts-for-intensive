import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Articles } from './views/articles'
import { CreateArticle } from './views/create-article'
import { routes } from './routes'
import { MainLayout } from './main-layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route path="/" element={<div>Главная</div>} />
						<Route
							path={routes.articles.pathname}
							element={<Articles />}
						></Route>
						<Route
							path={routes.createArticle.pathname}
							element={<CreateArticle />}
						></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>
)
