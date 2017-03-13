import React, { Component } from 'react';
import { PostWrapper, Navigate, Post, Warning } from '../../components';
import * as service from '../../services/post';

class PostContainer extends Component {
  constructor(props) {
      super();
      // initializes component state
      this.state = {
          postId: 1,
          fetching: false, // tells whether the request is waiting for response or not
          post: {
              title: null,
              body: null
          },
          comments: [],
          warningVisibility: false
      };
    }

  showWarning = () => {
    this.setState({
      warningVisibility: true
    });

    setTimeout(
      () => {
        this.setState({
          warningVisibility: false
        })
      }, 1500
    )
  }
  handleNavigateClick = (type) => {
    const postId = this.state.postId;
    if(type === 'NEXT'){
      this.fetchPostInfo(postId+1);
    } else {
      this.fetchPostInfo(postId-1);
    }
  }
  // 화살표 함수라서 바인딩을 하지 않아도 좋다.
  fetchPostInfo = async (postId) => {

    this.setState({
      fetching: true
    });

    try {
      const info = await Promise.all([
        service.getPost(postId),
        service.getComments(postId)
      ]);

      const { title, body } = info[0].data;
      const comments = info[1].data;

      this.setState({
        postId,
        post: {
          title,
          body
        },
        comments,
        fetching: false
      });

    } catch(err) {
      this.setState({
        fetching: false
      });
      this.showWarning();
    }

    /*
      showWarning 메소드는 warningVisibility 값을
      true 로 설정한 다음에 1.5초 후에 다시 false로 설정합니다.


    */
  }

  componentDidMount(){
    this.fetchPostInfo(1);
  }
  render(){
    const { postId, fetching, post, comments } = this.state;
    return (
      <PostWrapper>
        <Navigate
          postId={postId}
          disabled={fetching}
          onClick={this.handleNavigateClick}
        />
        <Post
          postId={postId}
          title={post.title}
          body={post.body}
          comments={comments}
          visible={this.state.warningVisibility}
        />
        <Warning visible={this.state.warningVisibility} message="That post does not exist" />
      </PostWrapper>
    )
  }
}

export default PostContainer;
