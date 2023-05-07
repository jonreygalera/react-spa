import React from 'react';
interface Props {

}

const NotFoundPage: React.FC<Props> = (props) => {

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Not Found</i>
      </p>
    </div>
  );
}

export default NotFoundPage;
