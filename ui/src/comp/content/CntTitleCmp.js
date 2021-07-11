// Imports
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

// Resources
import './CntTitleCmp.css';

// Component
export class CntTitleCmp extends Component {

    render() {
        return(
            <h2 className="CntTitleCmp-title"><FormattedMessage id={this.props.title} /></h2>
        );
    };

  }