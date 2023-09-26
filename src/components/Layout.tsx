import { Grid } from '@mui/material'
import { DefaultComponentProps, OverridableTypeMap } from '@mui/material/OverridableComponent';

export type LayoutProps = DefaultComponentProps<OverridableTypeMap>;

export const Layout = (props: LayoutProps) => {
    return (<Grid {...props} />)
}
