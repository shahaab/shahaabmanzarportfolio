import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, Text } from './SigninElements'

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>MANZAR</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign Up to My Newsletter!</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput htmlFor='name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput htmlFor='email' required />
              <FormButton type='submit'>Sign Me Up!</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
