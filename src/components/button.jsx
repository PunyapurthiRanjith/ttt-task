import Button from 'react-bootstrap/Button';

function MyButton({text,color}) {
  return (
    <>
      <Button variant={color} style={{margin:"3px"}}>{text}</Button>
    </>
  );
}

export default MyButton;