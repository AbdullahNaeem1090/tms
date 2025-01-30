import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  
  interface emailProps {
    username: string;
    OTP: string;
  }
  
  const otpEmail = ({ username, OTP }: emailProps) => {
    return (
      <Html>
        <Head />
        <Preview>Sign in to jobaccepted.com</Preview>
        <Body style={main}>
          <Container style={container}>
            <Text style={company}>{username}</Text>
            <Heading style={codeTitle}>Your authentication code</Heading>
            <Text style={codeDescription}>
              Enter it in your Website for Verification. This code will expire in
              60 Seconds.
            </Text>
            <Section style={codeContainer}>
              <Heading style={codeStyle}>{OTP}</Heading>
            </Section>
            <Section style={buttonContainer}>
              
            </Section>
            <Text style={paragraph}>
              If you didnt request this OTP you can just ignore it.
            </Text>
            
          </Container>
        </Body>
      </Html>
    );
  };
  
  export default otpEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
    textAlign: "center" as const,
  };
  
  const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginTop: "20px",
    width: "480px",
    maxWidth: "100%",
    margin: "0 auto",
    padding: "12% 6%",
  };
  
  const company = {
    fontWeight: "bold",
    fontSize: "18px",
    textAlign: "center" as const,
  };
  
  const codeTitle = {
    textAlign: "center" as const,
  };
  
  const codeDescription = {
    textAlign: "center" as const,
  };
  
  const codeContainer = {
    background: "rgba(0,0,0,.05)",
    borderRadius: "4px",
    margin: "16px auto 14px",
    verticalAlign: "middle",
    width: "280px",
    maxWidth: "100%",
  };
  
  const codeStyle = {
    color: "#000",
    display: "inline-block",
    paddingBottom: "8px",
    paddingTop: "8px",
    margin: "0 auto",
    width: "100%",
    textAlign: "center" as const,
    letterSpacing: "8px",
  };
  
  const buttonContainer = {
    margin: "27px auto",
    width: "auto",
  };
  
  const paragraph = {
    color: "#444",
    letterSpacing: "0",
    padding: "0 40px",
    margin: "0",
    textAlign: "center" as const,
  };
  
  