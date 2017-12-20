import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Card, Button } from 'reactstrap';
import classnames from 'classnames';
import './TaskList.scss';
import KoroSection from '../../modules/KoroSection/KoroSection'; 

export default class TaskList extends React.Component {

      constructor(props) {
            super(props);
            this.state = {selected: 0};

      }

      render() {

            return (
                  <KoroSection top>
                        <Container>
                              <h1 className="task__heading">Task list</h1>
                              <Row>
                                    <Col xl="3" md="4" sm="6" className="task-list">
                                          {this.props.tasks.map((task, i) =>
                                                <div className="task" onClick={() => { this.setState({selected: i}); }}>
                                                      <div className={classnames(["task__icon", {"task__icon--first" : i === 0}, {"task__icon--done" : i < this.state.selected}, {"task__icon--active" : i === this.state.selected}, {"task__icon--last": i === this.props.tasks.length - 1 }])}>
                                                            {task.icon && 
                                                                  <div className="task__icon__container">
                                                                        <i class={classnames(['fa', 'fa-' + task.icon])}></i>
                                                                  </div>
                                                            }
                                                            {!task.icon && 
                                                                  <div className="task__step" />
                                                            }
                                                            <div className="task__name">
                                                                  {task.name}
                                                            </div>
                                                      </div>
                                                </div>
                                          )}
                                    </Col>
                                    <Col xl="9" md="8" sm="6">
                                          {this.props.tasks.map((task, i) =>
                                                <div>
                                                      {i === this.state.selected &&
                                                            <div class="task__item" style={{marginTop: (82 * i) + 'px'}}>
                                                                  <h2>Vaihe { i + 1 } header</h2>
                                                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla tellus in laoreet condimentum. Aenean elementum, purus eu tincidunt gravida, enim magna tincidunt nunc, vel venenatis nunc sem eu ligula. Proin vel tristique nulla. Sed suscipit sodales ligula, non ultricies diam semper sit amet. Quisque ut nulla tempus, ultrices ipsum id, pellentesque ligula. Etiam eros mi, consequat quis diam id, vestibulum commodo tellus. Sed condimentum velit eros, a sodales enim malesuada volutpat.</p>
                                                                  <p>Curabitur volutpat, enim ut ultricies vestibulum, turpis leo malesuada justo, a commodo metus risus vitae lectus. Proin hendrerit, augue eget eleifend aliquam, lorem urna ullamcorper felis, at aliquam sem urna at justo. Etiam blandit nisl non sapien consequat, non tincidunt leo ornare. Nullam pellentesque vestibulum ante non commodo. Nam eros dui, viverra at est sit amet, consectetur pretium nisi...</p>
                                                                  <Button outline color="primary" onClick={() => { this.setState({selected: this.state.selected + 1}); }}>Next</Button>
                                                            </div>
                                                      }
                                                </div>
                                          )}
                                    </Col>
                              </Row>
                        </Container>
                  </KoroSection>
            );
      }
};