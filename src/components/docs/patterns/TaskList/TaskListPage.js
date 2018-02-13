/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';

import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';
import CodeTabs from '../../../CodeTabs/CodeTabs';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';
import TaskList from './TaskList';

import globals from '../../../../globals.json';

const Documentation = require('!!raw-loader!./TaskList.md');

const TaskListSource = require('!!raw-loader!./TaskList.html');
const TaskListJsxSource = require('!!raw-loader!./TaskList');
const TaskListCSSSource = require('!!raw-loader!./TaskList.scss');

const githubUrl = globals.githubUrl + 'tree/master/src/components/docs/patterns/TaskList'

const welcome = {
  heading: 'Task list',
  paragraph: 'One of the major use of the city services is for users to complete certain tasks. Task list pattern provides a way to bundle the tasks together in user-friendly manner with a view to the whole process.',
  
}

const TaskListCode = [
      {
            code: TaskListSource,
            language: 'markup',
            name: 'HTML markup'
      },
      {
            code: TaskListCSSSource,
            language: 'css',
            name: 'SCSS styles'
      },
      {
            code: TaskListJsxSource,
            language: 'markup',
            name: 'React component'
      }
]

export default class TaskListPage extends React.Component {
  render() {
      const tasks = [
            {
                  name: 'Vaihe 1',
                  icon: 'list'
            },
            {

                  name: 'Vaihe 2'
            },
            {

                  name: 'Vaihe 3'
            },
            {
                  name: 'Vaihe 4',
                  icon: 'list'
            },
            {
                  name: 'Vaihe 5',
                  icon: 'check'
            }
      ]
      return (
            <div>
                  <Helmet title="Task list" />

                  <WelcomeSmall welcome={welcome} />

                  <div className="docs-example">
                        <TaskList tasks={tasks} />
                  </div>

                  <article className="docs-markdown">
                        <Markdown source={Documentation} />
                  </article>

                  <h2>Code</h2>

                  <CodeTabs code={TaskListCode}>
                  </CodeTabs>
            </div>
      );
  }
}
