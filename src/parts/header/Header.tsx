import './Header.css';
const Header = (): JSX.Element => {
  const clickTitle = () => {
    window.location.pathname === "/" ?
      setTimeout(() => { window.location.reload() }, 0):
      window.location.href = "/";
  }
  return (
    <div className='Header'>
      <button className='HeaderInner' onClick={()=>{clickTitle()}}>
        <img className='headder_icon' src="https://hirokiwa.github.io/mypage/img/messageImage_1644108394365.jpg" alt="icon" />
        <div className='title'>Hiroki is me</div> 
      </button>
    </div>
  );
}

export default Header;
