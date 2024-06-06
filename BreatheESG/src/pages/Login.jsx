import '../styles/Login.css';

function Login() {
  return (
    <>
    <div className='main'>
      <div className='info'>
        <p className='wel-text'>WELCOME TO</p>
        <img src='/logoBEZ.png' alt='BreatheESG' className='logoimg' />
        <p className='wel-des'>We help you track your organisations metrics as per the ESG Guidelines</p>
        <p className='wel-close'>Sounds Interesting? Get in touch!</p>
      </div>


      <div className='login'>
        <img src='/signup.png' alt='login' className='loginimg' />
        <p className='signup'>Sign Up</p>
        <form id="signupForm" className='form'>
            <label>Email<span className='asterix'>*</span></label>
            <input type="email" id="email" name="email" required placeholder='Your Email ID'></input>
            
            <label>Password<span className='asterix'>*</span></label>
            <input type="password" id="password" name="password" required placeholder='Password'></input>
            
            <div className='google'><img src='/google.png' className='icon'/><p>Sign up with Google</p></div>
            <div className='google'><img src='/twitter.png' className='icon'/><p>Sign up with Twitter</p></div>

            <p className='Loginlink'>Having trouble logging in?<a className='url'>Contact Us</a></p>
            <button type="submit">Continue</button>
        </form>
        <p id="message"></p>
      </div>
    </div>
    </>
  )
}

export default Login
