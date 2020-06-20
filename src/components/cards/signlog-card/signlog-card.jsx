/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Card, Divider, Form, Input, Button } from 'antd';

import { styleColors } from '../../../styles/abstracts';
import { styleSpacing, absCenter } from '../../../styles/utils';

const Styles = ({
  container: css({
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }),

  card: css({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    padding: '3rem',

    '& .newAcc': {
      height: '10vh',
      width: '100%',
      backgroundColor: styleColors.primaryLight,
      borderColor: styleColors.secondaryLight
    },

    '& .form': {
      marginTop: styleSpacing.spacingSmall,

      '& input': {
        marginBottom: styleSpacing.spacingSmall,
        height: '5vh'
      }, 

      '& button': {
        float: 'right',
        backgroundColor: styleColors.primaryDark,
        color: styleColors.secondaryLight
      }
    }
  })
})

const SignLogCard = () => {
  return (
    <div css={Styles.container}>
      <Card style={{ width: '30vw', marginTop: 16 }} loading={false} css={Styles.card}>
        <h2>Masuk untuk Pembelian</h2>
        <Button type="primary" shape="round" size='large' className='newAcc'>
          Buat Akun Baru
        </Button>
        <Divider>atau</Divider>
        <span>Saya sudah punya akun</span>

      {/* Login Form*/}
        <Form className='form'>
          <Input placeholder='Email'></Input>
          <Input placeholder='Password'></Input>
          <Button size='middle'>Sign up</Button>
        </Form>

      {/* Login With Google*/}

      </Card>
    </div>
  )

}

export default SignLogCard;