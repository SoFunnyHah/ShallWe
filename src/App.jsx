import React from 'react';
import './App.css';

function App() {

  const [position, setPosition] = React.useState({
    top: '0%',
    left: '0%'
  })

  const [trigger, setTrigger] = React.useState(true)

  // React.useEffect(()=>{
  //   let left = Math.random() * 100
  //   let top = Math.random() * 100
  //   console.log(left, top)
  //   setPosition({top: top, left: left})
  // }, [setTrigger])

  const positionFunc = (prevLeft, prevTop) => {
    console.log(prevTop, prevLeft);
  
    prevLeft = parseInt(prevLeft.split('%')[0], 10);
    prevTop = parseInt(prevTop.split('%')[0], 10);
  
    let left = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    let top = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
  
    if (Math.abs(prevLeft - left) <= 5 || Math.abs(prevTop - top) <= 5) {
      console.log('err inc', prevTop, prevLeft);
      return positionFunc(prevLeft + '%', prevTop + '%');
    }
  
    setPosition({ top: top + '%', left: left + '%' });
    return;
  };

  const redirect = () => {
    window.location.href = 'https://www.gosuslugi.ru/life/details/marriage_registration';
  }

  return (
    <div className="background-container">
      <img src="/moon2.png" alt="" />
      <div className="stars"></div>
      <div className="twinkling"></div>
      <img className='ppl' src='/testai.png' alt='ppl' />
      <div className='flex-body'>
      <div className="container">
        <p className='title'>Пойдешь со мной на свидание?</p>
        <div className="pixel2" onClick={()=> redirect()}>ДА</div>
        <div onMouseOver={()=>positionFunc(position?.left, position?.top)} className="pixel2" style={{top: position?.top, left: position?.left}}>НЕТ</div>
      </div>
      </div>
    </div>
  );
}

export default App;
