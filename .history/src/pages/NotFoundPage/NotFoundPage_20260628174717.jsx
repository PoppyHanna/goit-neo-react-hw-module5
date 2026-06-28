import HomePage from "../HomePage/HomePage"
import { Routes, Route, Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found!!!</p>
            <nav>
                <Link to="/"><HomePage/></Link>
            </nav>
        </div>
    );
}