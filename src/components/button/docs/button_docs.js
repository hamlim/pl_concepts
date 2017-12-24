import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Button from '../pl_button.js'

import { ComponentTitle as Title, ComponentBody as Section, Dynamic } from '../../../hb/components/index.js'

export default () => (
  <Route
    path="/button"
    render={routeProps =>
      routeProps.match && (
        <Fragment>
          <Title>Button</Title>
          <Section>
            <p>This is a Button component. It is used for allowing the user to take an action on the page.</p>

            <Button>Click Me</Button>
          </Section>
          <Section>
            <Dynamic
              component={Button}
              render={({ children }) => (
                <Fragment>
                  <Button>{children}</Button>
                  <pre>
                    <code>{`<Button>${children}</Button>`}</code>
                  </pre>
                </Fragment>
              )}
            />
          </Section>
        </Fragment>
      )
    }
  />
)
