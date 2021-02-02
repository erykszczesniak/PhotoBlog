import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () =>
  <Row>
    <Col md="8">
      {/* AUTHOR INTRO STARTS */}
      <Media className="mb-4 admin-intro">
        <Image
         
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
          <p className="welcome-text">
          My name is Hal and here are my photos.
          </p>
        </Media.Body>
      </Media>
      {/* AUTHOR INTRO ENDS */}
    </Col>
  </Row>



export default AuthorIntro;