import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

import bgImage from "../static/img/bg1.jpg";

const Landing = () => {
    useDocumentTitle("Trello");
    return (
        <div className="landing-banner">
            <img className="landing-banner__image" src={bgImage} />
            <div className="landing-banner__content">
                <h1 className="landing-banner__title">
                    Gestor de objetos flexível e adaptável.
                </h1>
                <h4 className="landing-banner__subtitle">
                   Priorize seu tempo e faça uma gestão assertiva e inteligente.
                </h4>
                <Link to="/register" className="btn">
                Cadastre-se gratuitamente
                </Link>
            </div>
        </div>
    );
};

export default Landing;
