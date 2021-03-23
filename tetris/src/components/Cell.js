import React from 'react';
import { StyledCell } from './styled/StyledCell';
import {TETROMINOS } from '../tetrominos';

const Cell = ({type}) => (
<styledCell type={'L'} color={TETROMINOS['L'].color}> cell </styledCell>

)

export default Cell;
