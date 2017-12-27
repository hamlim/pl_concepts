import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

import Button from '../pl_button.js'

import {
  ComponentTitle as Title,
  ComponentBody as Section,
  Dynamic,
  Readme,
  Changelog,
  Usage,
} from '../../../hb/components/index.js'

import readme from './readme.md'
import changelog from './changelog.md'
import usage from './usage.md'

console.log({ usage, changelog, readme })

export default {
  Component: () => (
    <Fragment>
      <Route
        path="/button"
        render={routeProps =>
          routeProps.match && (
            <Fragment>
              <Title>Button</Title>
              <Section>
                <p>This is a Button component. It is used for allowing the user to take an action on the page.</p>

                <Readme docs={readme} />

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
      <Route path="/button/usage" render={routeProps => routeProps.match && <Usage docs={usage} />} />
      <Route path="/button/changlog" render={routeProps => routeProps.match && <Changelog docs={changelog} />} />
    </Fragment>
  ),
  Links: () => (
    <Fragment>
      <li>
        <Link to="/button">Main</Link>
      </li>
      <li>
        <Link to="/button/usage">Usage</Link>
      </li>
      <li>
        <Link to="/button/changelog">Changelog</Link>
      </li>
    </Fragment>
  ),
}
