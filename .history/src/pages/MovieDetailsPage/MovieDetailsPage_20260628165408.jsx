import { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import { getMovieDetails } from "../../moviesService";
import css from "./MovieDetailsPage.module.css";

