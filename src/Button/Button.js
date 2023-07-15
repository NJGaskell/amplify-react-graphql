import '../Button/Button.css';

export default function MyButton({count,onClick}){
    return (
      <button onClick={onClick}
      className='button'
      >I'm a button clicked {count} times</button>
    );
  }