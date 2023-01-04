const SignInForm = ({setIsSignIn}) => {
  return (
    <>
    <h1>로그인</h1>

    <form className="flex-col-box-center">
        <label htmlFor="email" className="form-label"></label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          // value={signInData.email}
          className=" w-100"
        />
        <label htmlFor="password" className="form-label"></label>
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          name="password"
          id="password"
          // value={signInData.password}
          className=" w-100"
        />
        <button 
          type="button" 
          onClick={()=>{
          }}
          className="mb-20 mt-20 primary-btn btn-big w-100"
        >
          Login
        </button>
        <p>
          Not registered?{"  "}
          <span>
            <strong
              className="c-p"
              onClick={()=>{
                setIsSignIn(false)
              }}>Create an Account</strong>
          </span>
        </p>
      </form>
    </>
  )
}

export default SignInForm