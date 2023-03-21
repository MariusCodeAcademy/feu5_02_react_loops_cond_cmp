import './aside.css';
import PostsAsideHeader from './PostsAsideHeader';
import SinglePostAside from './SinglePostAside';

function PostsAside() {
  return (
    <div className='postAside'>
      <PostsAsideHeader />
      <SinglePostAside img={'/img/smoke.jpg'} title={'Denim'} />
      <SinglePostAside img={'/img/cam.jpg'} title={'Sweaters'} isSpecial />
      <SinglePostAside img={'/img/work.jpg'} title={'Workshop'} hideSubtitle />
    </div>
  );
}
export default PostsAside;
