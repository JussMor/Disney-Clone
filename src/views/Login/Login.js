import  {  Container, 
            Content, 
            CTA, 
            CTALogoOne, 
            SignUp, 
            Description, 
            CTALogoTwo, 
            BgImage}  from './LoginStyle'
import Header from "../../components/layout/Header/Header";

const Login = (props) => {
    return (
      <Container>
        <Header />
        <Content>
          <CTA>
            <CTALogoOne src="/assets/images/cta-logo-one.svg" alt="" />
            <SignUp>GET ALL THERE</SignUp>
            <Description>
              Get Premier Access to Raya and the Last Dragon for an additional fee
              with a Disney+ subscription. As of 03/26/21, the price of Disney+
              and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src="/assets/images/cta-logo-two.png" alt="" />
          </CTA>
          <BgImage />
        </Content>
      </Container>
    );
  };

    export default Login;