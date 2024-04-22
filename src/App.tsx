import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './App.module.scss'
import Header from './components/header/Header';
import MainPage from './components/main-page/MainPage'
import Quest from './components/quest/Quest';
import Footer from './components/footer/Footer';
import Contacts from './components/contacts/Contacts';
import ErrorPage from './components/error404/ErrorPage';
import { useQuestStore } from './store/quest-store';

function App() {

  const [questId, quests] = useQuestStore((state) => [state.questId, state.quests]);

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
		    <Switch>
			    <Route exact path="/" component={MainPage} />
          <Route path="/detailed-quest/:id" component={questId > quests.length || questId === 0 ? ErrorPage : Quest} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/*" component={ErrorPage} />
		    </Switch>
	    </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
