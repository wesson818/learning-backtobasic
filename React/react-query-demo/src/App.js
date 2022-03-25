import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { RQSuperHeroPage } from './components/RQSuperHero.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import { StarWarPage } from './components/StarWar.page';
import { ReactQueryDevtools } from "react-query/devtools";
import { ParallelQueriesPage } from "./components/ParallelQueries.page";
import {DynamicParallelQueriesPage } from "./components/DynamicParallelQueries.page"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
              <li>
                <Link to='/parallel-queries'>Parallel Queries</Link>
              </li>
              <li>
                <Link to='/dynamic-parallel-queries'>Dynamic Parallel Queries</Link>
              </li>
              <li>
                <Link to='/star-war'>Star War Info</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/star-war' element={<StarWarPage/>} />
            <Route path='/super-heroes' element={<SuperHeroesPage/>} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage/>} />
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroPage/>} />
            <Route path='/parallel-queries' element={<ParallelQueriesPage/>} />
            <Route path='/dynamic-parallel-queries' element={<DynamicParallelQueriesPage/>} />
            <Route path='/' element={<HomePage/>} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
