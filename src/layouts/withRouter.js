import { useNavigate, useLocation, useParams } from "react-router-dom";

export function withRouter(Component) {
  return props => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
}
