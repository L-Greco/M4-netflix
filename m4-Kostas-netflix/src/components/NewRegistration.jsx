import { Component } from "react";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
class NewRegistration extends Component {
  state = {
    firstNameValidation: true,
    lastNameValidation: true,
    emailValidation: true,
    passwordValidation: true,
    postalValidation: true,
  };

  render() {
    return (
      <>
        <h1>Registration Form</h1>
        <Container>
          <Row>
            <Col className="mx-auto" sm={8}>
              <Form hasValidation>
                <Form.Row>
                  <Col>
                    <Form.Control
                      isInvalid={this.state.firstNameValidation}
                      placeholder="First name"
                      pattern="[A-Za-z]{2,}"
                      title="Type a real name please..."
                      onChange={(e) =>
                        e.target.validity.valid
                          ? this.setState({ firstNameValidation: false })
                          : this.setState({ firstNameValidation: true })
                      }
                      required
                    />
                    {}
                  </Col>
                  <Col>
                    <Form.Control
                      isInvalid={this.state.lastNameValidation}
                      placeholder="Last name"
                      pattern="[A-Za-z]{3,}"
                      title="Type a real surname please..."
                      onChange={(e) =>
                        e.target.validity.valid
                          ? this.setState({ lastNameValidation: false })
                          : this.setState({ lastNameValidation: true })
                      }
                      required
                    />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Group
                    className="mt-1"
                    as={Col}
                    controlId="formGridEmail"
                  >
                    <Form.Control
                      isInvalid={this.state.emailValidation}
                      onChange={(e) =>
                        e.target.validity.valid
                          ? this.setState({ emailValidation: false })
                          : this.setState({ emailValidation: true })
                      }
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mt-1"
                    as={Col}
                    controlId="formGridPassword"
                  >
                    <Form.Control
                      isInvalid={this.state.passwordValidation}
                      onChange={(e) =>
                        e.target.validity.valid
                          ? this.setState({ passwordValidation: false })
                          : this.setState({ passwordValidation: true })
                      }
                      type="password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      placeholder="Password"
                      required
                      title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridAddress1">
                  <Form.Control placeholder="Address" />
                </Form.Group>
                <Form.Group controlId="forDate">
                  <Form.Control
                    type="date"
                    min={"1910-01-01"}
                    max={"2019-01-01"}
                    placeholder="Year of Birth"
                    required
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Control placeholder="City" required />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Control
                      isInvalid={this.state.postalValidation}
                      onChange={(e) =>
                        e.target.validity.valid
                          ? this.setState({ postalValidation: false })
                          : this.setState({ postalValidation: true })
                      }
                      placeholder="Zip Code"
                      required
                      pattern="[0-9]{5}"
                      title="5 digits code please."
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="cardNumber">
                    <Form.Control
                      type="tel"
                      inputmode="numeric"
                      pattern="[0-9\s]{13,19}"
                      autocomplete="cc-number"
                      maxlength="19"
                      placeholder="xxxx xxxx xxxx xxxx"
                    />
                  </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default NewRegistration;
