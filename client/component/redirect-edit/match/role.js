/**
 * External dependencies
 */

import React from 'react';
import { translate as __ } from 'i18n-calypso';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import TableRow from '../table-row';

const MatchRole = ( { data, onChange } ) => {
	const { role } = data;

	return (
		<TableRow title={ __( 'Role' ) } className="redirect-edit__match">
			<input type="text" className="regular-text" value={ role } name="role" placeholder={ __( 'Enter role or capability value' ) } onChange={ onChange } />
		</TableRow>
	);
};

MatchRole.propTypes = {
	data: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default MatchRole;
