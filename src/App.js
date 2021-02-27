import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CardsGrid, Header, CharacterPage, Backdrop } from './components/index'
import { getCharacters } from './store/actions/actionCreators'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  const dispatch = useDispatch()
  const { page } = useSelector(state => state.pageReducer)

  useEffect(() => {
    dispatch(getCharacters())
  }, [page, dispatch])

  return (
    <div className="container">
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={CardsGrid} />
          <Route path='/characters/:id' component={CharacterPage} />
        </Switch>
        <Backdrop />
      </BrowserRouter>
    </div>
  )
}

export default App;
