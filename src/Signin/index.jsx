import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton, TextField } from './SigninElements'


const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>MANZAR</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Lets Collab!</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput htmlFor='name' required />
              <FormLabel htmlFor='for'>Message</FormLabel>
              {/* textfield isnt working */}
              <TextField label='Multiline' multiline rows={3} />
              <FormButton type='submit'>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
