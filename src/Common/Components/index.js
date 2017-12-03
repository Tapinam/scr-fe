import React                      from 'react'
import ReactDOM                   from 'react-dom'
import ReactDOMServer             from 'react-dom/server'
import { Provider }               from 'react-redux'

import { Store }                  from './store';

import listComp                   from './list/list.component';

const decorate = (element, isContainer) => (
  {
    element,
    renderToDOM(props, node) {
      var el = React.createElement(element, { data: props.data, placeholders: props.placeholders });
      if (isContainer) {
        el = React.createElement(Provider, { store: Store }, el);
      }
      ReactDOM.render(el, document.getElementById(node))
    },
    renderToString(props) {
      var el = React.createElement(element, { data: props.data, placeholders: props.placeholders });
      if (isContainer) {
        el = React.createElement(Provider, { store: Store }, el);
      }
      return ReactDOMServer.renderToString(el)
    },
    renderToStaticMarkup(props) {
      var el = React.createElement(element, { data: props.data, placeholders: props.placeholders });
      if (isContainer) {
        el = React.createElement(Provider, { store: Store }, el);
      }
      return ReactDOMServer.renderToStaticMarkup(el)
    },
    getPlaceholders(){
      if(typeof(element) === 'undefined'
        || typeof(element.placeholders) === 'undefined') {
          return '';
      }

      return JSON.stringify(element.placeholders)
    }
  }
)

// exports

export const list         = decorate(listComp, true);