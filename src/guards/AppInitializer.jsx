import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyProfile } from "../store/slices/user.Slice";

const AppInitializer = ({ children }) => {
  const dispatch = useDispatch();
  const { profileLoaded } = useSelector((s) => s.user);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token && !profileLoaded) {
      dispatch(fetchMyProfile());
    }
  }, [token, profileLoaded, dispatch]);

  return children;
};

export default AppInitializer;
