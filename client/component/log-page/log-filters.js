/**
 * External dependencies
 */

import React from 'react';
import { translate as __ } from 'i18n-calypso';

/**
 * Internal dependencies
 */

import BulkAction from 'component/table/bulk-action';
import { MultiOptionDropdown } from 'wp-plugin-components';
import TableGroup from 'component/table/group';

/** @typedef {import('component/table').Table} Table */
/** @typedef {import('./index.js').GroupCallback} GroupCallback */
/** @typedef {import('./index.js').FilterCallback} FilterCallback */

function findGroup( group, item ) {
	return group.options.find( ( groupItem ) => groupItem.value === item );
}

/**
 *
 * @param {object} props Component props
 * @param {Table} props.table
 * @param {boolean} props.disabled
 * @param {} props.groupOptions
 * @param {} props.filterOptions
 * @param {GroupCallback} props.onGroup
 * @param {FilterCallback} props.onFilter
 */
function LogFilters( props ) {
	const { table, disabled, groupOptions, filterOptions, onGroup, onFilter } = props;

	function onChange( selected ) {
		const filter = {};

		for ( let index = 0; index < selected.length; index++ ) {
			const group = filterOptions.find( ( groupItem ) => findGroup( groupItem, selected[ index ] ) );

			if ( group ) {
				filter[ group.value ] = selected[ index ];
			}
		}

		onFilter( filter );
	}

	return (
		<>
			{ groupOptions.length > 0 && (
				<TableGroup
					selected={ table.groupBy ? table.groupBy : '0' }
					options={ groupOptions }
					isEnabled={ ! disabled }
					onGroup={ onGroup }
					key={ table.groupBy }
				/>
			) }

			{ filterOptions.length > 0 && (
				<BulkAction>
					<MultiOptionDropdown
						options={ filterOptions }
						selected={ Object.keys( table.filterBy ).map( ( item ) => table.filterBy[ item ] ) }
						onApply={ onChange }
						title={ __( 'Filters' ) }
						isEnabled={ ! disabled }
						multiple
						badges
					/>
				</BulkAction>
			) }
		</>
	);
}

export default LogFilters;
