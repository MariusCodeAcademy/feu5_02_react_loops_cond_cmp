import PostsAside from './components/postsAside/PostsAside';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>My app</h1>
      <main></main>
      <aside className='aside'>
        <PostsAside />
      </aside>
    </div>
  );
}

export default App;
