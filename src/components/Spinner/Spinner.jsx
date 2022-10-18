import Loader from 'react-loader-spinner';
import css from './Spinner.module.css';

export default function Spinner () {
  return (
    <div className={css.container}>
      <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} radius={5} wrapperStyle="" wrapperClass={{}} visible={true} ariaLabel='ball-triangle-loading' />
    </div>
  );
}




  
