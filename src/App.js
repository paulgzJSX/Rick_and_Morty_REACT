import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CardsGrid, Header, CharacterPage, Backdrop } from './components/index'
import { getCharacters } from './store/actions/actionCreators'
import { GlobalStyles } from './styles/GlobalStyles'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const dispatch = useDispatch()
  const { page } = useSelector(state => state.pageReducer)

  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 1000
    })
    AOS.refresh()
  }, [])

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
