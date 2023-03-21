import PostsAside from './components/postsAside/PostsAside';
import './App.css';
import Icon from './components/ui/icon/Icon';
import Button from './components/ui/button/Button';
import ThreeList from './components/three/ThreeList';

const titleArr = ['About Us', 'Kompanija', 'Kontaktai'];

function App() {
  return (
    <div className='App'>
      <h1>
        My app
        <Icon name='shower' lg />
        <Icon name='facebook-official' />
      </h1>
      <ThreeList list={titleArr} />
      <main>
        <Button>Click</Button>
        <Button>Contact</Button>
        <Button>About</Button>
      </main>
      <aside className='aside'>
        <PostsAside />
      </aside>
    </div>
  );
}

export default App;
