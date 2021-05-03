
import React from 'react';
import Title from './Title';
import Button from '@material-ui/core/Button';

const Task3 = () => {
  return (
    <div>
      <Title>Tasks</Title>
      <Button>Western Australia</Button>
      <Button color="primary">Queensland</Button>
      <Button color="secondary">Northern Territory</Button>
      <Button>New South Wales</Button>
      <Button color="primary">Victoria</Button>
      <Button color="primary">Tasmania</Button>
    </div>
  );
}

export default Task3;