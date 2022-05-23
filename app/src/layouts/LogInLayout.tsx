import { FC, ReactNode } from 'react'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import { Grid } from '@mui/material'


const LogInLayout = ({ children }: { children: ReactNode }) => {
    return (
            <Grid
                sx={{ p: 2 }}
                container direction='column'
                justifyContent='flex-start'
                alignItems='center'
            >
                <ThreeDRotation fontSize='large' />
                <h1>QTE &lt;3</h1>
                <main>{children}</main>
            </Grid>
    )
}

export default LogInLayout;