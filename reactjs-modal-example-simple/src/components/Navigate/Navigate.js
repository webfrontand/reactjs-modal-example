import React from 'react';
import { Button } from 'semantic-ui-react';
import './Navigate.css';

const Navigate = ({onClick, postId, disabled}) => (
  <div className="Navigate">
    <Button
      color="teal"
      content="이전"
      icon="left arrow"
      labelPosition="left"
      onClick = {
        () => onClick('PREV')
      }
      disabled={disabled}
    />
    <div className="Navigate-page-num">
      {postId}
    </div>
    <Button
      color="teal"
      content="다음"
      icon="right arrow"
      labelPosition="right"
      className="Navigate-right-button"
      onClick = {
        () => onClick('NEXT')
      }
      disabled={disabled}
    />
  </div>
)

export default Navigate;
