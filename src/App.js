import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Resume from './components/Resume'
import ContactList from './components/ContactList'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import ContactItem from './components/ContactList/ContactItem'
import NotFound from './components/NotFound'
import TodoList from './components/TodoList'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={About} exact />
      <Route path="/resume" component={Resume}  exact />
      <Route path="/portfolio" component={Portfolio} exact />
      <Route path="/contacts" component={Contacts} exact />
      <Route path="/portfolio/contact-list" component={ContactList} exact />
      <Route path="/portfolio/contact-list/:contactId" component ={ContactItem} exact />
      <Route path="/portfolio/contact-list" component={ContactList} exact />
      <Route path="/portfolio/todo-list" component={TodoList} exact/>
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
