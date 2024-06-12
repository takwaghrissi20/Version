import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Checkbox, Form, Input, Col, Button } from 'antd';
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import IntlMessages from '../../../@crema/helpers/IntlMessages';
import { useAuthMethod } from '../../../@crema/hooks/AuthHooks';
import AppAnimate from '../../../@crema/components/AppAnimate';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import Logo from '../../../assets/user/logoGetsPNG.png';


import {
 
  StyledUserCardHeader,
  StyledUserCardLg,
  StyledUserContainer,
  StyledUserFieldAction,
  StyledUserFieldActionLink,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserStyledImg,
  StyledSign,
  StyledSignContent

} from './indexLogin.styled';

const SignInJwtAuth = () => {
  const navigate = useNavigate();
  const { signInUser } = useAuthMethod();


  const onGoToForgetPassword = () => {
    navigate('/forget-password', { tab: 'jwtAuth' });
  };

  function onRememberMe(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const { messages } = useIntl();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <StyledSign>
    <StyledSignContent>
      <StyledUserPages> 
        <AppPageMeta title='Signin' />
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <StyledUserContainer key='a'>
            <StyledUserCardLg>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <StyledUserStyledImg className='user-styled-img'>
                    <img src={Logo} alt={Logo} />
                  </StyledUserStyledImg>
                </Col>
                <Col xs={24} md={12}>
                  <StyledUserCardHeader>
                    <h3>
                      <IntlMessages id='common.login' />
                    </h3>
                  </StyledUserCardHeader>

                  <StyledUserForm
                    name='basic'
                    initialValues={{
                      remember: true,
                      username: 'admin',
                      password: '123456789',
                    }}
                    onFinish={signInUser}
                    onFinishFailed={onFinishFailed}
                  >
                    <p>Version0</p>

                    <Form.Item
                      name='username'
                      className='form-field'
                     
                      rules={[{ required: true, message: 'Please input your user Name!' }]}
                    >
                      <Input
                      className='InputAuth'
                
                      placeholder={messages['common.username']} />
                    </Form.Item>

                    <Form.Item
                      name='password' 
                     
                      className='form-field'
                      rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                      <Input.Password
                      className='InputAuth'
                      placeholder={messages['common.password']} />
                    </Form.Item>

                    <StyledUserFieldAction
                      name='remember'
                      valuePropName='checked'
                    >
                      <>
                      <Checkbox onChange={onRememberMe}>
                          <IntlMessages id='common.rememberMe' />
                        </Checkbox>
                        <StyledUserFieldActionLink onClick={onGoToForgetPassword} className='user-field-action-link ml-auto'>
                          <IntlMessages id='common.forgetPassword' />
                        </StyledUserFieldActionLink>
                      </>
                    </StyledUserFieldAction>

                    <StyledUserFormBtn type='primary' htmlType='submit'>
                      <IntlMessages id='common.login' />
                    </StyledUserFormBtn>
                  </StyledUserForm>

                  {/* <StyledUserCardFooterAction>
                    <span>
                      <IntlMessages id='common.orLoginWith' />
                    </span>
                    <StyledUserSocialLink>
                      <Button>
                        <FaFacebookF />
                      </Button>
                      <Button>
                        <GithubOutlined />
                      </Button>
                      <Button>
                        <TwitterOutlined />
                      </Button>
                    </StyledUserSocialLink>
                  </StyledUserCardFooterAction> */}

                  {/* <StyledUserCardFooter>
                    <span>
                      <IntlMessages id='common.dontHaveAccount' />
                    </span>
                    <StyledUserCardFooterLink to='/signup'>
                      <IntlMessages id='common.signup' />
                    </StyledUserCardFooterLink>
                  </StyledUserCardFooter> */}
                </Col>
              </AppRowContainer>
            </StyledUserCardLg>
          </StyledUserContainer>
        </AppAnimate>
      </StyledUserPages>
</StyledSignContent>
    </StyledSign>
  );
};

export default SignInJwtAuth;
