import PostsAside from './components/postsAside/PostsAside';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>
        My app
        {/* <Icon icon='shower' /> */}
        <i class='fa fa-shower' aria-hidden='true'></i>
      </h1>
      <main></main>
      <aside className='aside'>
        <PostsAside />
      </aside>
    </div>
  );
}

export default App;
