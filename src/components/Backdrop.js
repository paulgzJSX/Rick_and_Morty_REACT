import { useSelector } from 'react-redux'
import Backdrop from '@material-ui/core/Backdrop'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
)

export default function SimpleBackdrop() {
    const classes = useStyles()
    const { display, child } = useSelector(state => state.backdropReducer)

    return (
        <Backdrop className={classes.backdrop} open={display}>
            {child}
        </Backdrop>
    );
}