import * as React from 'react';

interface Props {
  title: string;
  content: string;
}

const DisplayPage: React.FC<Props> = ({title, content}) => {
  return (
    <div>
      <h2 className="fs-3 fw-semibold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default DisplayPage;