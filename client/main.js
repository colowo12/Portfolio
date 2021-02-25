import React, { Component } from "react";
import {
  Button,
  Grid,
  Header,
  Segment,
  Container,
  Image,
  Modal,
  Card,
} from "semantic-ui-react";
import Typical from "react-typical";
import Monkey from "./monkey";
import Coffee from "./coffee";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };

    this.setOpen = this.setOpen.bind(this);
  }

  setOpen(openState) {
    this.setState({ open: openState });
  }

  render() {
    return (
      <div className="editUser">
        <Segment
          inverted
          vertical
          style={{
            width: "100%",
          }}
        >
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Container text>
                  <Header
                    as="h1"
                    inverted
                    style={{
                      fontSize: "4em",
                      fontWeight: "normal",
                      marginBottom: 0,
                      marginTop: "3em",
                    }}
                  >
                    <Typical
                      steps={["Hello", 1000, "I am Comfort!", 5000]}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </Header>
                  <Header
                    as="h2"
                    content="Software Engineer, Robotics Enthusiast, Foodie, Runner"
                    inverted
                    style={{
                      fontSize: "1.7em",
                      fontWeight: "normal",
                      marginTop: "1.5em",
                      paddingBottom: "1em",
                    }}
                  />
                </Container>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Monkey />
                {/* <Image
                  style={{
                    height: "25em",
                    width: "25em",
                    objectFit: "cover",
                  }}
                  bordered
                  circular
                  size="small"
                  src="https://www.pixelstalk.net/wp-content/uploads/images4/Free_Cute_Phone_Wallpapers.jpg"
                /> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={10}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Projects
                </Header>
                <br />
                <br />
                <Grid columns={3}>
                  <Grid.Column>
                    <Card
                      image="https://www.istockphoto.com/resources/images/FreeFileIllustration/Free_Illustration_740x492_iStock-1005200402.jpg"
                      header="Plutus: A Budget Management App"
                      meta="Capstone"
                      description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Card
                      image="https://cracksforpc.net/wp-content/uploads/2021/01/young-people-jumping-together-illustration_52683-27019.jpg"
                      header="Tech-Flip: A Mobile Game"
                      meta="Stackathon"
                      description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Card
                      image="https://www.istockphoto.com/resources/images/FreeFileIllustration/Free_Illustration_740x492_iStock-1005200402.jpg"
                      header="BookShopper: An E-Commerce Site"
                      meta="GraceShopper"
                      description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
                    />
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column floated="right" width={4}>
                Animation Holder
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Modal
                  onClose={() => this.setOpen(false)}
                  onOpen={() => this.setOpen(true)}
                  open={this.state.open}
                  trigger={<Button>Update</Button>}
                >
                  <Modal.Header>Update your settings</Modal.Header>
                  <Modal.Content image>
                    <Modal.Description>
                      <Header as="h2" color="teal" textAlign="center">
                        Edit your account
                      </Header>
                      <Grid textAlign="center" verticalAlign="middle">
                        <Grid.Column style={{ maxWidth: 200 }}>
                          Video Placeholder
                        </Grid.Column>
                      </Grid>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button
                      color="teal"
                      type="submit"
                      content="Update My Account"
                      labelPosition="right"
                      icon="checkmark"
                      onClick={() => this.setOpen(false)}
                    />
                  </Modal.Actions>
                </Modal>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns={2} stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{
                  paddingBottom: "5em",
                  paddingTop: "5em",
                  width: "33%",
                }}
              >
                <Coffee />
                <p style={{ fontSize: "1.33em" }}>contact info</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Grid columns={3}>
                  <Grid.Column>Get in Touch</Grid.Column>
                  <Grid.Column>Text</Grid.Column>
                  <Grid.Column>Text</Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
