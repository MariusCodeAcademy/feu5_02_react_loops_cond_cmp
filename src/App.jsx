import PostsAside from './components/postsAside/PostsAside';
import './App.css';
import Icon from './components/ui/icon/Icon';

function App() {
  return (
    <div className='App'>
      <h1>
        My app
        <Icon name='shower' lg />
        <Icon name='facebook-official' />
      </h1>
      <main></main>
      <aside className='aside'>
        <PostsAside />
      </aside>
    </div>
  );
}

export default App;
