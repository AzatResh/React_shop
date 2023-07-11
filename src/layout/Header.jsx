function Header(props){
    return(
        <div>
            <nav className="header">
                <div className="header__container">
                    <a className="header__brand nav-link active" href="#">Movies</a>
                    <form className="header__form" role="search">
                    </form>
                </div>
            </nav>

        </div>
    );
}
export {Header};