import React from 'react';
import {
  LoginFooterItem,
  LoginForm,
  LoginMainFooterBandItem,
  LoginMainFooterLinksItem,
  LoginPage,
  ListItem,
  ListVariant,
  Button
} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import GoogleIcon from '@patternfly/react-icons/dist/esm/icons/google-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import DropboxIcon from '@patternfly/react-icons/dist/esm/icons/dropbox-icon';
import FacebookSquareIcon from '@patternfly/react-icons/dist/esm/icons/facebook-square-icon';
import GitlabIcon from '@patternfly/react-icons/dist/esm/icons/gitlab-icon';
import { useNavigate } from 'react-router-dom';


export const LoginPageHideShowPassword: React.FunctionComponent = () => {
  const [showHelperText, setShowHelperText] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [isValidUsername, setIsValidUsername] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [isValidPassword, setIsValidPassword] = React.useState(true);
  const [isRememberMeChecked, setIsRememberMeChecked] = React.useState(false);
  const navigate = useNavigate();
  const handleUsernameChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (_event: React.FormEvent<HTMLInputElement>, value: string) => {
    setPassword(value);
  };

  const onRememberMeClick = () => {
    setIsRememberMeChecked(!isRememberMeChecked);
  };

  const onLoginButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsValidUsername(!!username);
    setIsValidPassword(!!password);
    setShowHelperText(!username || !password);

    if (username=='admin' && password=='password') {
        navigate('/page1'); // Redirect to /home after login
      }
      else{
        setShowHelperText(true);
      }
  };

  const socialMediaLoginContent = (
    <React.Fragment >
      <LoginMainFooterLinksItem style={{marginTop: '30px'}}>
        <Button variant="plain" aria-label="Login with Google" icon={<GoogleIcon />} />
      </LoginMainFooterLinksItem>
      <LoginMainFooterLinksItem style={{marginTop: '30px'}}>
        <Button variant="plain" aria-label="Login with Github" icon={<GithubIcon />} />
      </LoginMainFooterLinksItem>
      <LoginMainFooterLinksItem style={{marginTop: '30px'}}>
        <Button variant="plain" aria-label="Login with Dropbox" icon={<DropboxIcon />} />
      </LoginMainFooterLinksItem>
      <LoginMainFooterLinksItem style={{marginTop: '30px'}}>
        <Button variant="plain" aria-label="Login with Facebook" icon={<FacebookSquareIcon />} />
      </LoginMainFooterLinksItem>
      <LoginMainFooterLinksItem style={{marginTop: '30px'}}>
        <Button variant="plain" aria-label="Login with Gitlab" icon={<GitlabIcon />} />
      </LoginMainFooterLinksItem>
    </React.Fragment>
  );

  const signUpForAccountMessage = (
    <LoginMainFooterBandItem>
      Need an account? <a href="https://www.patternfly.org/">Sign up.</a>
    </LoginMainFooterBandItem>
  );

  const forgotCredentials = (
    <LoginMainFooterBandItem>
      <a href="https://www.patternfly.org/">Forgot username or password?</a>
    </LoginMainFooterBandItem>
  );

  const listItem = (
    <React.Fragment>
      <ListItem>
        <LoginFooterItem href="https://www.patternfly.org/">Terms of Use </LoginFooterItem>
      </ListItem>
      <ListItem>
        <LoginFooterItem href="https://www.patternfly.org/">Help</LoginFooterItem>
      </ListItem>
      <ListItem>
        <LoginFooterItem href="https://www.patternfly.org/">Privacy Policy</LoginFooterItem>
      </ListItem>
    </React.Fragment>
  );

  const loginForm = (
    <LoginForm style={{maxHeight:'100vh'}}
      showHelperText={showHelperText}
      helperText="Invalid login credentials."
      helperTextIcon={<ExclamationCircleIcon />}
      usernameLabel="Username"
      usernameValue={username}
      onChangeUsername={handleUsernameChange}
      isValidUsername={isValidUsername}
      passwordLabel="Password"
      passwordValue={password}
      isShowPasswordEnabled
      onChangePassword={handlePasswordChange}
      isValidPassword={isValidPassword}
      rememberMeLabel="Keep me logged in for 30 days."
      isRememberMeChecked={isRememberMeChecked}
      onChangeRememberMe={onRememberMeClick}
      onLoginButtonClick={onLoginButtonClick}
      loginButtonLabel="Log in"
      
    />
  );

  return (
    <LoginPage style={{backgroundImage: `url('https://img.pikbest.com/wp/202408/carbon-fiber-3d-abstract-background-in-black-texture_9778423.jpg!w700wp')`, backgroundSize: 'cover', // or 'contain', 'auto', etc.
        backgroundPosition: 'fit',
        backgroundRepeat: 'no-repeat'}}
      footerListVariants={ListVariant.inline}
      brandImgSrc={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/768px-Tata_Consultancy_Services_Logo.svg.png?20210617123944"}
      brandImgAlt="PatternFly logo"
      backgroundImgSrc="https://cdn-icons-png.flaticon.com/512/3828/3828258.png"
      //footerListItems={listItem}
      //textContent="This is the website for T-cloud"
      loginTitle="Log in to your account"
      loginSubtitle="Enter your sign-on TCS credentials."
      //socialMediaLoginContent={socialMediaLoginContent}
      //socialMediaLoginAriaLabel="Log in with social media"
      signUpForAccountMessage={signUpForAccountMessage}
      forgotCredentials={forgotCredentials}
    >
    <div style={{marginTop:'20px'}} className="custom-login-container">
    {loginForm}
    </div>
    </LoginPage>
  );
};
