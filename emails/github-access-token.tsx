import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface GithubAccessTokenEmailProps {
    name?: string;
    email?: string;
    message?: string;
}

export const GithubAccessTokenEmail = ({
  name, email, message
}: GithubAccessTokenEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        Email sent successfully
      </Preview>
      <Container style={container}>

        <Text style={company }>
         <span>Mebo</span> Rast
        </Text>

        <Text style={title}>
          <strong>@{email}</strong>
        </Text>

        <Section style={section}>
          <Text style={text}>
            Hey <strong>{name}</strong>!
          </Text>
          <Text style={text}>
            We will respond to your email as soon as possible. <br />
            Your message: <strong>{message}</strong>
          </Text>
         
        </Section>

        <Text style={footer}>
          MeboRast, SS38 km221, MEBO, 39057 Appiano s. s. d. Vino BZ
        </Text>
      </Container>
    </Body>
  </Html>
);

export default GithubAccessTokenEmail;

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
};

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
};
const company = {
  fontSize: '30px',
  color: '#ff8000',
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
};
