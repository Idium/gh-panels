import React from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './styles.scss';

import {
  Panel,
  PanelBody,
  Column,
  Row
} from '../src';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

const demo = () => {
  return (
    <div className="demo">
      <Row>
        <h3>Growth House Panels demo page</h3>
      </Row>
      <Row>
        <Panel>
          <PanelBody style={{opacity:0.5}}>
            test
          </PanelBody>
        </Panel>
      </Row>
      <Row>
        <Column>
          <Panel>
            <PanelBody>
              row 1, column 1
            </PanelBody>
          </Panel>
        </Column>
        <Column>
          <Panel>
            <PanelBody>
              row 1, column 2
            </PanelBody>
          </Panel>
        </Column>
      </Row>
      <Row>
        <Column>
          <Panel>
            <PanelBody>
              row 2, column 1
            </PanelBody>
          </Panel>
        </Column>
        <Column>
          <Panel>
            <PanelBody>
              row 2, column 2
            </PanelBody>
          </Panel>
        </Column>
        <Column>
          <Panel>
            <PanelBody>
              row 2, column 3
            </PanelBody>
          </Panel>
        </Column>
      </Row>
      <Row>
        <Column>
          <Panel>
            <PanelBody>
              <img src="https://i.imgur.com/XF7bcA6.jpg" alt=""/>
            </PanelBody>
          </Panel>
        </Column>
        <Column>
          <Panel>
            <PanelBody>
              <img src="https://i.imgur.com/bu9C7jY.jpg" alt=""/>
            </PanelBody>
          </Panel>
        </Column>
        <Column>
          <Panel>
            <PanelBody>
              <img src="https://i.imgur.com/qePfRtH.jpg" alt=""/>
            </PanelBody>
          </Panel>
        </Column>
        <Column>
          <Panel>
            <PanelBody>
              <img src="https://i.imgur.com/xfPVO2e.jpg" alt=""/>
            </PanelBody>
          </Panel>
        </Column>
      </Row>
    </div>
  );
};

render(demo);

if (module.hot) {
  module.hot.accept( () => {
    render(demo);
  });
}
