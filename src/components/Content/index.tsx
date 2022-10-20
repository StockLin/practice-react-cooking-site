import React from 'react';
import './Content.css';

interface IProps {
  title: string,
  description: string,
  buttonText: string
}

const Content : React.FC<IProps> = ({ title, description, buttonText }) => {
  return (
    <div className="content">
      <div className="content__title">{ title }</div>
      <div className="content__description">
        { description }
      </div>
      <div className="btn">{ buttonText }</div>
    </div>
  )
}

export default Content