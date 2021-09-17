import './Post.css';

const Post = (props) => {
  return (
    <div className="post-wrapper">
      <img 
        src={props.url} alt={props.title} />
      
      <div className="post-content">
        <div className="likes"><span className="far fa-heart"></span></div>
        <h2 className="post-title">{props.title}</h2>
        <p className="post-caption">{props.explanation}</p>
        <p className="post-date">{props.date}</p>
      </div>
    </div>
  )
}

export default Post;