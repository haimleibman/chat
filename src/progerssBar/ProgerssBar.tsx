import react from 'react';
import css from './ProgerssBar.module.scss';

function ProgerssBar(props: any) {

    return (
        <progress className={css.Progress} max={3} value={props.value}>{props.value}</progress>
    )
}

export default ProgerssBar;