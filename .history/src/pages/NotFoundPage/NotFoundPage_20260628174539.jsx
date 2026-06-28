import HomePage from "../HomePage/HomePage"
import { Routes, Route, Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div>
            
            <nav>
                <Link to="/">Go Home</Link>
            </nav>
        </div>
    );
}