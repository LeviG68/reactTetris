export const STAGE_WIDTH= 12;
export const STAGE_HEIGHT= 2;

export const createSTage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0,'clear'])
    )

