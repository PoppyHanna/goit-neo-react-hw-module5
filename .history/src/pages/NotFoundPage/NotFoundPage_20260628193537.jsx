import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css"


export default function NotFoundPage() {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found!!!</p>
            <nav>
                <Link to="/">Go to Home</Link>
            </nav>
        </div>
    );
}