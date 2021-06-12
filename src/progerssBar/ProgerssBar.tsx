import { LinearProgress } from '@material-ui/core';
import react from 'react';
import css from './ProgerssBar.module.scss';

function ProgerssBar(props: any) {

    return (
        <LinearProgress className={css.Progress} value={props.value} variant="determinate"></LinearProgress>
    )
}

export default ProgerssBar;