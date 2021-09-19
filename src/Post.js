import './Post.css';
import LikeButton from './LikeButton';
import { formatDistance } from 'date-fns';

const Post = (props) => {

  let today = new Date();

  return (
    <div className="post-wrapper">
      { props.media_type === 'image' ?
      <img 
        src={props.url} alt={props.title} /> :
      <div className="video-wrapper">
        <iframe
          title={props.title}
          src={props.url}
          frameborder="0"
          scrolling="auto"
        >
        </iframe>
      </div>
      }   
      <div className="post-content">
        <LikeButton />
        <h2 className="post-title">{props.title}</h2>
        <p className="post-caption">{props.explanation}</p>
        <p className="post-date">{formatDistance(new Date(props.date), today, {
          addSuffix: true
        })}
        </p>
      </div>
    </div>
  )
}

export default Post;