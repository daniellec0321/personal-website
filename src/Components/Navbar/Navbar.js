import { AppBar, Toolbar, IconButton } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export const Navbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start'>
                    <CatchingPokemonIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};