import { AppBar, Toolbar,Typography, IconButton } from "@mui/material"
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
 const Header = () => {
    return (
        <AppBar position='static' color='secondary'>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phonebook
                </Typography>
                 <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
                >
                    <AccountCircleSharpIcon/>
          </IconButton>
            </Toolbar>    
        </AppBar>
    )
}
// export default Header;