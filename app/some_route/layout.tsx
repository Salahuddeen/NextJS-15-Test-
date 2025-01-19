import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        My App
                    </Typography>
                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit" href="/about">About</Button>
                    <Button color="inherit" href="/contact">Contact</Button>
                </Toolbar>
            </AppBar>
            <main>
                {children}
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} My App</p>
            </footer>
        </div>
    );
};

export default Layout;