import React from 'react';

import { crateStage, createSTage } from '../gameHelpers'; 
import { StyledTetrisWrapper, StyledTetris } from './styled/StyledTetris';

//Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {

	return (
		<StyledTetrisWrapper>
		    <StyledTetris>
			    <Stage stage={createSTage()} />
			        <aside>
				        <div>
					        <Display text="Score" />
					        <Display text="Rows" />
					        <Display text="Level" />
				        </div>
				       <StartButton/>
			        </aside>
			</ StyledTetris>
		</StyledTetrisWrapper>
		
	);
};

export default Tetris;
