import { useNavigate, useLocation, useParams } from "react-router-dom";

export function withRouter(Component) {
  return (props) => {
    const router = {
      navigate: useNavigate(),
      location: useLocation(),
      params: useParams()
    };
    return <Component {...props} router={router} />;
  };
}
