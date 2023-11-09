import {LayoutProps} from "./layout.props";

function Layout({children}: LayoutProps): JSX.Element {

    return (
        <div className={'flex w-full h-screen flex-col'}>
            <main
                className={'w-full h-auto'}>{children}</main>
        </div>
    );
}

export default Layout;