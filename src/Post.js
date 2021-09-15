import './Post.css';

const Post = () => {
  return (
    <div className="post-wrapper">
      <img src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="space" />
      
      <div className="post-content">
        <div className="likes"><span class="far fa-heart"></span></div>
        <h2 className="post-title">Glittery Cloud of Wonder</h2>
        <p className="post-caption">Some stars and stuff are looking very neat. We captured this with our telescope and almost didn’t get a photo because we were too busy going “wow” and wondering where the meaning is in our lives. Compared to this incomprehensible wonder, our existence of being mad about there only being like a tablespoon of cereal left in the box is pretty laughable.</p>
        <p className="post-date">September 14, 2021</p>
      </div>
    </div>
  )
}

export default Post;