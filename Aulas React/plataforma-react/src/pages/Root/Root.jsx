import { Menu } from "../../components/Menu/Menu"
import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"

export const Root = () => {
    return (
        <div className="root">
            <Menu />
            <Container>
                <Outlet/>
            </Container>
        </div>
    )
}